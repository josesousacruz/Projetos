@extends('layouts.app')

@section('title','Listagem')

@section('content')


<div class="container mt-5">
<div class="row">
  <div class="col-sm-10">
  <h1>Listagem de jogos</h1>
  </div>

  <div class="col-sm-2">
  <a href="jogos/create" class="btn btn-success btn-sm">Novo</a>
  </div>
</div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nome</th>
      <th scope="col">Categoria</th>
      <th scope="col">Valor</th>
    </tr>
  </thead>
  <tbody>

  @foreach($jogos as $jogo)
    <tr>
      <th scope="row">{{$jogo->id}}</th>
      <td>{{$jogo->nome}}</td>
      <td>{{$jogo->categoria}}</td>
      <td>{{$jogo->valor}}</td>
      <th>
        <a href="jogos/{{$jogo->id}}/edit">Editar</a>
        <!-- <a href="{{ route('jogos-edit', ['id'=>$jogo->id])}}">Editar</a> -->
      </th>
      <th>
        <!-- <a href="jogos/{{$jogo->id}}/delete">Excluir</a> -->

        <form action="jogos/{{$jogo->id}}/delete" method="POST">
          @csrf
          @method('delete')
            <button type="submit" class="btn btn-danger">Deletar</button>
        </form>
      </th>
    </tr>

    
    @endforeach
  </tbody>
</table>
</div>

@endsection('content')