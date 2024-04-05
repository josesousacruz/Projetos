<?php

namespace App\Http\Controllers;

use App\Models\Entidade;
use App\Models\Operacao;
use Illuminate\Http\Request;

class OptionsController extends Controller
{
    public function listarOperacao(){
        $operacao = Operacao::all();
        return response()->json($operacao);
    }

    public function listarClientes(){
        $clientes = Entidade::where('cliente',1)->get();

        return response()->json($clientes);
    }


}
