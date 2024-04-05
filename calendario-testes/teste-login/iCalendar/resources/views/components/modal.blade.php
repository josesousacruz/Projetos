<div class="modal fade edit-form" id="form" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header border-bottom-0">
                <h5 class="modal-title" id="modal-title">Criar Janela</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form id="myForm">
                <div class="modal-body">
                    <div class="alert alert-danger " role="alert" id="danger-alert" style="display: none;">
                        A data final não pode ser maior que a inicial.
                    </div>
                    <div class="form-group">
                        <label for="event-title">Cliente<span class="text-danger">*</span></label>
                        <select class="form-select" name="select-cliente" id="select-cliente"></select>
                    </div>
                    <div class="form-group">
                        <label for="event-title">Operação<span class="text-danger">*</span></label>
                        <select class="form-select" name="select-operacao" id="select-operacao"></select>
                    </div>
                    <div class="form-group">
                        <label for="start-date">Data inicial <span class="text-danger">*</span></label>
                        <input type="datetime-local" class="form-control" id="start-date" placeholder="start-date"
                            required>
                    </div>
                    <div class="form-group">
                        <label for="end-date">Data final - <small class="text-muted">Opcional</small></label>
                        <input type="datetime-local" class="form-control" id="end-date" placeholder="end-date">
                    </div>
                    <br>
                    <div class="form-check form-switch">
                        <input class="form-check-input" id="dia-todo" name="dia-todo" type="checkbox">
                        <label class="form-check-label" for="flexSwitchCheckDefault">Janela para o dia todo</label>
                    </div>
                </div>
                <div class="modal-footer border-top-0 d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary" id="submit-button">Criar</button>
                </div>
            </form>
        </div>
    </div>
</div>



{{-- Modal editar --}}
<div class="modal fade edit-form" id="form-edit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header border-bottom-0">
                <h5 class="modal-title-edit" id="modal-title-edit">Editar Janela</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form id="myFormEdit">
                <div class="modal-body">
                    <div class="alert alert-danger " role="alert" id="danger-alert" style="display: none;">
                        A data final não pode ser maior que a inicial.
                    </div>
                    <input id="edit-id" name="edit-id" type="hidden">
                    <div class="form-group">
                        <label for="event-title">Cliente<span class="text-danger">*</span></label>
                        <select class="form-select" name="select-cliente-edit" id="select-cliente-edit"></select>
                    </div>
                    <div class="form-group">
                        <label for="event-title">Operação<span class="text-danger">*</span></label>
                        <select class="form-select" name="select-operacao-edit" id="select-operacao-edit"></select>
                    </div>
                    <div class="form-group">
                        <label for="start-date">Data inicial <span class="text-danger">*</span></label>
                        <input type="datetime-local" class="form-control" id="start-date-edit" placeholder="start-date"
                            required>
                    </div>
                    <div class="form-group">
                        <label for="end-date">Data final - <small class="text-muted">Opcional</small></label>
                        <input type="datetime-local" class="form-control" id="end-date-edit" placeholder="end-date">
                    </div>
                    <br>
                    <div class="form-check form-switch">
                        <input class="form-check-input" id="dia-todo-edit" name="dia-todo-edit" type="checkbox">
                        <label class="form-check-label" for="flexSwitchCheckDefault">Janela para o dia todo</label>
                    </div>
                    {{-- <div class="form-group">
                        <label for="event-color">Color</label>
                        <input type="color" class="form-control" id="event-color" value="#3788d8">
                      </div> --}}
                </div>
                <div class="modal-footer border-top-0 d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary" id="submit-button-edit">Salvar</button>
                </div>
            </form>
        </div>
    </div>
</div>


{{-- Full Modal bloqueio --}}
<div class="modal fade" id="block-edit" tabindex="-5" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen" role="document">
        <div class="modal-content">
            <div class="modal-header border-bottom-0">
                <h5 class="modal-title-edit" id="modal-title-edit">Bloqueio de Janela</h5>
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Fechar">
                    Fechar
                </button>
            </div>
            <div class="modal-body p-4">
                <div id='calendarBlock'></div>
            </div>
        </div>
    </div>
</div>
{{-- Modal bloqueio Form --}}
<div class="modal fade bloqueio-form" id="form-bloqueio" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header border-bottom-0">
                <h5 class="modal-title-edit" id="modal-title-edit">Janela de bloqueio</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form id="myFormBlock">
                <div class="modal-body">
                    <div class="alert alert-danger " role="alert" id="danger-alert" style="display: none;">
                        A data final não pode ser maior que a inicial.
                    </div>
                    <input id="event-id" name="event-id" type="hidden">
                    <div class="form-group">
                        <label for="event-title">Motivo<span class="text-danger">*</span></label>
                        <input type="text" class="form-control" id="motivo-block" required>
                    </div>
                    <div class="form-group">
                        <label for="start-date">Data inicial <span class="text-danger">*</span></label>
                        <input type="datetime-local" class="form-control" id="start-date-block" required>
                    </div>
                    <div class="form-group">
                        <label for="end-date">Data final - <small class="text-muted">Opcional</small></label>
                        <input type="datetime-local" class="form-control" id="end-date-block"
                            placeholder="end-date">
                    </div>
                    <br>
                </div>
                <div class="modal-footer border-top-0 d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary" id="submit-button-block">Criar</button>
                </div>
            </form>
        </div>
    </div>
</div>

{{-- Modal bloqueio Form Edit --}}
<div class="modal fade bloqueio-form" id="form-bloqueio-edit" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header border-bottom-0">
                <h5 class="modal-title-edit" id="modal-title-edit">Janela de bloqueio</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form id="myFormBlock-edit">
                <div class="modal-body">
                    <div class="alert alert-danger " role="alert" id="danger-alert" style="display: none;">
                        A data final não pode ser maior que a inicial.
                    </div>
                    <input id="edit-id-bloq" name="event-id" type="hidden">
                    <div class="form-group">
                        <label for="event-title">Motivo<span class="text-danger">*</span></label>
                        <input type="text" class="form-control" id="motivo-block-edit" required>
                    </div>
                    <div class="form-group">
                        <label for="start-date">Data inicial <span class="text-danger">*</span></label>
                        <input type="datetime-local" class="form-control" id="start-date-block-edit" required>
                    </div>
                    <div class="form-group">
                        <label for="end-date">Data final - <small class="text-muted">Opcional</small></label>
                        <input type="datetime-local" class="form-control" id="end-date-block-edit"
                            placeholder="end-date">
                    </div>
                    <br>
                </div>
                <div class="modal-footer border-top-0 d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary" id="submit-button-block-edit">Editar</button>
                </div>
            </form>
        </div>
    </div>
</div>





{{-- Full Modal programacao Calendar --}}
<div class="modal fade" id="modal-prog" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

    <div class="modal-dialog modal-fullscreen" role="document">
        <div class="modal-content">
            <div class="modal-header border-bottom-0">
                <h5 class="modal-title-edit" id="modal-title-edit">Programação de veiculos</h5>
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Fechar">
                    Fechar
                </button>
            </div>
            <div class="modal-body p-4">
                <div id='calendarProg'></div>
            </div>
        </div>
    </div>
</div>

{{-- Full modal programação Form/import --}}
<div class="modal fade" id="modal-prog-import" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-fullscreen" role="document">
        <div class="modal-content">
            <div class="modal-header border-bottom-0">
                <h5 class="modal-title-edit" id="modal-title-edit">Programação de veiculos - Importar</h5>
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Fechar">
                    Fechar
                </button>
            </div>
            <p>
                <a class="btn btn-primary" id="btnProgramacaoUnica" data-bs-toggle="collapse"
                    data-bs-target="#multiCollapseExample2" aria-expanded="false"
                    aria-controls="multiCollapseExample1">Programação unica</a>
                <a class="btn btn-primary" id="btnProgramacaoLote" data-bs-toggle="collapse"
                    href="#multiCollapseExample1" role="button" aria-expanded="false"
                    aria-controls="multiCollapseExample2">Programação em lote</a>
                <a class="btn btn-primary" id="btnAmbosCadastros" data-bs-toggle="collapse"
                    aria-expanded="false">Ambos cadastros</a>
            </p>
            <div class="row">
                <div class="col-sm collapse multi-collapse show" id="multiCollapseExample1">
                    <div class="card card-body">

                        <form class="form-register" id="form-total" action="#" method="post">
                            <input type="hidden" name="csrf-token" value="{{ csrf_token() }}">

                            <!-- SECTION 1 -->
                            <h2>
                                <span class="step-icon"><i class="zmdi zmdi-account"></i></span>
                                <span class="step-text">Motorista</span>
                            </h2>
                            <section>
                                <div class="mb-2"><label class="form-label text-900"
                                        for="bootstrap-wizard-wizard-name">Nome completo</label>
                                    <input class="form-control" type="text" name="name"
                                        placeholder="Informe o nome do Motorista" id="name"
                                        value="José Almir" />
                                </div>
                                <div class="mb-2">
                                    <div class="mb-2 mb-sm-0">
                                        <label class="form-label text-900"
                                            for="bootstrap-wizard-wizard-telefone">CNH*</label>
                                        <input class="form-control" data-mask="00000000000" type="text"
                                            name="cnh" placeholder="Numero do documento de habilitação"
                                            id="cnh" value="00000000000" />
                                    </div>

                                </div>
                                <div class="mb-2">
                                    <div class="mb-2 mb-sm-0"><label class="form-label text-900"
                                            for="bootstrap-wizard-wizard-telefone">CPF</label>
                                        <input class="form-control" type="text" data-mask="000.000.000-00"
                                            name="cpf" placeholder="Numero do documento CPF" id="cpf"
                                            value="00000000000" />
                                    </div>
                                </div>
                                <div class="mb-2">
                                    <div class="mb-2 mb-sm-0">
                                        <label class="form-label text-900"
                                            for="bootstrap-wizard-wizard-telefone">RG</label>
                                        <input class="form-control" type="text" name="rg"
                                            placeholder="Numero do documento RG" id="rg" value="000000000" />
                                    </div>

                                </div>
                                <div class="mb-2">
                                    <div class="mb-2 mb-sm-0"><label class="form-label text-900"
                                            for="bootstrap-wizard-wizard-telefone">Telefone*</label>
                                        <input class="form-control" type="text" name="telefone"
                                            placeholder="Telefone" id="telefone" value="71997200967" />
                                    </div>
                                </div>
                                <div class="mb-2"><label class="form-label"
                                        for="bootstrap-wizard-wizard-email">Email</label>
                                    <input class="form-control" type="email" name="email"
                                        placeholder="Email address"
                                        pattern="^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$"
                                        id="email" value="josesousacruzfh@outlook.com" />
                                </div>


                            </section>
                            <!-- SECTION 2 -->
                            <h2>
                                <span class="step-icon"><i class="zmdi zmdi-truck"></i></span>
                                <span class="step-text">Veiculo</span>
                            </h2>
                            <section>
                                <div class="row g-3 mb-3">
                                    <div class="col-sm-6">
                                        <div class="mb-2 mb-sm-0"><label class="form-label text-900"
                                                for="bootstrap-wizard-wizard-password">Placa cavalo*</label>
                                            <input class="form-control" type="text" name="cavalo" id="cavalo"
                                                placeholder="" id="bootstrap-wizard-wizard-password"
                                                data-wizard-password="true" value="RPM7A34" />
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="mb-2"><label class="form-label text-900"
                                                for="bootstrap-wizard-wizard-confirm-password">Placa carreta*</label>
                                            <input value="RPM7A34" class="form-control" type="text"
                                                name="carreta" id="carreta" placeholder=""
                                                id="bootstrap-wizard-wizard-confirm-password"
                                                data-wizard-confirm-password="true" />
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-2">
                                    <div class="mb-2 mb-sm-0">
                                        <label class="form-label text-900" for="bootstrap-wizard-wizard-telefone">Tipo
                                            do veiculo</label>
                                        <select name="tipo" id="tipo" class="form-select">
                                            <option value="Truck">Truck</option>
                                            <option value="Carreta">Carreta</option>
                                            <option value="BI-TREM">BI-TREM</option>
                                        </select>
                                    </div>
                                </div>

                            </section>
                            <!-- SECTION 3 -->
                            <h2>
                                <span class="step-icon"><i class="zmdi zmdi-receipt"></i></span>
                                <span class="step-text">Documentos</span>
                            </h2>
                            <section>
                                <div class="row">
                                    <label for="filecnhmotorista" class="labelFile"><span><svg xml:space="preserve"
                                                viewBox="0 0 184.69 184.69" xmlns:xlink="http://www.w3.org/1999/xlink"
                                                xmlns="http://www.w3.org/2000/svg" id="Capa_1" version="1.1"
                                                width="60px" height="60px">
                                                <g>
                                                    <g>
                                                        <g>
                                                            <path
                                                                d="M149.968,50.186c-8.017-14.308-23.796-22.515-40.717-19.813
                                                  C102.609,16.43,88.713,7.576,73.087,7.576c-22.117,0-40.112,17.994-40.112,40.115c0,0.913,0.036,1.854,0.118,2.834
                                                  C14.004,54.875,0,72.11,0,91.959c0,23.456,19.082,42.535,42.538,42.535h33.623v-7.025H42.538
                                                  c-19.583,0-35.509-15.929-35.509-35.509c0-17.526,13.084-32.621,30.442-35.105c0.931-0.132,1.768-0.633,2.326-1.392
                                                  c0.555-0.755,0.795-1.704,0.644-2.63c-0.297-1.904-0.447-3.582-0.447-5.139c0-18.249,14.852-33.094,33.094-33.094
                                                  c13.703,0,25.789,8.26,30.803,21.04c0.63,1.621,2.351,2.534,4.058,2.14c15.425-3.568,29.919,3.883,36.604,17.168
                                                  c0.508,1.027,1.503,1.736,2.641,1.897c17.368,2.473,30.481,17.569,30.481,35.112c0,19.58-15.937,35.509-35.52,35.509H97.391
                                                  v7.025h44.761c23.459,0,42.538-19.079,42.538-42.535C184.69,71.545,169.884,53.901,149.968,50.186z"
                                                                style="fill:#010002; stroke:#000000; stroke-width:5;"></path>
                                                        </g>
                                                        <g>
                                                            <path d="M108.586,90.201c1.406-1.403,1.406-3.672,0-5.075L88.541,65.078
                                                  c-0.701-0.698-1.614-1.045-2.534-1.045l-0.064,0.011c-0.018,0-0.036-0.011-0.054-0.011c-0.931,0-1.85,0.361-2.534,1.045
                                                  L63.31,85.127c-1.403,1.403-1.403,3.672,0,5.075c1.403,1.406,3.672,1.406,5.075,0L82.296,76.29v97.227
                                                  c0,1.99,1.603,3.597,3.593,3.597c1.979,0,3.59-1.607,3.59-3.597V76.165l14.033,14.036
                                                  C104.91,91.608,107.183,91.608,108.586,90.201z"
                                                                style="fill:#010002; stroke:#000000; stroke-width:5"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg></span>
                                        <p id="labelMotoristaInput">Arraste e solte sua imagem/pdf do documento do motorista aqui, ou clique para
                                            selecionar!</p>
                                    </label>
                                    <input class="input-filess" name="filecnhmotorista" id="filecnhmotorista"
                                        type="file" />


                                </div>


                                <div class="row">
                                    <label id="labelFileIcon" for="filedocumentveiculo" class="labelFile"><span>
                                        <svg
                                                xml:space="preserve" viewBox="0 0 184.69 184.69"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                xmlns="http://www.w3.org/2000/svg" id="Capa_1" version="1.1"
                                                width="60px" height="60px">
                                                <g>
                                                    <g>
                                                        <g>
                                                            <path
                                                                d="M149.968,50.186c-8.017-14.308-23.796-22.515-40.717-19.813
                                                  C102.609,16.43,88.713,7.576,73.087,7.576c-22.117,0-40.112,17.994-40.112,40.115c0,0.913,0.036,1.854,0.118,2.834
                                                  C14.004,54.875,0,72.11,0,91.959c0,23.456,19.082,42.535,42.538,42.535h33.623v-7.025H42.538
                                                  c-19.583,0-35.509-15.929-35.509-35.509c0-17.526,13.084-32.621,30.442-35.105c0.931-0.132,1.768-0.633,2.326-1.392
                                                  c0.555-0.755,0.795-1.704,0.644-2.63c-0.297-1.904-0.447-3.582-0.447-5.139c0-18.249,14.852-33.094,33.094-33.094
                                                  c13.703,0,25.789,8.26,30.803,21.04c0.63,1.621,2.351,2.534,4.058,2.14c15.425-3.568,29.919,3.883,36.604,17.168
                                                  c0.508,1.027,1.503,1.736,2.641,1.897c17.368,2.473,30.481,17.569,30.481,35.112c0,19.58-15.937,35.509-35.52,35.509H97.391
                                                  v7.025h44.761c23.459,0,42.538-19.079,42.538-42.535C184.69,71.545,169.884,53.901,149.968,50.186z"
                                                                style="fill:#010002; stroke:#000000; stroke-width:5;"></path>
                                                        </g>
                                                        <g>
                                                            <path d="M108.586,90.201c1.406-1.403,1.406-3.672,0-5.075L88.541,65.078
                                                  c-0.701-0.698-1.614-1.045-2.534-1.045l-0.064,0.011c-0.018,0-0.036-0.011-0.054-0.011c-0.931,0-1.85,0.361-2.534,1.045
                                                  L63.31,85.127c-1.403,1.403-1.403,3.672,0,5.075c1.403,1.406,3.672,1.406,5.075,0L82.296,76.29v97.227
                                                  c0,1.99,1.603,3.597,3.593,3.597c1.979,0,3.59-1.607,3.59-3.597V76.165l14.033,14.036
                                                  C104.91,91.608,107.183,91.608,108.586,90.201z"
                                                                style="fill:#010002; stroke:#000000; stroke-width:5;"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                        <p id="labelDocumentVeiculo">Arraste e solte sua imagem/pdf do documento do veiculo aqui, ou clique para
                                            selecionar!</p>
                                    </label>
                                    <input class="input-filess" name="filedocumentveiculo"
                                        id="filedocumentveiculo" type="file" />


                                </div>


                            </section>
                            <!-- SECTION 4 -->
                            <h2>
                                <span class="step-icon"><i class="zmdi zmdi-check-all"></i></span>
                                <span class="step-text">Feito</span>
                            </h2>
                            <section style="text-align: center">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <img src="{{ asset('images/clip-man-breakdancing-and-doing-a-handstand.gif') }}"
                                                alt="" class="img-fluid">
                                        </div>
                                        <div style="align-items: center" class="col-md-8">
                                            <h4 class="m-2">Sua programação foi adicionada a tabela!!</h4>
                                            <p class="fs-9">Agora você poderá confirmar todas as programação nela!
                                            </p>
                                            <img style="height: 80px;width: 80px;"
                                                src="{{ asset('images/icons8-success.gif') }}" alt=""
                                                class="img-fluid mt-4">
                                        </div>
                                    </div>
                                </div>

                            </section>


                        </form>
                    </div>
                </div>

                <div class="col-sm collapse multi-collapse show" id="multiCollapseExample2">
                    <div class="card card-body">
                        <div class="d-flex justify-content-end mb-3">
                            <input type="file" id="excelFile" accept=".xlsx, .xls" style="display: none;" />
                            <button id="importarLote" class="btn btn-success">Importar lote</button>
                        </div>
                        <table id="tableImport" class="table table-sm table-hover table-responsive p-2"
                            style="width:100%">
                            <thead>
                                <tr>
                                    <th scope="col">Nome</th>
                                    <th scope="col">CNH</th>
                                    <th scope="col">CPF</th>
                                    <th scope="col">RG</th>
                                    <th scope="col">Telefone</th>
                                    <th scope="col">Cavalo</th>
                                    <th scope="col">Carreta</th>
                                    <th scope="col">Slot inicio</th>
                                    <th scope="col">Slot fim</th>
                                    <th scope="col">Id Janela</th>
                                </tr>
                            </thead>
                        </table>
                        <div class="d-grid gap-2 col-6 mx-auto">
                            {{-- <button  class="btn btn-success mt-3">Enviar</button> --}}
                            <button id="programarAll" class="button-enviar" style="--clr: #00ad54;">
                                <span class="button-decor"></span>
                                <div class="button-content">
                                    <div class="button__icon">
                                        <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" width="24">
                                            <circle opacity="0.5" cx="25" cy="25" r="23" fill="url(#icon-payments-cat_svg__paint0_linear_1141_21101)"></circle>
                                            <mask id="icon-payments-cat_svg__a" fill="#fff">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M34.42 15.93c.382-1.145-.706-2.234-1.851-1.852l-18.568 6.189c-1.186.395-1.362 2-.29 2.644l5.12 3.072a1.464 1.464 0 001.733-.167l5.394-4.854a1.464 1.464 0 011.958 2.177l-5.154 4.638a1.464 1.464 0 00-.276 1.841l3.101 5.17c.644 1.072 2.25.896 2.645-.29L34.42 15.93z">
                                                </path>
                                            </mask>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M34.42 15.93c.382-1.145-.706-2.234-1.851-1.852l-18.568 6.189c-1.186.395-1.362 2-.29 2.644l5.12 3.072a1.464 1.464 0 001.733-.167l5.394-4.854a1.464 1.464 0 011.958 2.177l-5.154 4.638a1.464 1.464 0 00-.276 1.841l3.101 5.17c.644 1.072 2.25.896 2.645-.29L34.42 15.93z" fill="#fff"></path>
                                            <path d="M25.958 20.962l-1.47-1.632 1.47 1.632zm2.067.109l-1.632 1.469 1.632-1.469zm-.109 2.068l-1.469-1.633 1.47 1.633zm-5.154 4.638l-1.469-1.632 1.469 1.632zm-.276 1.841l-1.883 1.13 1.883-1.13zM34.42 15.93l-2.084-.695 2.084.695zm-19.725 6.42l18.568-6.189-1.39-4.167-18.567 6.19 1.389 4.166zm5.265 1.75l-5.12-3.072-2.26 3.766 5.12 3.072 2.26-3.766zm2.072 3.348l5.394-4.854-2.938-3.264-5.394 4.854 2.938 3.264zm5.394-4.854a.732.732 0 01-1.034-.054l3.265-2.938a3.66 3.66 0 00-5.17-.272l2.939 3.265zm-1.034-.054a.732.732 0 01.054-1.034l2.938 3.265a3.66 3.66 0 00.273-5.169l-3.265 2.938zm.054-1.034l-5.154 4.639 2.938 3.264 5.154-4.638-2.938-3.265zm1.023 12.152l-3.101-5.17-3.766 2.26 3.101 5.17 3.766-2.26zm4.867-18.423l-6.189 18.568 4.167 1.389 6.19-18.568-4.168-1.389zm-8.633 20.682c1.61 2.682 5.622 2.241 6.611-.725l-4.167-1.39a.732.732 0 011.322-.144l-3.766 2.26zm-6.003-8.05a3.66 3.66 0 004.332-.419l-2.938-3.264a.732.732 0 01.866-.084l-2.26 3.766zm3.592-1.722a3.66 3.66 0 00-.69 4.603l3.766-2.26c.18.301.122.687-.138.921l-2.938-3.264zm11.97-9.984a.732.732 0 01-.925-.926l4.166 1.389c.954-2.861-1.768-5.583-4.63-4.63l1.39 4.167zm-19.956 2.022c-2.967.99-3.407 5.003-.726 6.611l2.26-3.766a.732.732 0 01-.145 1.322l-1.39-4.167z" fill="#fff" mask="url(#icon-payments-cat_svg__a)"></path>
                                            <defs>
                                                <linearGradient id="icon-payments-cat_svg__paint0_linear_1141_21101" x1="25" y1="2" x2="25" y2="48" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#fff" stop-opacity="0.71"></stop>
                                                    <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <span class="button__text">Enviar</span>
                                </div>
                            </button>
                            <button id="resetLocalStorage" class="btn btn-secondary m-1">Resetar</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>

</div>


{{-- Modal funçoes --}}
<div class="modal fade" id="modalFuncoes" tabindex="-1" aria-labelledby="modalFuncoesLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalFuncoesLabel">Funções do Sistema</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body d-flex justify-content-around">
                <button type="button" id="contexProgramar" class="btn btn-success">Programar</button>
                <button type="button" id="contexBloqueio" class="btn btn-warning">Bloquear</button>
                <button type="button" id="contexEdit" class="btn btn-info">Editar</button>
                <button type="button" id="contexDelete" class="btn btn-danger">Deletar</button>
            </div>
        </div>
    </div>
</div>

{{-- ContexMenu bloqueio --}}
<div id="contextMenu" class="context-menu card" style="display: none;">
    <ul class="">
        <li><a id="menuActionEditar">Editar</a></li>
        <li><a id="menuActionExluir">Excluir</a></li>
    </ul>
</div>


{{-- Modal Infos Veiculos e Motorista  --}}
<div class="modal fade" id="registroAcesso" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content" style="">
            <div class="card" style="display: flex; flex-direction: column; height: 100vh;">
                <div class="user-block-2" style="flex: 0 0 15%;">
                    <img style="width: 200px; height: 200px;" id="img_motorista_triagem" class="img-fluid"
                        src="" alt="user-header">
                    <h5 id="nameMotorista"></h5>
                    {{-- <h6>Software Engineer</h6> --}}
                </div>
                <div class="card-block"
                    style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">

                    <div class="card p-3">
                        <label class="mr-3" for="">Informações do veiculo e motorista</label>
                        <div class="card-body" style="display: flex; flex-direction: row;">
                            <div class="m-2">
                                <label for="cnhTriagem"><strong>Placa:</strong></label>
                                <p id="placaInfos">placa</p>
                            </div>

                            <div class="m-2">
                                <label for="cnhTriagem"><strong>Tipo:</strong></label>
                                <p id="tipoInfos">tipo</p>
                            </div>

                            <div class="m-2">
                                <label for="cnhTriagem"><strong>Documentação:</strong></label>
                                <p id="documInfos">documento</p>
                            </div>

                        </div>

                    </div>

                    <div class="card p-3">
                        <label class="mr-3" for="">Informações do carregamento</label>
                        <div class="card-body">
                            <p><strong>Razão social:</strong> </p>
                            <p id="transpInfo"></p>
                        </div>

                    </div>

                    <div class="card m-3">
                        <label class="mr-3" for="">Informações do motorista</label>
                        <div class="card-body" style="display: flex; flex-direction: row;">
                            <div class="m-2">
                                <label><strong>CNH:</strong></label>
                                <p id="cnhTriagem"></p>
                            </div>

                            <div class="m-2">
                                <label><strong>CPF:</strong></label>
                                <p id="cpfTriagem"></p>
                            </div>

                        </div>
                    </div>


                    <div class="card p-3">
                        <label class="mr-3" for="">Objetivo do motorista no terminal</label>
                        <div class="card-body">
                            <div class="m-2" style="display: flex; flex-direction: row;"></div>
                            <label><strong>Operação:</strong></label>
                            <p id="objNoTerminal"></p>
                        </div>
                        <div class="text-center btn-group" style="mt-1">
                            <button id="registerAcesso" type="button" class="btn btn-primary">
                                Registrar Acesso
                            </button>
                            <button id="btnCancelar" type="button" class="btn btn-warning" data-dismiss="modal">
                                Cancelar
                            </button>
                        </div>
                    </div>



                </div>
            </div>


        </div>
    </div>
</div>



<div class="modal fade" id="modalDetalhesMotorista" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content" style="">
            <div class="container rounded p-3 mb-5 bg-light shadow">
                <h1 class="display-4 font-weight-bold mb-4">Detalhes do Motorista</h1>
                <div class="d-flex align-items-center gap-2 mb-4">
                    <div class="profile-pic-container">
                        <img id="img_motorista" style="width: 100px; height:100px; object-fit:cover;" src=""
                            alt="Placeholder profile image of a man with dark hair." class="img-fluid rounded-circle">
                    </div>

                    <div>
                        <input type="file" id="fileInputImg" style="display: none;" />
                        <button type="file" id="btnUpdateImg" class="btn btn-primary"><i
                                class="bi bi-cloud-upload-fill"></i></button>
                        <button id="btnCamera" class="btn btn-primary ml-2"><i
                                class="bi bi-camera-fill"></i></button>
                        <button id="bntDefaut" class="btn btn-primary ml-2"><i
                                class="bi bi-arrow-clockwise"></i></button>
                        <p class="text-muted mt-1">PERMITIDO JPG, JPEG e PNG. Tamanho maximo de 800K</p>
                    </div>


                    <div class="divBloqueiImg">
                        <img id="bloqueioimg" style="width: 80px; height:80px; object-fit:cover;"
                            src="{{ asset('images\cards\bloquear-usuario.png') }}"
                            alt="Placeholder profile image of a man with dark hair." class="img-fluid">
                    </div>
                </div>
                <div id="formGerenciamento" class="row g-4">
                    <input type="hidden" id="id_datails" name="datails">
                    <div class="col-md-12">
                        <label for="nomeGerenciamento">Nome</label>
                        <input type="text" class="form-control" id="nomeGerenciamento" />
                    </div>

                    <div class="col-md-6">
                        <label for="cpfGerenciamento">CPF</label>
                        <input type="text" class="form-control" id="cpfGerenciamento" />
                    </div>

                    <div class="col-md-6">
                        <label for="cnhGeremciamento">CNH</label>
                        <input type="text" class="form-control" id="cnhGeremciamento" />
                    </div>
                    <!-- <label for="">Contato:</label> -->
                    <div class="col-md-6">
                        <label for="email">E-mail</label>
                        <input type="email" class="form-control" id="emailGerenciamento" />
                    </div>
                    <div class="col-md-6">
                        <label for="telefone">Numero de telefone</label>
                        <input type="tel" class="form-control" id="telefoneGerenciamento" />
                    </div>

                    <!-- <label for="">Endereço</label> -->
                    <div class="col-md-6">
                        <label for="UFGerenciamento">Estado</label>
                        <input type="text" class="form-control" id="UFGerenciamento" />
                    </div>
                    <div class="col-md-6">
                        <label for="cidadeGerenciamento">Cidade</label>
                        <input type="text" class="form-control" id="cidadeGerenciamento" />
                    </div>
                    <div class="col-md-6">
                        <label for="cepGerenciamento">CEP</label>
                        <input type="text" class="form-control" id="cepGerenciamento" />
                    </div>

                    <div class="col-md-6">
                        <label for="complementoGerenciamento">Complemento</label>
                        <input type="text" class="form-control" id="complementoGerenciamento" />
                    </div>
                    <div class="bg-white p-4 rounded shadow mt-5">
                        <h2 class="h4 font-weight-bold mb-3">Permissão de acesso</h2>
                        <div class="mb-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="bloqueioGerenciamento">
                                <label class="form-check-label" for="bloqueioGerenciamento">
                                    Eu confirmo que quero alterar a permissão de acesso desse motorista!
                                </label>
                            </div>
                        </div>
                        <button disabled id="bntUpdadeBloqueio"
                            class="btn btn-danger text-white font-weight-bold py-2 px-4 rounded">
                            Bloquear acesso
                        </button>
                    </div>

                </div>

                <div class="d-flex gap-4 mt-4">
                    <button id="updateDatails" class="btn btn-primary flex-fill">Salvar</button>
                    <button id="cancelDatails" class="btn btn-primary flex-fill">Cancelar</i></button>
                </div>

            </div>

        </div>
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="cameraModal" tabindex="-1" aria-labelledby="cameraModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="cameraModalLabel">Tirar Foto</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div style="" class="modal-body">
                <video id="cameraVideo" autoplay style="width: 100%; height: 100%;"></video>
                <canvas id="cameraCanvas" style="width: 100%; height: 400px; display: none;"></canvas>
                <img id="capturedImageDisplay" src="" alt="Captured Image"
                    style="width: 100%; height: 400px; display: none;">
            </div>
            <div class="modal-footer d-flex justify-content-center">
                <button type="button" class="btn btn-primary" id="takePhotoButton"><i
                        class="bi bi-camera"></i></button>
                <button type="button" class="btn btn-primary" id="otherPhotoButton"><i
                        class="bi bi-arrow-counterclockwise"></i></button>
                <button type="button" class="btn btn-primary" id="savePhotoButton"><i
                        class="bi bi-cloud-arrow-up-fill"></i></button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><i
                        class="bi bi-arrow-right-circle-fill"></i></button>
            </div>
        </div>
    </div>
</div>
