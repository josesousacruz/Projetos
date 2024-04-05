<?php

namespace App\Http\Controllers;

use App\Models\pig_gip_entidades;
use App\Models\pig_gip_produtos;
use Illuminate\Http\Request;

class pgProdutosController extends Controller
{
    public function index(Request $request)
    {

    $cliente = $this->buscaEntidade($request->input('cnpj_cliente'));
    $transportador = $this->buscaEntidade($request->input('cnpj_transportadora'));
    $produto = $this->buscaProduto($request->input('codigo_produto'),$cliente[0]->idt);

    $resultado = [
        "produto" => $produto,
        "cliente" => $cliente,
        "transportador" => $transportador
    ];

    return response()->json($resultado);
    }

    public function buscaProduto($codigo_cliente,$id_cliente){
    
        $produto = pig_gip_produtos::where('codigo_cliente',$codigo_cliente)
        ->where('idt_proprietario_ent',$id_cliente)
        ->select('idt','codigo_cliente','descricao')->get();

        return $produto;
    }

    public function buscaEntidade($dados){

    $cliente = pig_gip_entidades::where('identificacao', $dados)->select('idt','identificacao','descricao')->get();

    return $cliente;
    }

    
}
