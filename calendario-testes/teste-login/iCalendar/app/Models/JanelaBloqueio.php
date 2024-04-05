<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JanelaBloqueio extends Model
{
    protected $table = 'janela_bloqueio';
    protected $fillable = ['id_janela','motivo','id_usuario_criador','created_at','updated_at','datahora_inicio','datahora_fim'];

    use HasFactory;
}
