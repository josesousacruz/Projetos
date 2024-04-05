<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Programacao extends Model
{
    protected $table = 'programacao';
    protected $fillable = ['id_entidade_criador', 'id_entidade_transportador', 'id_veiculo_cavalo', 'id_veiculo_carreta', 'id_operacao', 'id_entidade_motorista', 'datahora_fim', 'datahora_inicio', 'datahora_fim'];

    public function entidadeTransportador()
    {
        return $this->belongsTo(Entidade_pessoa_juridica::class, 'id_entidade_transportador', 'id_entidade');
    }

    public function entidadeMotorista()
    {
        return $this->belongsTo(Entidade_pessoa_fisica::class, 'id_entidade_motorista', 'id_entidade');
    }

    public function veiculo()
    {
        return $this->belongsTo(Veiculo::class, 'id_veiculo_cavalo');
    }

    public function veiculoCarreta()
    {
        return $this->belongsTo(Veiculo::class, 'id_veiculo_carreta');
    }

    public function operacoes()
    {
        return $this->belongsTo(Operacao::class,'id_operacao');
    }

    public function janela()
    {
        return $this->belongsTo(Janela::class,'id_janela');
    }
    use HasFactory;
}
