@extends('layout')

@section('title', 'Controle de Acesso')

@section('content')
    <!-- Content wrapper start -->
    <div class="content-wrapper">

        <!-- Row start -->
        <div class="row">
            <div class="col-xxl-12">

                <!-- Card start -->
                <div class="card">
                    <div class="m-3 text-center" id="pills-tabContent">
                        <nav class="m-2 shadow p-2">
                            <ul class="nav nav-pills nav-fill">
                                <li class="nav-item m-1">
                                    <a class="nav-link active" id="nav-bl-tab" data-bs-toggle="tab"
                                        data-bs-target="#pills-check" type="button" role="tab" aria-controls="nav-bl"
                                        aria-selected="true">
                                        <i class="bi bi-check2-circle"></i>
                                        Verificação</a>
                                </li>
                                {{-- <li class="nav-item m-1">
                                    <a @disabled(true) class="nav-link" id="nav-registros-tab"
                                        data-bs-toggle="tab" data-bs-target="#pills-profile" type="button" role="tab"
                                        aria-controls="nav-registros" aria-selected="true">
                                        Documentações
                                    </a>
                                </li> --}}
                            </ul>
                        </nav>
                        <div class="tab-pane fade show active" id="pills-check" role="tabpanel"
                            aria-labelledby="pills-home-tab" tabindex="0">
                            <div class="card">
                                <div class="row m-3">
                                    <div class="col-12 col-md-6">
                                        <!-- Alterado para ocupar toda a largura em telas pequenas e metade em telas médias e grandes -->
                                        <form id="formBuscarProgram">
                                            <div class="form-floating m-3">
                                                <input type="text" class="form-control" id="placaAcesso"
                                                    placeholder="Placa" value="RPM7A34">
                                                <label for="placaAcesso">Placa</label>
                                            </div>

                                            <div class="form-floating m-3">
                                                <input type="text" class="form-control" id="cnhAcesso" placeholder="CNH">
                                                <label for="cnhAcesso">CNH</label>
                                            </div>

                                            <div class="form-floating m-3">
                                                <input type="text" class="form-control" id="cpfAcesso" placeholder="CPF">
                                                <label for="cpfAcesso">CPF</label>
                                            </div>

                                            <button type="submit" class="btn btn-primary">
                                                <i class="bi bi-search"></i>Buscar
                                            </button>
                                        </form>
                                    </div>
                                    <div class="col-12 col-md-6"
                                        style="display: flex; justify-content: center; align-items: center;">
                                        <!-- Alterado para ocupar toda a largura em telas pequenas e metade em telas médias e grandes -->
                                        <div class="card-body">
                                            <!-- Conteúdo do cartão -->
                                            <button id="btnControleAcesso" type="button" class="btn btn-danger"
                                                style="justify-content: center; align-items: center;">
                                                <i class="bi bi-lock-fill"></i>
                                            </button>
                                            <p id="msgPrincipal">Realize uma consulta para verificar as programações
                                                disponiveis.</p>
                                            <small id="msgSecundaria">Informe a <b><small>PLACA</small></b>,
                                                <b><small>CNH</small></b> ou <b><small>CPF</small></b> do motorista para
                                                verificar se existe programação disponivel.</small>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="card shadow border-left-success">
                                <table class="table table-hover" id="programTable" style="width:100%"></table>
                            </div>



                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                            tabindex="0">
                            <h1>teste</h1>
                        </div>


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
