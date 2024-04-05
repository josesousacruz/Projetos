<?php

namespace App\Http\Controllers;

use App\Models\Entidade;
use App\Models\Entidade_contato;
use App\Models\Entidade_pessoa_fisica;
use Illuminate\Http\Request;

class EntidadeController extends Controller
{

    public function insertEntidade(Request $request)
    {
        $pessoaExistente = Entidade_pessoa_fisica::where('cnh', $request->input('pessoa_fisica.cnh'))->first(); // Verifico se a pessoa existe.

        if ($pessoaExistente) {
            return $pessoaExistente->id_entidade; // Retorno id existente
        } else {
            $entidade = new Entidade();
            $entidade->nome = $request->input('nome');
            $entidade->natureza = $request->input('natureza');
            $entidade->estrutura_societaria = $request->input('estrutura_societaria');
            $entidade->ativo = $request->input('ativo');
            $entidade->motorista = $request->input('motorista');
            $entidade->save();


            $pessoa_fisica = new Entidade_pessoa_fisica();
            $pessoa_fisica->id_entidade = $entidade->id;
            $pessoa_fisica->nome = $request->input('pessoa_fisica.nome');
            $pessoa_fisica->cpf = $request->input('pessoa_fisica.cpf');
            $pessoa_fisica->cnh = $request->input('pessoa_fisica.cnh');
            $pessoa_fisica->rg = $request->input('pessoa_fisica.rg');
            $pessoa_fisica->save();

            $pessoa_contato = new Entidade_contato();
            $pessoa_contato->id_entidade = $entidade->id;
            $pessoa_contato->email = $request->input('contato.email');
            $pessoa_contato->contato = $request->input('contato.numero');
            $pessoa_contato->save();

            return $entidade->id; // retorno id criado
        }
    }


    public function listarEntidades(){
        $entidades = Entidade::all();
        return response()->json($entidades);
    }
}
