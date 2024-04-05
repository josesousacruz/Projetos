<?php

namespace App\Http\Controllers;

use App\Models\Entidade;
use App\Models\Entidade_pessoa_fisica;
use App\Models\Programacao;
use App\Models\Veiculo;
use App\Models\Veiculos_movimentacao;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class RelatorioController extends Controller
{
    public function show($tipo = null)
    {
        return view('relatorios.index', compact('tipo'));
    }

    public function acessosVeiculos(Request $request)
    {
        $resultadoInfos = $this->verificaInfos($request);

        if (!empty($resultadoInfos['id_pessoas']) || !empty($resultadoInfos['id_veiculo']) || (!empty($resultadoInfos['data_inicial']) && !empty($resultadoInfos['data_final']))) {
            $query = Veiculos_movimentacao::with(['veiculos' => function ($query) {

                $query->select('id', 'placa', 'natureza', 'id_veiculo_tipo');
            }, 'motorista' => function ($query) {

                $query->select('id_entidade', 'nome', 'cpf', 'cnh');
            }]);

            if (!empty($resultadoInfos['id_veiculo'])) {
                $query->where('id_veiculos', $resultadoInfos['id_veiculo']);
            }

            if (!empty($resultadoInfos['id_pessoas'])) {
                $query->where('id_entidade', $resultadoInfos['id_pessoas']);
            }

            if (!empty($resultadoInfos['data_inicial']) && !empty($resultadoInfos['data_final'])) {
                $query->whereBetween('created_at', [$resultadoInfos['data_inicial'], $resultadoInfos['data_final']]);
            }
        } else {
            return response()->json(['mensagem' => 'Favor verifique os parametros passados!']);
        }

        $resultadoMovimentacoes = $query->get();

        return $resultadoMovimentacoes;
    }

    public function veiculosNoTerminal(Request $request)
    {
        $unidadeId = $request->input('id_unidade');

        $veiculosNoTerminal = Veiculos_movimentacao::where('id_unidade', $unidadeId)
            ->where('direcao', 'E')
            ->whereNotExists(function ($query) use ($unidadeId) {
                $query->select(DB::raw(1))
                    ->from('veiculos_movimentacao as saidas')
                    ->whereColumn('saidas.id_veiculos', 'veiculos_movimentacao.id_veiculos')
                    ->where('saidas.id_unidade', $unidadeId)
                    ->where('saidas.direcao', 'S')
                    ->whereRaw('saidas.created_at > veiculos_movimentacao.created_at');
            })
            ->distinct()
            ->with([
                'veiculos' => function ($query) {
                    $query->select('id', 'placa', 'id_veiculo_tipo', 'natureza');
                },
                'motorista' => function ($query) {
                    $query->select('id_entidade', 'nome', 'cpf', 'cnh');
                },
                'unidade' => function ($query) {
                    $query->select('id_entidade', 'razao_social', 'cnpj');
                }
            ])
            ->get(['id', 'id_veiculos', 'id_entidade', 'id_unidade', 'direcao', 'created_at']);

        return response()->json($veiculosNoTerminal);
    }

    public function verificaInfos($dados)
    {
        $infos = [];

        try {
            if (!empty($dados['placa'])) {
                $veiculoExiste = Veiculo::where('placa', $dados['placa'])->first();
                if ($veiculoExiste) {
                    $infos['id_veiculo'] = $veiculoExiste->id;
                } else {
                    return ['error' => 'Esse veiculo não está cadastrado!', 'http_retorno' => 404];
                }
            }

            if (!empty($dados['cnh']) || !empty($dados['cpf']) || !empty($dados['motorista'])) {
                $query = Entidade_pessoa_fisica::query();

                if (!empty($dados['cnh'])  && !empty($dados['cpf']) && !empty($dados['motorista'])) {
                    $pessoaPorCnhCpf = $query->where('cnh', $dados['cnh'])
                        ->where('cpf', $dados['cpf'])
                        ->where('nome', $dados['motorista'])->first();

                    if ($pessoaPorCnhCpf) {
                        $infos['id_pessoas'] = $pessoaPorCnhCpf->id_entidade;
                    } else {
                        return ['error' => 'CNH e CPF não pertencem à mesma pessoa ou motorista não cadastrado', 'messageSecond' => 'Verifique as informações passadas. Caso persista, indique o motorista entrar em contado com o responsavel pela programação', 'http_retorno' => 400];
                    }
                }

                // Se apenas CNH ou CPF for fornecido, tentar encontrar a pessoa
                if (!empty($dados['cnh'])) {
                    $query->where('cnh', $dados['cnh']);
                } elseif (!empty($dados['cpf'])) {
                    $query->where('cpf', $dados['cpf']);
                } elseif (!empty($dados['motorista'])) {
                    $query->where('nome', '=', $dados['motorista']);
                }

                $pessoaEncontrada = $query->first();

                if ($pessoaEncontrada) {
                    $infos['id_pessoas'] = $pessoaEncontrada->id_entidade;
                } else {
                    return ['error' => 'Esse motorista não está cadastrado!', 'messageSecond' => 'Verifique as informações passadas. Caso persista, indique o motorista entrar em contado com o responsavel pela programação', 'http_retorno' => 404];
                }
            }

            if (!empty($dados['data_inicial']) && !empty($dados['data_final'])) {
                $infos['data_inicial'] = $dados['data_inicial'];
                $infos['data_final'] = $dados['data_final'];
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
