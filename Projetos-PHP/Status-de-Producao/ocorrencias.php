<?php
include('includes/header.php');
include('includes/navbar.php');
?>

<!-- Content Wrapper -->
<div id="content-wrapper" class="d-flex flex-column">

    <!-- Main Content -->
    <div id="content">

        <!-- Topbar -->
        <?php
        include('includes/topbar.php');
        ?>
        <!-- End of Topbar -->


        <!-- Begin Page Content -->
        <div class="container-fluid">
            <?php ?>

            <!-- Page Heading -->
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Ocorrencias - Daily</h1>

                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                        class="fas fa-download fa-sm text-white-50"></i>PDF</a>
            </div>

            <form id="dateForm">
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="min-date">Data de referência Inicial</label>
                        <input type="datetime-local" id="min-date" name="min-date" class="form-control" required>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="max-date">Data de referência Final</label>
                        <input type="datetime-local" id="max-date" name="max-date" class="form-control" required>
                    </div>
                </div>
                <button data-bs-toggle="collapse" data-bs-target="#collapseExample" type="submit"
                    class="btn btn-primary">Filtrar</button>
            </form>


        </div>

        <!-- /.container-fluid -->
        <div class="card-header py-3 d-sm-flex align-items-center ">

            <button type="button" class="btn btn-primary ml-auto mr-3" data-bs-toggle="modal"
                data-bs-target="#ocorrenciasModal">Nova ocorrencia</button>
        </div>

        <!-- Inicio da tabela -->
        <div class="card shadow border-left-warning">
            <table class="table table-sm display nowrap table-bordered table-hover" style="width:100%" cellspacing="0"
                id="dailyTable">
                <div class="card-header py-3 d-sm-flex align-items-center justify-content-between mb-4">
                    <h6 class="m-0 font-weight-bold text-primary">Ocorrencias</h6>
                </div>
                <thead>
                    <tr class="text-center text-dark bg-light">
                        <th>Id</th>
                        <th>Inicio</th>
                        <th>Termino</th>
                        <!-- <th>Tempo</th> -->
                        <th>Ocorrencia</th>
                        <th>Obs.</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>

            <!-- class="collapse" id="collapseExample" -->
            <div>

                <div class="card card-body">

                    <table class="table table-sm display nowrap" id="reldailyTable">
                        <div class="card-header py-3 d-sm-flex align-items-center justify-content-between mb-4">
                            <h6 class="m-0 font-weight-bold text-primary">Relatorio</h6>
                        </div>
                        <thead>
                            <tr>
                                <th>Manutenção preventiva</th>
                                <th>Manutenção corretiva</th>
                                <th>Limpeza de rotina</th>
                                <th>Limpeza troca de produto</th>
                                <th>Falta de veiculos</th>
                                <th>Falta de programação</th>
                                <th>Aguardando OP</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
        <!-- fim da tabela -->
    </div>
</div>

</div>
<!-- End of Main Content -->

</div>
<!-- End of Main Content -->

<!-- Modal -->
<div class="modal fade" id="ocorrenciasModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Nova ocorrencia</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="formOcorrencia">
                    <input type="hidden" name="_method" value="POST">
                    <div class="mb-3">
                        <label for="ocorrencia" class="col-form-label">Ocorrencia:</label>
                        <select class="form-select" name="ocorrencia" id="ocorrencia">
                            <option value="Limpeza de rotina">Limpeza de rotina</option>
                            <option value="Manutenção preventiva">Manutenção preventiva</option>
                            <option value="Manutenção corretiva">Manutenção corretiva</option>
                            <option value="Limpeza para troca de produto">Limpeza para troca de produto</option>
                            <option value="Falta de veiculos">Falta de veiculos</option>
                            <option value="Falta de programação">Falta de programação</option>
                            <option value="Aguardando OP">Aguardando OP</option>
                            <option value="Ajuste de peso">Ajuste de peso</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Inicio:</label>
                        <input type="datetime-local" class="form-control" name="date_inicio" id="date_inicio">
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Termino:</label>
                        <input type="datetime-local" class="form-control" name="date_termino" id="date_termino">
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Obs:</label>
                        <textarea class="form-control" name="obs" id="message-text"></textarea>
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="closeModalOcorrencia" class="btn btn-secondary"
                            data-bs-dismiss="modal">Fechar</button>
                        <button type="submit" id="btnSaveOcorrencia" name="btnSaveOcorrencia"
                            class="btn btn-primary">Salvar</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</div>

<!-- Modal Editar -->
<div class="modal fade" id="ocorrenciasModalEdit" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Editar ocorrencia</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="formOcorrenciaEdit">
                    <input type="hidden" name="_method" value="PUT">
                    <input type="hidden" name="edit_id" id="edit_id">
                    <div class="mb-3">
                        <label for="ocorrencia" class="col-form-label">Ocorrencia:</label>
                        <select class="form-select" name="ocorrenciaEdit" id="ocorrenciaEdit">
                            <option value="Limpeza de rotina">Limpeza de rotina</option>
                            <option value="Manutenção preventiva">Manutenção preventiva</option>
                            <option value="Manutenção corretiva">Manutenção corretiva</option>
                            <option value="Limpeza para troca de produto">Limpeza para troca de produto</option>
                            <option value="Falta de veiculos">Falta de veiculos</option>
                            <option value="Falta de programação">Falta de programação</option>
                            <option value="Aguardando OP">Aguardando OP</option>
                        </select>

                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Inicio:</label>
                        <input type="datetime-local" class="form-control" name="date_inicioEdit" id="date_inicioEdit">
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Termino:</label>
                        <input type="datetime-local" class="form-control" name="date_terminoEdit" id="date_terminoEdit">
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Obs:</label>
                        <textarea class="form-control" name="message-textEdit" id="message-textEdit"></textarea>
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="closeModalOcorrencia" class="btn btn-secondary"
                            data-bs-dismiss="modal">Fechar</button>
                        <button type="submit" id="btnEditOcorrencia" name="btnSaveOcorrencia"
                            class="btn btn-primary">Salvar</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</div>




<?php
include('includes/footer.php');
?>

<script>
    $(document).ready(function () {

        // Inicializa o DataTable
        var table = $('#dailyTable').DataTable({
            ajax: {
                url: 'graficos/ocorrencias.php',
                type: 'GET',
                dataType: 'json',
                dataSrc: 'data'
            },
            columns: [
                { data: 'id', title: 'ID' },
                { data: 'data_inicio', title: 'Início' },
                { data: 'data_fim', title: 'Término' },
                // {data: 'tempo', title: 'Tempo'},
                { data: 'ocorrencia', title: 'Ocorrência' },
                { data: 'observacao', title: 'Obs.' },
                {
                    data: 'id', title: "Ação", className: 'text-center',
                    render: function (data, type, row) {
                        return '<button class="fa-solid fa-pen-to-square edit-button btn-outline-warning" data-id="' + data + '"></button>';
                    }
                }
            ],

            responsive: true,
            paging: false,
            lengthChange: false,
            ordering: false,
            searching: true,
            language: {
                url: "//cdn.datatables.net/plug-ins/1.13.4/i18n/pt-BR.json",
            }
        });

        var reltable = $('#reldailyTable').DataTable({
            ajax: {
                url: 'graficos/ocorrenciasRel.php',
                type: 'GET',
                dataType: 'json',
                dataSrc: 'data'
            },
            columns:
                [
                    { data: 'manutPreventiva', title: 'Manutenção preventiva' },
                    { data: 'manutCorretiva', title: 'Manutenção corretiva' },
                    { data: 'limpRotina', title: 'Limpeza de rotina' },
                    { data: 'limpProduto', title: 'Limpeza troca de produto' },
                    { data: 'faltVeiculos', title: 'Falta de veiculos' },
                    { data: 'faltProgramacao', title: 'Falta de programação' },
                    { data: 'aguardOP', title: 'Aguardando OP' },
                    { data: 'total', title: 'Total' },
                ],
            responsive: true,
            paging: false,
            lengthChange: false,
            ordering: false,
            searching: false,
            language: {
                url: "//cdn.datatables.net/plug-ins/1.13.4/i18n/pt-BR.json",
            }
        });

        $('#dailyTable tbody').on('click', '.edit-button', function () {
            var id = $(this).data('id');
            preencherCamposModal(id);

        });

        function preencherCamposModal(id) {
            // Realizar a requisição AJAX para obter os dados do servidor
            $.ajax({
                url: 'graficos/ocorrencias.method.php',
                type: 'GET',
                data: { id: id },
                dataType: 'json',
                success: function (response) {
                    // Verificar se os dados foram retornados com sucesso
                    if (response.data.length > 0) {
                        var ocorrencia = response.data[0]; // Primeiro objeto do array

                        // Preencher os campos do modal com os valores obtidos do banco de dados
                        $('#ocorrenciaEdit').val(ocorrencia.ocorrencia);
                        $('#date_inicioEdit').val(ocorrencia.data_inicio);
                        $('#date_terminoEdit').val(ocorrencia.data_fim);
                        $('#message-textEdit').val(ocorrencia.observacao);
                        $('#edit_id').val(ocorrencia.id);
                        $("#ocorrenciasModalEdit").modal("show");
                    } else {
                        // Exibir uma mensagem de erro caso os dados não sejam encontrados
                        alert('Não foi possível obter os dados da ocorrência');
                    }
                },
                error: function () {
                    // Exibir uma mensagem de erro caso ocorra um erro na requisição AJAX
                    alert('Ocorreu um erro na requisição AJAX');
                }
            });

        }


        // Captura o evento de envio do formulário ou o evento de clique do botão
        $('#formOcorrencia').submit(function (event) {
            event.preventDefault();

            // Obtém os dados do formulário
            var formData = $(this).serialize();

            $.ajax({
                url: 'graficos/ocorrencias.method.php',
                type: 'POST',
                data: formData,
                success: function (response) {
                    $('#formOcorrencia')[0].reset();

                    table.ajax.reload();
                    reltable.ajax.reload();
                    $("#ocorrenciasModal").modal("hide");
                },
                error: function () {

                    alert('Error no POST')
                }
            });
        });

        $("#ocorrenciasModalbtn").on('click', function () {
            $("#ocorrenciasModal").modal("show");
        });


        $('#formOcorrenciaEdit').submit(function (event) {
            event.preventDefault();

            // Obtém os dados do formulário
            var formData = $(this).serialize();

            $.ajax({
                url: 'graficos/ocorrencias.method.php',
                type: 'POST',
                data: formData,
                success: function (response) {
                    $('#formOcorrencia')[0].reset();

                    table.ajax.reload();
                    $("#ocorrenciasModalEdit").modal("hide");
                },
                error: function () {
                    console.log('Error no POST')
                }
            });
        });


        // Função para processar a requisição AJAX
        function enviarRequisicao() {
            var minDate = $('#min-date').val();
            var maxDate = $('#max-date').val();

            $.ajax({
                url: 'graficos/ocorrencias.php',
                type: 'POST',
                data: {
                    'min-date': minDate,
                    'max-date': maxDate
                },
                dataType: 'json',
                success: function (response) {
                    // Processar a resposta do servidor aqui
                    table.clear().rows.add(response.data).draw(); // Limpar a tabela e adicionar os novos dados

                },
                error: function () {
                    // Tratar erros de requisição AJAX aqui
                    console.log('Error no POST');
                }
            });


            $.ajax({
                url: 'graficos/ocorrenciasRel.php',
                type: 'POST',
                data: {
                    'relatorio': 'true',
                    'min-date': minDate,
                    'max-date': maxDate
                },
                dataType: 'json',
                success: function (response) {
                    // Processar a resposta do servidor aqui
                    reltable.clear().rows.add(response.data).draw();
                },
                error: function () {
                    // Tratar erros de requisição AJAX aqui
                    console.log('Error no POST');
                }

            })
        }

        // Capturar o evento de envio do formulário
        $('#dateForm').submit(function (event) {
            event.preventDefault();
            enviarRequisicao();
        });


    })
</script>