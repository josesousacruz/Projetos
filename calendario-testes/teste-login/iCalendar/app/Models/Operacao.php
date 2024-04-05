<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Operacao extends Model
{
    protected $table = 'operacao';

    public function janelas(){
        return $this->hasMany(Janela::class,'id_operacao');
    }

    use HasFactory;
}
