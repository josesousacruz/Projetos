<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Entidade_contato extends Model
{
    protected $table = 'entidade_contato';
    protected $fillable = ['id_entidade','email','contato'];

    use HasFactory;
}
