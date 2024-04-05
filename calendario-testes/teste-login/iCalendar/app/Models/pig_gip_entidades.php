<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class pig_gip_entidades extends Model
{
    protected $connection = 'mysql-iwms-pig';
    protected $table = 'ent_entidade';

    use HasFactory;
}
