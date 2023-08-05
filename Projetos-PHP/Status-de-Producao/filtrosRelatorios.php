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
                                <canvas class="card shadow h-100 w-100" id="myBarChartRelatorios"></canvas>
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
                            <div class="chart-area d-flex justify-content-center">
                                <canvas class="card shadow h-100" id="myPieChartRelatorio"></canvas>
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
<script src="js/filtrosFinalizados.js"></script>