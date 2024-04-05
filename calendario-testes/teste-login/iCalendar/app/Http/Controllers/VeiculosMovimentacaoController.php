<?php

namespace App\Http\Controllers;

use App\Models\Veiculos_movimentacao;
use Illuminate\Http\Request;

class VeiculosMovimentacaoController extends Controller
{

    public function insertMovimentacao(Request $request)
    {
        $existeMovSemSaida = $this->verifyMovimentação($request->input('id_veiculo'));

        $movimentacao = new Veiculos_movimentacao();
        $movimentacao->id_veiculos = $request->input('id_veiculo');
        $movimentacao->id_entidade = $request->input('id_entidade');
        $movimentacao->id_unidade = $request->input('id_unidade');
        $movimentacao->direcao = $existeMovSemSaida ? 'S': 'E';
  
        $movimentacao->save();

        return $movimentacao;
    }

    public function verifyMovimentação($idVeiculo) {
        $ultimaMov = Veiculos_movimentacao::where('id_veiculos', $idVeiculo)
                                           ->orderBy('id', 'desc')
                                           ->first();
        
        return $ultimaMov && $ultimaMov->direcao === 'E';
    }
    
}
