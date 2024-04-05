<?php

namespace App\Http\Controllers;

use App\Models\Calendar;
use Illuminate\Http\Request;

class CalendarController extends Controller
{
    public function getInfosCalendar(Request $request){
        $idUnidadeNegocio = $request->input('id_unidade_negocio');

        $calendarProps = Calendar::where('id_entidade_unidade_negocio', $idUnidadeNegocio)->get();

        return response()->json($calendarProps);
    }
}
