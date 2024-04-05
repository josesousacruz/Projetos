<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Evento;

class EventosController extends Controller
{

    public function listarEventos(){
    $eventos = Evento::all();
    return response()->json($eventos);
}


   public function insertEventos(Request $request){
    $evento = new Evento();

    $evento->title = $request->input('title');
    $evento->start = $request->input('start');
    $evento->end = $request->input('end');
    $evento->allDay = $request->input('allDay');
    $evento->color = $request->input('color');
    $evento->propiedades = $request->input('propiedades');

    $evento->save();

    return response()->json(['message' => 'Evento inserido']);

   } 


   public function updateEventos(Request $request){
    $eventoData  = $request->all();

    $evento  = Evento::findOrFail($eventoData['id']);

    $evento->update($eventoData);

    return response()->json(['message' => 'Evento atualizado com sucesso', 'evento' => $evento]);
   }
   
}


