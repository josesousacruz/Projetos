<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Entidade_pessoa_fisica extends Model
{
    protected $table = 'entidade_pessoa_fisica';
    protected $fillable = ['id_entidade','nome','cpf','cnh','rg','imagem','id_entidade_created','id_entidade_updated','id_entidade_deleted'];

    public function programacoes()
{
    return $this->hasMany(Programacao::class, 'id_entidade_motorista');
}

    use HasFactory;
}
