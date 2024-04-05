<?php

namespace App\Http\Controllers;

use App\Models\Janela;
use App\Models\Operacao;
use Illuminate\Http\Request;

class JanelasController extends Controller
{
    public function listarJanelas(){
        $janelas = Janela::with('operacao','entidade')
        ->where('id_entidade_unidade_negocio', 258)->get();
        return response()->json($janelas);
    }

    public function janela(Request $request){
        $janelaId = $request->input('id');
        $janela = Janela::with('operacao','entidade')
        ->where('id', $janelaId)->get();

        return response()->json($janela);
    }

    public function insertJanelas(Request $request){
        $janela = new Janela();
        $operacao = Operacao::findOrFail($request->input('id_operacao'));
    
        $janela->id_operacao = $request->input('id_operacao');
        $janela->datahora_inicio = $request->input('start');
        $janela->datahora_fim = $request->input('end');
        $janela->id_entidade_unidade_negocio = $request->input('unidade');
        $janela->id_cliente = $request->input('cliente');
        $janela->dia_todo = $request->input('allDay');
    
        $janela->save();

    
        return response()->json(['message' => 'Evento inserido', 'evento' => $janela,'operacao' => $operacao]);
       }


       public function updateJanelas(Request $request){
        $janelaData  = $request->all();
    
        $janela  = Janela::findOrFail($janelaData['id']);
    
        $janela->update($janelaData);
        
        if($janela->id_operacao == 1){
            $programacaoController = new programacaoController();

            $novoRequest = new \Illuminate\Http\Request();
            $novoRequest->replace([
                'id_janela' => $janela->id,
                'datahora_inicio' => $janela->datahora_inicio,
                'datahora_fim' => $janela->datahora_fim,
            ]);

            $programacaoController->updateProgramacao($novoRequest);
        }
    
        return response()->json(['message' => 'Evento atualizado com sucesso', 'evento' => $janela]);
       }


    public function deleteJanela($id){
        Janela::findOrFail($id)->delete();
        return response()->json(['message' => 'Evento deletado']);
    }   



    
}
