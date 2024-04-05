<?php

namespace App\Http\Controllers;

use App\Models\JanelaBloqueio;
use Illuminate\Http\Request;

class JanelaBloqueioController extends Controller
{

    public function janelasBloq($id_janela)
    {
        $blocks = JanelaBloqueio::where('id_janela', $id_janela)->get();
        return response()->json($blocks);
    }

    public function getBloq($id)
    {
        $blocks = JanelaBloqueio::where('id', $id)->get();
        return response()->json($blocks);
    }


    public function insertJanelasBloq(Request $request)
    {
        $block = new JanelaBloqueio();

        $block->id_janela = $request->input('janela');
        $block->motivo = $request->input('title');
        $block->datahora_inicio = $request->input('start');
        $block->datahora_fim = $request->input('end');

        $block->save();

        return response()->json(['message' => 'Evento inserido', 'evento' => $block]);
    }

    public function deleteBloq($id)
    {
        JanelaBloqueio::findOrFail($id)->delete();
        return response()->json(['message' => 'Bloqueio deletado']);
    }

    public function updateBloq(Request $request)
{
    try {
        $bloqData = $request->all();

        $janela = JanelaBloqueio::findOrFail($bloqData['id']);

        $janela->update($bloqData);

        return response()->json(['message' => 'Evento atualizado com sucesso', 'evento' => $janela]);
    } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {

        return response()->json(['message' => 'Evento não encontrado: '.$e], 404);
    } catch (\Exception $e) {

        return response()->json(['message' => 'Erro ao atualizar o evento'], 500);
    }
}

}
