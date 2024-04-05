<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Entidade_pessoa_juridica extends Model
{
    protected $table = 'entidade_pessoa_juridica';
    protected $fillable = ['id_entidade','razao_social','fantasia','cnpj','id_entidade_created','id_entidade_updated','id_entidade_deleted'];

    public function programacoes()
    {
        return $this->hasMany(Programacao::class, 'id_entidade_transportador');
    }
    use HasFactory;
}
