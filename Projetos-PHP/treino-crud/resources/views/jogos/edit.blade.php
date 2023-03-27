@extends('layouts.app')

@section('title','criação')

@section('content')

<div class="container mt-5">
<form action="/jogos/{{$jogo->id}}}/update" method="POST">
    @csrf
    @method('PUT')
  <div class="form-group">
    <label for="nome">Nome</label>
    <input type="text" class="form-control" name="nome" id="nome" placeholder="Nome"
    value="{{$jogo->nome}}">
    <!-- <small id="emailHelp" class="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small> -->
  </div>

  <div class="form-group">
    <label for="categoria">Categoria</label>
    <input type="text" class="form-control" name="categoria" id="categoria" placeholder="Categoria"
    value="{{$jogo->categoria}}">
    <!-- <small id="emailHelp" class="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small> -->
  </div>

  <div class="form-group">
    <label for="categoria">Ano de Criação</label>
    <input type="text" class="form-control" name="ano_criacao" id="ano" placeholder="Ano de lançamento"
    value="{{$jogo->ano_criacao}}">
    <!-- <small id="emailHelp" class="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small> -->
  </div>

  <div class="form-group">
    <label for="categoria">Valor</label>
    <input type="text" class="form-control" name="valor" id="valor" placeholder="Valor do filme"
    value="{{$jogo->valor}}">
    <!-- <small id="emailHelp" class="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small> -->
  </div>


    <button type="submit"  name="submit" class="btn btn-primary">Editar</button>
</form>
</div>


@endsection('content')