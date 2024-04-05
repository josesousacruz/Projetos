<?php

namespace App\Http\Controllers;

use App\Models\Entidade_pessoa_fisica;
use App\Models\Programacao;
use App\Models\Veiculo;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class AcessoController extends Controller
{


    public function verificaProgram(Request $request)
    {
        $resultadoInfos = $this->verificaInfos($request);

    

        if (!empty($resultadoInfos['id_veiculo']) || !empty($resultadoInfos['id_pessoa'])) {

            $relatorioController = new RelatorioController();

            $novoRequest = new \Illuminate\Http\Request();
            $novoRequest->replace([
                'id_unidade' => $resultadoInfos['id_unidade']
            ]);
            $veiculosNoTerminal = $relatorioController->veiculosNoTerminal($novoRequest)->getData();
            $veiculosNoTerminalIds = collect($veiculosNoTerminal)->pluck('id_veiculos')->toArray();

            $query = Programacao::with(['veiculoCarreta' => function ($query) {

                $query->select('id', 'placa');
            }, 'veiculo' => function ($query) {

                $query->select('id', 'placa', 'natureza', 'id_veiculo_tipo');
            }, 'entidadeMotorista' => function ($query) {

                $query->select('id_entidade', 'nome', 'cpf', 'cnh');
            }, 'entidadeTransportador' => function ($query) {

                $query->select('id_entidade', 'razao_social');
            }, 'veiculo.tipoVeiculo' => function ($query) {
                $query->select('id', 'descricao');
            }, 'operacoes' => function ($query) {
                $query->select('id', 'observacao');
            }])
                ->whereHas('janela', function ($query) {
                    $query->whereNull('deleted_at');
                })
                ->where('datahora_fim', '>=', Carbon::now());
        

            if (!empty($resultadoInfos['id_veiculo'])) {
                $query->where('id_veiculo_cavalo', $resultadoInfos['id_veiculo']);
            }

            if (!empty($resultadoInfos['id_pessoa'])) {
                $query->where('id_entidade_motorista', $resultadoInfos['id_pessoa']);
            }


            $existeProgramacao = $query->get();
            if($existeProgramacao->isEmpty()){
                $query = Programacao::with(['veiculoCarreta' => function ($query) {

                    $query->select('id', 'placa');
                }, 'veiculo' => function ($query) {
    
                    $query->select('id', 'placa', 'natureza', 'id_veiculo_tipo');
                }, 'entidadeMotorista' => function ($query) {
    
                    $query->select('id_entidade', 'nome', 'cpf', 'cnh');
                }, 'entidadeTransportador' => function ($query) {
    
                    $query->select('id_entidade', 'razao_social');
                }, 'veiculo.tipoVeiculo' => function ($query) {
                    $query->select('id', 'descricao');
                }, 'operacoes' => function ($query) {
                    $query->select('id', 'observacao');
                }])
                    ->whereHas('janela', function ($query) {
                        $query->whereNull('deleted_at');
                    })->WhereIn('id_veiculo_cavalo', $veiculosNoTerminalIds);
                    
            
    
                if (!empty($resultadoInfos['id_veiculo'])) {
                    $query->where('id_veiculo_cavalo', $resultadoInfos['id_veiculo']);
                }
    
                if (!empty($resultadoInfos['id_pessoa'])) {
                    $query->where('id_entidade_motorista', $resultadoInfos['id_pessoa']);
                }
    

                $existeProgramacao = $query->get();
            }

            if ($existeProgramacao->isEmpty()) {
                return response()->json([
                    'programacao' => [],
                    'message' => 'Não existem programações disponiveis para os parametros passados!',
                    "messageSecond" => 'Verifique as informações inseridas, caso persista indique ao motorista entrar em contato com o responsavel pela programação!',
                    'http_retorno' => 204
                ]);
            } else {
                return response()->json([
                    "programacao" => $existeProgramacao,
                    "message" => "Existem programações para os parametros passados.",
                    "messageSecond" => 'Selecione a programação referente ao motorista e ao veiculo. Verifique os documentos do motorista e do veiculo antes do acesso do veiculo ao terminal!',
                    "http_retorno" => 200
                ]);
            }
        } else if ($resultadoInfos['http_retorno'] === 400) {
            return response()->json([
                'error' => $resultadoInfos['error'],
                "messageSecond" => $resultadoInfos['messageSecond'],
                'http_retorno' => 400
            ]);
        } else if ($resultadoInfos['http_retorno'] === 404) {
            return response()->json([
                'error' => $resultadoInfos['error'],
                "messageSecond" => $resultadoInfos['messageSecond'],
                'http_retorno' => 400
            ]);
        } else {
            return response()->json([
                'error' => 'Informações de veículo ou pessoa não fornecida, inválida ou não foi cadastrada.',
                "messageSecond" => $resultadoInfos['messageSecond'],
                'http_retorno' => 400
            ]);
        }
    }




    public function verificaInfos($dados)
    {
        $infos = [];

        try {
            // Verificar se o veículo existe
            if (!empty($dados['placa'])) {
                $veiculoCavaloExiste = Veiculo::where('placa', $dados['placa'])->first();
                if ($veiculoCavaloExiste) {
                    $infos['id_veiculo'] = $veiculoCavaloExiste->id;
                } else {
                    return ['error' => 'Esse veiculo não está cadastrado!', 'messageSecond' => 'Verifique as informações passadas. Caso persista, indique o motorista entrar em contado com o responsavel pela programação.', 'http_retorno' => 404];
                }
            }

            if(empty($dados['placa']) && empty($dados['cnh']) && empty($dados['cpf']) ){
                return ['error' => 'É necessario inserir pelomenos uma das chaves!', 'messageSecond' => 'Não é possivel utilizar o sistema de triagem sem preencher pelo menos um dos três campos ao lado', 'http_retorno' => 404];
            }

            if (!empty($dados['id_unidade'])) {
                $infos['id_unidade'] = $dados['id_unidade'];
            }

            if (!empty($dados['cnh']) || !empty($dados['cpf'])) {

                $query = Entidade_pessoa_fisica::query();

                if (!empty($dados['cnh']) && !empty($dados['cpf'])) {
                    $pessoaPorCnhCpf = $query->where('cnh', $dados['cnh'])->where('cpf', $dados['cpf'])->first();


                    if ($pessoaPorCnhCpf) {
                        $infos['id_pessoa'] = $pessoaPorCnhCpf->id_entidade;
                        return $infos;
                    } else {
                        return ['error' => 'CNH e CPF não pertencem à mesma pessoa ou motorista não cadastrado', 'messageSecond' => 'Verifique as informações passadas. Caso persista, indique o motorista entrar em contado com o responsavel pela programação', 'http_retorno' => 400];
                    }
                }

                // Se apenas CNH ou CPF for fornecido, tentar encontrar a pessoa
                if (!empty($dados['cnh'])) {
                    $query->where('cnh', $dados['cnh']);
                } elseif (!empty($dados['cpf'])) {
                    $query->where('cpf', $dados['cpf']);
                }

                $pessoaEncontrada = $query->first();

                if ($pessoaEncontrada) {
                    $infos['id_pessoa'] = $pessoaEncontrada->id_entidade;
                } else {
                    return ['error' => 'Esse motorista não está cadastrado!', 'messageSecond' => 'Verifique as informações passadas. Caso persista, indique o motorista entrar em contado com o responsavel pela programação', 'http_retorno' => 404];
                }
            }
        } catch (\Illuminate\Database\QueryException $e) {
            DB::rollBack();
            Log::error('Erro no banco de dados: ' . $e->getMessage());
            $errorCode = $e->errorInfo[1];
            return ['error' => 'Erro no banco de dados', 'http_retorno' => $errorCode];
        }

        return $infos; // Retorna as informações encontradas
    }
}
