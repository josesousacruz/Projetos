<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Calendar extends Model
{
    protected $table = 'calendario';
    protected $fillable = ['id_entidade_unidade_negocio','headerToolbar','slotDuration'
    ,'slotMaxTime','buttonText','editable','dayMaxEvents','locale','allDayText','navLinks','selectable','selectMirror','id_entidade_created','id_entidade_updated','id_entidade_deleted'];

    use HasFactory;
}
