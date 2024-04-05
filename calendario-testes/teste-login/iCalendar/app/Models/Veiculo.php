<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Veiculo extends Model
{
    protected $table = 'veiculo';

    protected $fillable = ['id_veiculo_tipo','placa','natureza','deleted','id_entidade_created', 'id_entidade_updated','id_entidade_deleted'];

    public function programacoes()
{
    return $this->hasMany(Programacao::class, 'id_veiculo_cavalo');
}

public function tipoVeiculo()
{
    return $this->belongsTo(Veiculo_tipo::class, 'id_veiculo_tipo','id');
}


    use HasFactory;
    use SoftDeletes;
}
