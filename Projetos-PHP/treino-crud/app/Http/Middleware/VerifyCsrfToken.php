<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{

    protected $addHttpCookie = true;
    protected $except = [
    // 'http://127.0.0.1:8000/jogos/save',
    // 'http://127.0.0.1:8000/jogos/**'
    ];
}
