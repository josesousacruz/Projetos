<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Entidade_endereco extends Model
{
    protected $table = 'entidade_endereco';
    protected $fillable = ['id_entidade', 'rua', 'cep', 'uf', 'ibge', 'bairro','cidade','logradouro','complemento'];

    use HasFactory;
}
