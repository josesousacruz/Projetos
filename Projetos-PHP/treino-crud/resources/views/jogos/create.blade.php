@extends('layouts.app')

@section('title','criação')

@section('content')

<div class="container mt-5">
<form action="/jogos/save" method="POST">
    <!-- @csrf -->
  <div class="form-group">
    <label for="nome">Nome</label>
    <input type="text" class="form-control" name="nome" id="nome" placeholder="Nome">
    <!-- <small id="emailHelp" class="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small> -->
  </div>

  <div class="form-group">
    <label for="categoria">Categoria</label>
    <input type="text" class="form-control" name="categoria" id="categoria" placeholder="Categoria">
    <!-- <small id="emailHelp" class="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small> -->
  </div>

  <div class="form-group">
    <label for="categoria">Ano de Criação</label>
    <input type="text" class="form-control" name="ano_criacao" id="ano" placeholder="Ano de lançamento">
    <!-- <small id="emailHelp" class="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small> -->
  </div>

  <div class="form-group">
    <label for="categoria">Valor</label>
    <input type="text" class="form-control" name="valor" id="valor" placeholder="Valor do filme">
    <!-- <small id="emailHelp" class="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small> -->
  </div>


    <button type="submit"  name="submit" class="btn btn-primary">Enviar</button>
</form>
</div>


@endsection('content')