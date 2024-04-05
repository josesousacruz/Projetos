<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Evento extends Model
{
    protected $table = 'eventos';

    public $timestamps = false;

    use HasFactory;

    protected $fillable = ['title','start','end','allDay','color','propiedades'];
}
