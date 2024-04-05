<?php

namespace App\Http\Controllers;

use App\Models\Operacao;
use Illuminate\Http\Request;

class OperacaoController extends Controller
{
    public function listarOperacao(){
        $operacao = Operacao::all();
        return response()->json($operacao);
    }
}
