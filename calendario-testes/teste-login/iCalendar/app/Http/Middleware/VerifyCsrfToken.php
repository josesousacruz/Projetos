<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        '/calendar',
        '/eventos/inserir',
        '/eventos/update',
        '/janelas/insert',
        '/janelas/update',
        '/janela',
        '/delete-janela/*',
        'janelas/bloqueio/insert',
        '/janelas/bloqueios/*',
        '/entidade/insert',
        '/veiculos/insert',
        '/programacao/insert',
        '/programacao/update',
        '/relatorio/veiculosNoTerminal',
        '/acesso/triagem',
        '/relatorio/acessoVeiculos',
        '/gerenciamento/pessoas',
        '/gerenciamento/pessoas/update',
        '/upload-image'
       ];
}
