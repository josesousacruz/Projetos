<?php

namespace App\Http\Controllers;

use App\Models\Veiculo;
use Illuminate\Http\Request;

class VeiculoController extends Controller
{
    public function insertVeiculos(Request $request) 
    {
        $retorno = [];

        $veiculoCavaloExiste = Veiculo::where('placa', $request->input('cavalo.placa'))->first();
        if ($veiculoCavaloExiste) {
            $retorno['cavalo'] = $veiculoCavaloExiste->toArray();;
        } else {
            // Processa o cavalo
            $veiculoCavalo = new Veiculo();
            $veiculoCavalo->id_veiculo_tipo = $request->input('cavalo.id_veiculo_tipo');
            $veiculoCavalo->placa = $request->input('cavalo.placa');
            $veiculoCavalo->natureza = 'Cavalo';
            $veiculoCavalo->save();

            $retorno['cavalo'] =  $veiculoCavalo->toArray();
        }

        $veiculoCarretaExiste = Veiculo::where('placa', $request->input('carreta.placa'))->first();
        if ($veiculoCarretaExiste) {
            $retorno['carreta'] = $veiculoCarretaExiste->toArray();
        } else {
            // Processa a carreta
            $veiculoCarreta = new Veiculo();
            $veiculoCarreta->id_veiculo_tipo = $request->input('carreta.id_veiculo_tipo');
            $veiculoCarreta->placa = $request->input('carreta.placa');
            $veiculoCarreta->natureza = 'Carreta';
            $veiculoCarreta->save();

            $retorno['carreta'] =  $veiculoCarreta->toArray();
        }

        return $retorno;
    }
    
}
