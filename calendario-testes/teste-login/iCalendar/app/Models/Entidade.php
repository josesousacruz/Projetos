<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Entidade extends Model
{
    protected $table = 'entidade';
    protected $fillable = ['nome', 'natureza', 'estrutura_societaria', 'ativo', 'sigla', 'motorista'];


    public function janelas()
    {
        return $this->hasMany(Janela::class, 'id_entidade_unidade_negocio');
    }

    public function entidade_juridica()
    {
        return $this->hasOne(Entidade_contato::class, 'id_entidade', 'id');

    }

    public function entidade_fisica()
    {
        return $this->hasOne(Entidade_pessoa_fisica::class, 'id_entidade', 'id');

    }

    public function entidade_contatos()
    {
        return $this->hasOne(Entidade_contato::class, 'id_entidade', 'id');

    }

    public function entidade_endereco()
    {
        return $this->hasOne(Entidade_endereco::class, 'id_entidade', 'id');
    }


    use HasFactory;
}
