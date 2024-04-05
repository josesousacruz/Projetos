@extends('layout')

@section('title', 'Relatorios - Controle de acesso')

@section('content')
    <!-- Content wrapper start -->
    <div class="content-wrapper">

        <!-- Row start -->
        <div class="row">
            <div class="col-xxl-12">
                <!-- Card start -->
                <div class="card">
                    <div class="m-3 text-center" id="content-rel">
                        @if ($tipo == 'veiculos')
                            @include('gerenciamento.veiculos')
                        @elseif($tipo == 'pessoas')
                            @include('gerenciamento.pessoas')
                        @endif
                    </div>
                </div>
                <!-- Card end -->

            </div>
        </div>
        <!-- Row end -->

    </div>
    <!-- Content wrapper end -->

    <!-- App Footer start -->
    <div class="app-footer">
        <span>© Intermaritima 2023</span>
    </div>
    <!-- App footer end -->






@endsection
