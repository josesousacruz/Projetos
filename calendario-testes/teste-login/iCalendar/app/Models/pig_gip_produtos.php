<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class pig_gip_produtos extends Model
{
    protected $connection = 'mysql-iwms';
    protected $table = 'pig_gip_classe_ordem';

    use HasFactory;
}
