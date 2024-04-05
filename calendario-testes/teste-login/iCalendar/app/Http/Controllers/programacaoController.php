<?php

namespace App\Http\Controllers;

use App\Models\Entidade;
use App\Models\Entidade_contato;
use App\Models\Entidade_pessoa_fisica;
use App\Models\Entidade_pessoa_juridica;
use App\Models\Janela;
use App\Models\Programacao;
use App\Models\Veiculo;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class programacaoController extends Controller
{
    public function insertProgramacao(Request $request)
    {

        //Pego o id da operação atraves do id da Janela usando o metodo
        if ($request->input('id_janela')) {
            $id_operacao = $this->getOperacao($request->input('id_janela'));
        } else {
            $id_operacao = 1;
        }

        if ($request->input('id_entidade_transportador')) {
            $id_transportador = $request->input('id_entidade_transportador');
        } else {
            $id_transportador = $this->getTransportador($request->input('entidade_transportador'));
        }

        $dadosVeiculos = [
            "cavalo" => [
                "id_veiculo_tipo" => $request->input('veiculo.cavalo.id_veiculo_tipo'),
                "placa" => $request->input('veiculo.cavalo.placa')
            ],
            "carreta" => [
                "id_veiculo_tipo" => $request->input('veiculo.carreta.id_veiculo_tipo'),
                "placa" => $request->input('veiculo.carreta.placa')
            ]
        ];

        $dadosPessoa = [
            "nome" => $request->input('pessoa.nome'),
            "natureza" => $request->input('pessoa.natureza'),
            "estrutura" => $request->input('pessoa.estrutura'),
            "motorista" => $request->input('pessoa.motorista'),
            "pessoa_fisica" => [
                "nome" => $request->input('pessoa.pessoa_fisica.nome'),
                "cpf" => $request->input('pessoa.pessoa_fisica.cpf'),
                "cnh" => $request->input('pessoa.pessoa_fisica.cnh'),
                "rg" => $request->input('pessoa.pessoa_fisica.rg'),
            ],
            "contato" => [
                "email" => $request->input('pessoa.contato.email'),
                "numero" => $request->input('pessoa.contato.numero'),
            ]
        ];


        DB::beginTransaction();
        try {
            $resultadoPessoas = $this->insertPessoas($dadosPessoa);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Erro ao inserir pessoas: ' . $e->getMessage());
            return response()->json(['mensagem' => 'Erro ao inserir pessoas', 'Detalhes' => $e->getMessage()], 500);
        }
        try {
            $resultadoVeiculos = $this->insertVeiculos($dadosVeiculos);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Erro ao inserir veiculos: ' . $e->getMessage());
            return response()->json(['mensagem' => 'Erro ao inserir veiculos', 'Detalhes' => $e->getMessage()], 500);
        }


        try {
            $programacao = new Programacao();
            $programacao->id_entidade_criador = $request->input('id_entidade_criador');
            $programacao->id_entidade_cliente = $request->input('id_entidade_cliente');
            $programacao->id_entidade_transportador = $id_transportador;
            $programacao->id_entidade_motorista = $resultadoPessoas;
            $programacao->id_veiculo_cavalo = $resultadoVeiculos['cavalo'];
            if (isset($resultadoVeiculos['carreta'])) {
                $programacao->id_veiculo_carreta = $resultadoVeiculos['carreta'];
            }
            $programacao->id_operacao = $id_operacao;
            $programacao->id_janela = $request->input('id_janela');
            $programacao->id_entidade_unidade_negocio = $request->input('id_entidade_unidade_negocio');
            $programacao->datahora_inicio = $request->input('datahora_inicio');
            $programacao->datahora_fim  = $request->input('datahora_fim');
            $programacao->save();
        } catch (\Illuminate\Database\QueryException $e) {
            DB::rollBack();
            Log::error('Erro ao inserir programação: ' . $e->getMessage());
            $errorCode = $e->errorInfo[1];
            if ($errorCode == 1062) {
                // Chave duplicada
                return response()->json(['mensagem' => 'Programação já foi realizada nessas especificações', 'causas' => 'O motorista já foi cadastrado nesse slot da janela para o mesmo veiculo', 'details' => $e->getMessage()], 500);
            } else if ($errorCode == 1048) {
                $mensagemErro = $e->getMessage();
                $padrao = "/Column '(.*?)' cannot/";
                preg_match($padrao, $mensagemErro, $correspondencias);
                $nomeColuna = $correspondencias[1] ?? 'Desconhecido';
                return response()->json(['mensagem' => 'A coluna ' . $nomeColuna . ' não pode ser nula', 'causas' => '', 'details' => $e->getMessage()], 500);
            } else if ($errorCode == 1366) {
                return response()->json(['mensagem' =>  $e->getMessage(), 'details' => $e->getMessage()], 500);
            }
            return response()->json(['mensagem' => 'Erro ao inserir programação', 'details' => $e->getMessage()], 500);
        }

        DB::commit();
        return response()->json(['mensagem' => 'Programado com sucesso!', 'details' => $programacao], 201);
    }

    public function updateProgramacao(Request $request)
    {
        $validatedData = $request->validate([
            'id_janela' => 'required|integer',
            'datahora_inicio' => 'required|date',
            'datahora_fim' => 'required|date',
        ]);

        $programacoes = Programacao::where('id_janela', $validatedData['id_janela'])->get();

        foreach ($programacoes as $programacao) {

            $horaInicio = Carbon::parse($programacao->datahora_inicio)->format('H:i:s');
            $horaFim = Carbon::parse($programacao->datahora_fim)->format('H:i:s');

            $novaDataInicio = Carbon::parse($validatedData['datahora_inicio'])->format('Y-m-d');
            $novaDataHoraFim = Carbon::parse($validatedData['datahora_fim'])->format('Y-m-d');

            $novaDataHoraInicio  = Carbon::createFromFormat('Y-m-d H:i:s', $novaDataInicio . ' ' . $horaInicio);
            $novaDataHoraFim = Carbon::createFromFormat('Y-m-d H:i:s', $novaDataHoraFim . ' ' . $horaFim);

            $existe = Programacao::where('id_janela', $programacao->id_janela)
                ->where('id_veiculo_cavalo', $programacao->id_veiculo_cavalo)
                ->where('id_entidade_motorista', $programacao->id_entidade_motorista)
                ->where('datahora_inicio', $novaDataHoraInicio)
                ->where('datahora_fim', $novaDataHoraFim)
                ->where('id', '!=', $programacao->id)
                ->exists();

            if (!$existe) {
                $programacao->datahora_inicio = $novaDataHoraInicio;
                $programacao->datahora_fim = $novaDataHoraFim;
                $programacao->save();
            }
        }

        return response()->json([
            'mensagem' => 'Programações atualizadas com sucesso.',
            'quantidade' => $programacoes->count(),
        ]);
    }


    public function insertVeiculos($dados)
    {
        $retorno = [];

        $veiculoCavaloExiste = Veiculo::where('placa', $dados['cavalo']['placa'])->first();
        if ($veiculoCavaloExiste) {
            $retorno['cavalo'] = $veiculoCavaloExiste->id;
        } else {
            // Processa o cavalo
            $veiculoCavalo = new Veiculo();
            $veiculoCavalo->id_veiculo_tipo = $dados['cavalo']['id_veiculo_tipo'];
            $veiculoCavalo->placa = $dados['cavalo']['placa'];
            $veiculoCavalo->natureza = 'Cavalo';
            $veiculoCavalo->save();

            $retorno['cavalo'] =  $veiculoCavalo->id;
        }
        if (isset($dados['carreta'])) {
            $veiculoCarretaExiste = Veiculo::where('placa', $dados['carreta']['placa'])->first();
            if ($veiculoCarretaExiste) {
                $retorno['carreta'] = $veiculoCarretaExiste->id;
            } else {
                $veiculoCarreta = new Veiculo();
                if (isset($dados['carreta']['id_veiculo_tipo']) && isset($dados['carreta']['placa'])) {
                    $veiculoCarreta->id_veiculo_tipo = $dados['carreta']['id_veiculo_tipo'];
                    $veiculoCarreta->placa = $dados['carreta']['placa'];
                    $veiculoCarreta->natureza = 'Carreta';
                    $veiculoCarreta->save();

                    $retorno['carreta'] =  $veiculoCarreta->id;
                }
            }
        }


        return $retorno;
    }

    public function getOperacao($dados)
    {
        $operacao = Janela::where('id', $dados)->get();
        // $operacao = Janela::where('id', $dados)->first();

        return $operacao[0]['id_operacao'];
    }

    public function getTransportador($dados)
    {
        $transpExiste = Entidade_pessoa_juridica::where('cnpj', $dados['cnpj'])->first();

        if ($transpExiste) {
            return $transpExiste->id_entidade;
        } else {
            $entidade = new Entidade();
            $entidade->nome = $dados['nome'];
            $entidade->natureza = $dados['natureza'];
            $entidade->estrutura_societaria = $dados['estrutura'];
            $entidade->transportador = $dados['transportador'];
            $entidade->save();

            $pessoa_juridica = new Entidade_pessoa_juridica();
            $pessoa_juridica->id_entidade = $entidade->id;
            $pessoa_juridica->razao_social = $dados['nome'];
            $pessoa_juridica->fantasia = $dados['nome'];
            $pessoa_juridica->cnpj = $dados['cnpj'];

            $pessoa_juridica->save();

            return $entidade->id;
        }

        return $transpExiste;
    }

    public function insertPessoas($dados)
    {
        $pessoaExistente = Entidade_pessoa_fisica::where('cnh', $dados['pessoa_fisica']['cnh'])->first(); // Verifico se a pessoa existe.

        if ($pessoaExistente) {
            return $pessoaExistente->id_entidade; // Retorno id existente
        } else {
            $entidade = new Entidade();
            $entidade->nome = $dados['nome'];
            $entidade->natureza = $dados['natureza'];
            $entidade->estrutura_societaria = $dados['estrutura'];
            $entidade->motorista = $dados['motorista'];
            $entidade->save();


            $pessoa_fisica = new Entidade_pessoa_fisica();
            $pessoa_fisica->id_entidade = $entidade->id;
            $pessoa_fisica->nome = $dados['pessoa_fisica']['nome'];
            $pessoa_fisica->cpf = $dados['pessoa_fisica']['cpf'];
            $pessoa_fisica->cnh = $dados['pessoa_fisica']['cnh'];
            $pessoa_fisica->rg = $dados['pessoa_fisica']['rg'];
            $pessoa_fisica->save();

            if (isset($dados['contato'])) {
                $pessoa_contato = new Entidade_contato();
                $pessoa_contato->id_entidade = $entidade->id;
                $pessoa_contato->email = $dados['contato']['email'];
                $pessoa_contato->contato = $dados['contato']['numero'];
                $pessoa_contato->save();
            }


            return $entidade->id; // retorno id criado
        }
    }
}
