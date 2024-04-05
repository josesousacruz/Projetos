<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Veiculos_movimentacao extends Model
{
    protected $table = 'veiculos_movimentacao';

    protected $fillable = ['id_entidade', 'id_veiculos', 'direcao', 'id_unidade'];

    public function veiculos()
    {
        return $this->belongsTo(Veiculo::class, 'id_veiculos');
    }

    public function motorista()
    {
        return $this->belongsTo(Entidade_pessoa_fisica::class, 'id_entidade', 'id_entidade');
    }

    public function unidade()
    {
        return $this->belongsTo(Entidade_pessoa_juridica::class, 'id_unidade', 'id_entidade');
    }

    use HasFactory;
}
