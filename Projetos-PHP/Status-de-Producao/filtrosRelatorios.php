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

            <!-- Page Heading -->
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Filtros</h1>

                <!-- <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>  -->
            </div>

            <div class="row">
                <div class="col-md-3 mb-3">
                    <label for="min-date">Data minima:</label>
                    <input type="date" id="min-date" name="min-date" class="form-control">

                </div>
                <div class="col-md-3 mb-3">
                    <label for="max-date">Data maxima:</label>
                    <input type="date" id="max-date" name="max-date" class="form-control">
                </div>

                <div class="col-md-3 mb-3">
                    <?php
                    $sql = "SELECT * FROM produto;";
                    $query = $conection->prepare($sql);
                    $query->execute();
                    $resultados = $query->fetchAll(PDO::FETCH_ASSOC); ?>
                    <label class="mx-1 ml-3">Produto: </label>
                    <select name="filterProduto" id="filterProduto" class="form-control form-select">
                        <option value="">Todas produtos</option>
                        <?php
                        foreach ($resultados as $valor) {
                            ?>
                            <option value="<?php echo $valor['nome'] ?>"><?php echo $valor['nome'] ?></option>
                        <?php } ?>
                    </select>
                </div>
                <div class="col-md-3 mb-3">
                    <label for="filterEspecie">Espécie:</label>
                    <select name="filterEspecie" id="filterEspecie" class="form-select">
                        <option value="">Todas espécies</option>
                        <option value="BigBag">BigBag</option>
                        <option value="Granel">Granel</option>
                    </select>
                </div>
            </div>


        </div>

        <!-- /.container-fluid -->


        <!-- Inicio da tabela -->
        <div class="card shadow border-left-success">
            <table class="display nowrap" style="width:100%" cellspacing="0" id="filterTable">
                <thead>
                    <tr class="text-center text-dark bg-light">
                        <!-- <th>Ordem</th> -->
                        <th>Chegada</th>
                        <th>Placa</th>
                        <th>Transportadora</th>
                        <th>Data Inicio</th>
                        <th>Data fim</th>
                        <th>Tempo de Carregamento</th>
                        <th>OC</th>
                        <th>Produto</th>
                        <th>Especie</th>
                        <th>Ton</th>
                        <th>CIF/FOB</th>
                        <th>N Pedido</th>
                        <th>Produtor</th>
                        <th>NF INTER</th>
                        <!-- <th>NF INTER HORA ENVIO</th> -->
                        <th>Ticket</th>
                        <th>NF venda</th>
                        <th>Status</th>
                        <!--  <th>NF venda Hora recebimento</th>
                                <th>Tempo de recebimento</th>
                                <th>Status viagem</th>
                                <th>Data de Liberação</th>  -->


                    </tr>

                </thead>
                <div>
                    <tbody class="" id="results">

                        <?php
                        $sql = "SELECT c.*,
                        TIMEDIFF(c.data_fim, c.data_inicio) AS tempo_carregamento,
                        p.id AS produto_id,
                        p.nome AS nome_produto,
                        t.id AS transportadora_id,
                        t.razao_social AS nome_transportador,
                        DATE_FORMAT(c.data_chegada, '%d/%m/%Y %H:%i:%s') AS data_chegada,
                        DATE_FORMAT(c.data_inicio, '%d/%m/%Y %H:%i:%s') AS data_inicio,
                        DATE_FORMAT(c.data_fim, '%d/%m/%Y %H:%i:%s') AS data_fim
                        FROM carregamentos c
                        INNER JOIN produto p ON c.id_produto = p.id
                        INNER JOIN transportador t ON c.id_transportador = t.id
                        WHERE c.status_carregamento = 'Liberado'
                        ORDER BY idOrdem ASC;";
                        $query = $conection->prepare($sql);
                        $query->execute();
                        $resultado = $query->fetchAll(PDO::FETCH_OBJ);

                        foreach ($resultado as $retorno) {

                            $tempoCarregamento;
                            if ($retorno->tempo_carregamento < "00:00:00") {
                                $tempoCarregamento = "00:00:00";
                            } elseif ($retorno->status_carregamento <> "Liberado") {
                                $tempoCarregamento = "00:00:00";
                            } else {
                                $tempoCarregamento = $retorno->tempo_carregamento;
                            }

                            ?>

                            <tr class="text-center text-dark tabelaSmall" id="<?php echo $retorno->id; ?>">

                                <td>
                                    <?php echo $retorno->data_chegada; ?>
                                </td>
                                <td>
                                    <?php echo $retorno->placa; ?>
                                </td>
                                <td>
                                    <?php echo $retorno->nome_transportador; ?>
                                </td>
                                <td>
                                    <?php echo $retorno->data_inicio ?>
                                </td>
                                <td>
                                    <?php echo $retorno->data_fim ?>
                                </td>
                                <td>
                                    <?php echo $tempoCarregamento; ?>
                                </td>
                                <td>
                                    <?php echo $retorno->ordemProd; ?>
                                </td>
                                <td>
                                    <?php echo $retorno->nome_produto; ?>
                                </td>
                                <td>
                                    <?php echo $retorno->especie; ?>
                                </td>
                                <td>
                                    <?php echo $retorno->quantidade; ?>
                                </td>

                                <td>
                                    <?php echo $retorno->cif_fob; ?>
                                </td>
                                <td>
                                    <?php echo $retorno->n_pedido; ?>
                                </td>
                                <td>
                                    <?php echo $retorno->produtor; ?>
                                </td>

                                <td>
                                    <?php echo $retorno->nf_retorno; ?>
                                    <?php
                                    $pdfExiste = file_exists('includes/documentos/doc_NF_retorno/' . $retorno->nf_retorno . '.pdf');
                                    if ($pdfExiste) {
                                        echo "<a class='fa-sharp fa-solid fa-file-pdf fa-2xl'  href='includes/documentos/doc_NF_retorno/" . $retorno->nf_retorno . ".pdf" . "' target='_blank'></a><br>";
                                    } else {
                                        echo "<a class='fas fa-file fa-2xl' target='_blank'></a><br>Nenhum arquivo importado";
                                    }
                                    ?>
                                </td>
                                <td>
                                    <?php echo $retorno->ticket; ?>
                                    <?php
                                    $pdfExiste = file_exists('includes/documentos/doc_ticket/' . $retorno->ticket . '.pdf');
                                    if ($pdfExiste) {
                                        echo "<a class='fa-sharp fa-solid fa-file-pdf fa-2xl'  href='includes/documentos/doc_ticket/" . $retorno->ticket . ".pdf" . "' target='_blank'></a><br>";
                                    } else {
                                        echo "<a class='fas fa-file fa-2xl' target='_blank'></a><br>Nenhum arquivo importado";
                                    }
                                    ?>
                                </td>
                                <td>
                                    <?php echo $retorno->nf_venda; ?>
                                    <?php
                                    $pdfExiste = file_exists('includes/documentos/doc_NF_venda/' . $retorno->nf_venda . '.pdf');
                                    if ($pdfExiste) {
                                        echo "<a class='fa-sharp fa-solid fa-file-pdf fa-2xl'  href='includes/documentos/doc_NF_venda/" . $retorno->nf_venda . ".pdf" . "' target='_blank'></a><br>";
                                    } else {
                                        echo "<a class='fas fa-file fa-2xl' target='_blank'></a><br>Nenhum arquivo importado";
                                    }
                                    ?>
                                </td>
                                <td>
                                    <?php echo $retorno->status_carregamento; ?>
                                </td>
                            </tr>

                        <?php } ?>
                    </tbody>
                </div>
            </table>
        </div>
        <!-- fim da tabela -->
        <br>
        <div class="container-fluid ">



            <!-- Content Row -->
            <div class="row">
                <!-- Bar Chart -->
                <div class="col-xl-6 col-lg-6">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Grafico barra</h6>
                        </div>
                        <div class="card-body">
                            <div class="chart-area">
                                <canvas class="card shadow" id="myBarChartRelatorios"></canvas>
                            </div>
                            <hr>
                        </div>
                    </div>
                </div>

                <!-- Pie Chart -->
                <div class="col-xl-6 col-lg-6">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Grafico pizza</h6>
                        </div>
                        <div class="card-body">
                            <div class="chart-area">
                                <canvas class="card shadow" id="myPieChartRelatorio"></canvas>
                            </div>
                            <hr>
                        </div>
                    </div>
                </div>

            </div>




        </div>

    </div>
</div>

</div>

</div>
<!-- End of Main Content -->






<?php
include('includes/footer.php');
?>

<script>
    $(document).ready(function () {

        // Função de filtragem por intervalo de datas

        // Inicializa o DataTable
        var table = $('#filterTable').DataTable({
            responsive: {
                details: {
                    renderer: function (api, rowIdx, columns) {
                        var data = $.map(columns, function (col, i) {
                            return col.hidden ?
                                '<tr data-dt-row="' + col.rowIndex + '" data-dt-column="' + col
                                    .columnIndex + '">' +
                                '<td>' + col.title + ':' + '</td> ' +
                                '<td>' + col.data + '</td>' +
                                '</tr>' :
                                '';
                        }).join('');

                        return data ?
                            $('<table/>').append(data) :
                            true;
                    }
                }
            },
            pagingType: 'full_numbers',
            dom: 'Bfrtip',
            ordering: true,
            searching: true,
            buttons: [{
                extend: 'pdfHtml5',
                exportOptions: {
                    columns: [0, 1, 4, 5, 6, 7, 8, 9, 10, 11]
                },
                customize: function (doc) {
                    doc.content[0].text = 'Relatorio de carregamentos';
                    doc.styles.tableHeader = {
                        color: '#fafafa',
                        fillColor: 'f0f0f0',
                        alignment: 'center'
                    };
                }
            }, 'excel', 'csv', 'print'],
            language: {
                url: "//cdn.datatables.net/plug-ins/1.13.4/i18n/pt-BR.json",
            }
        });

        $(document).ready(function () {
            function formatDate(date) {
                var parts = date.split(' ')[0].split('/');
                return parts[2] + '-' + parts[1] + '-' + parts[0];
            }

            $.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {

                var minDate = $('#min-date').val();
                var maxDate = $('#max-date').val();
                var currentDate = formatDate(data[4]);


                if ((minDate === "" || maxDate === "") || (currentDate >= minDate && currentDate <= maxDate)) {
                    return true;
                }

                return false;
            });

            $('#max-date').on('change', function () {
                var dataObjects = $("#filterTable").DataTable().rows().data().toArray();
                var dataTermino = [];
                var quantidades = [];
                var dataQuantidades = {};
                table.draw();

                $("#filterTable").DataTable().rows({ search: "applied" }).nodes().each(function (row, index, dt) {
                    var dataHora = dt.row(row).data()[4]; // Índice 4 contém a data de término e hora
                    var data = dataHora.split(" ")[0]; // Extrai apenas a data
                    var quantidade = parseInt(dt.row(row).data()[9]);

                    if (dataQuantidades[data] === undefined) {
                        dataQuantidades[data] = quantidade;
                    } else {
                        dataQuantidades[data] += quantidade;
                    }
                });

                // Obter as datas únicas em ordem crescente
                var dataTermino = Object.keys(dataQuantidades).sort(function (a, b) {
                    var dateA = new Date(a);
                    var dateB = new Date(b);
                    return dateA - dateB;
                });

                // Obter as quantidades correspondentes às datas
                var quantidades = dataTermino.map(function (data) {
                    return dataQuantidades[data];
                });

                console.log(quantidades);
                console.log(dataTermino);


                graficoBarRelatorios(dataTermino, quantidades)

                var qtd = 13000
                graficoPieRelatorio(qtd)

            });

        });




        $('#filterProduto').on('change', function () {
            var selectedValue = $(this).val();
            table.column(7).search(selectedValue).draw();
        });


        $('#filterEspecie').on('change', function () {
            var selectedValue = $(this).val();
            table.column(8).search(selectedValue).draw();
        });


        function obterDados() {
            var dados = [];

            table.rows({
                filter: 'applied'
            }).every(function () {

                var placa = this.data()[1];
                var produto = this.data()[9];
                var quantidade = this.data()[6];
                var data = this.data()[13];

                var dado = {
                    placa: placa,
                    produto: produto,
                    quantidade: quantidade,
                    data: data
                };

                dados.push(dado);

            });

        }

        table.on('draw.dt', function () {
            obterDados();
        });

        obterDados();
    });


    function graficoBarRelatorios(datachegada, quantidade) {
        const data = {
            labels: datachegada,
            datasets: [
                //   {
                //     label: "Meta diaria",
                //     backgroundColor: "rgb(166, 249, 247)",
                //     borderColor: "rgb(255, 99, 132)",
                //     data: retornaMetaDia(datachegada),
                //   },
                {
                    label: "Executado",
                    backgroundColor: "rgb(47,79,79)",
                    borderColor: "rgb(255, 99, 132)",
                    data: quantidade,
                },
            ],
        };
        const config = {
            type: "bar",
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true, // Inicia o eixo y em zero
                        max: 800, // Define o valor máximo do eixo y
                        stepSize: 20, // Define o intervalo entre os valores do eixo y
                    },
                },
                plugins: {
                    datalabels: {
                        display: function (context) {
                            // Verifica o índice do dataset para identificar a barra atual
                            var dataIndex = context.dataIndex;
                            var datasetIndex = context.datasetIndex;
                            // Verifique se a barra atual é a barra "executado"
                            if (datasetIndex === 0) {
                                return "auto"; // Exibe o rótulo na barra "executado"
                            } else {
                                return dataIndex === 0 ? "auto" : "none"; // Exibe o rótulo apenas na primeira barra "programado"
                            }
                        },
                        layout: {
                            padding: {
                                left: 50, // Espaçamento à esquerda
                                right: 50, // Espaçamento à direita
                            },
                        },
                        color: "green",
                        anchor: "end",
                        align: "top",
                        offset: 2,
                        font: {
                            size: 13,
                            weight: "arial",
                        },
                    },
                },
            },
        };

        Chart.register(ChartDataLabels); // importante
        const myChart = new Chart(document.getElementById("myBarChartRelatorios"), config);
    }


    function graficoPieRelatorio(totalProduzido) {
        const totalMetaMes = programadoMes;

        const saldoPendente = totalMetaMes - totalProduzido;

        ///////////////////////////Parte do grafico em tabela///////////////////////////////
        var labelPendente = document.createTextNode(saldoPendente);
        document.getElementById("saldoPendente").appendChild(labelPendente);

        necessidadeVeicuPdiaPobjetivo = document.createTextNode(
            Math.round(saldoPendente / 50 / (qtdiaMes() - dia))
        );
        document
            .getElementById("necessidadeVeicuPdiaPobjetivo")
            .appendChild(necessidadeVeicuPdiaPobjetivo);
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        const data = {
            labels: ["Total Meta", "Executado", "Saldo Pendente"],
            datasets: [
                {
                    label: "Quantidade em ton",
                    data: [totalMetaMes, totalProduzido, saldoPendente],
                    backgroundColor: [
                        "rgb(166, 249, 247)",
                        "rgb(47,79,79)",
                        "rgb(255,228,181)",
                        "rgb(0, 240, 220)", // Total meta
                        "rgb(270,255,90)",
                    ],
                    //   hoverOffset: 4
                },
            ],
        };

        const config = {
            type: "pie",
            data: data,
            options: {
                plugins: {
                    datalabels: {
                        color: "White",
                        anchor: "center",
                        font: {
                            size: 15,
                            weight: "bold",
                        },
                    },
                },
            },
        };

        Chart.register(ChartDataLabels);
        const myChart = new Chart(document.getElementById("myPieChartRelatorio"), config);
    }

</script>