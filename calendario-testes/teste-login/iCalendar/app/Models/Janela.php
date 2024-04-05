<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Janela extends Model
{
    protected $table = 'janela';

    // public $timestamps = false;

    protected $fillable = ['id','id_status','id_cliente' ,'id_operacao','id_entidade_unidade_negocio','data','hora_inicio','hora_fim','dia_todo','quantidade','id_usuario_criador','created_at','updated_at','datahora_inicio','datahora_fim'];

    public function operacao(){
        return $this->belongsTo(Operacao::class, 'id_operacao');
    }

    public function entidade(){
        return $this->belongsTo(Entidade::class,'id_entidade_unidade_negocio');
    }


    use HasFactory;
    use SoftDeletes;
}
