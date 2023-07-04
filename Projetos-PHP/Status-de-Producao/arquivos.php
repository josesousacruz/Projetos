<?php
include('includes/header.php');
include('includes/navbar.php');
?>
<!-- Content Wrapper -->
<div id="content-wrapper" class="d-flex flex-column">

    <!-- Main Content -->
    <div id="content">
        <!-- navbar fixed-top navbar-light bg-light -->
        <!-- Topbar -->
        <?php
        include('includes/topbar.php');
        ?>
        <!-- End of Topbar -->

        <!-- Begin Page Content -->
        <div class="container-fluid">

            <!-- Page Heading -->
            <div class="d-sm-flex align-items-center justify-content-between mb-1">
                <h1 class="h3 mb-3 text-gray-800">Processos Finalizados</h1>
                <!-- <a href="relatorioPDF.php" target="_blank" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                            <i class="fas fa-download fa-sm text-white-50"></i>Gerar ordem</a> -->
            </div>

            <!-- Content Row -->
            <div class="row">

            </div>
        </div>

        <div class="card-body">
            <?php

            if (isset($_SESSION['success']) && $_SESSION['success'] != '') {
                echo '<h2 class="bg-primary">' . $_SESSION['success'] . '</h2> ';
                unset($_SESSION['success']);
            }


            if (isset($_SESSION['status']) && $_SESSION['status'] != '') {
                echo '<h2 class="bg-info">' . $_SESSION['status'] . '</h2> ';
                unset($_SESSION['status']);
            }

            ?>

            <div class="card shadow border-left-success">
                <table class="display nowrap compact table table-sm table-bordered table-hover" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr class="text-center text-dark">
                            <!-- <th>Ordem</th> -->
                            <th>Chegada</th>
                            <th>Placa</th>
                            <th>Produto</th>
                            <th>Especie</th>
                            <th>Quantidade</th>
                            <th>Data Inicio</th>
                            <th>Data fim</th>
                            <th>Tempo de Carregamento</th>
                            <th>Status Carregamento</th>
                            <th>Transportadora</th>
                            <th>OC</th>
                            <th>CIF/FOB</th>
                            <th>Pedido</th>
                            <th>Produtor</th>
                            <th>NF INTER</th>
                            <th>Ticket</th>
                            <th>NF venda</th>
                            <!-- <th>Status viagem</th>
                                        <th>Data de Liberação</th>  -->
                            <th>Visualizar</th>
                            <!-- <th>Excluir</th> -->
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
                            WHERE c.status_carregamento = 'Liberado' OR c.status_carregamento = 'Cancelado'
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
                                    <td><?php echo $retorno->data_chegada; ?></td>
                                    <td><?php echo $retorno->placa; ?></td>
                                    <td><?php echo $retorno->nome_produto; ?></td>
                                    <td><?php echo $retorno->especie; ?></td>
                                    <td><?php echo $retorno->quantidade; ?></td>
                                    <td><?php echo $retorno->data_inicio ?></td>
                                    <td><?php echo $retorno->data_fim ?></td>
                                    <td><?php echo $tempoCarregamento ?></td>
                                    <td <?php

                                        if (
                                            $retorno->status_carregamento == 'Pátio' ||
                                            $retorno->status_carregamento == 'Aguardando OP'
                                        ) {
                                            echo "class='badge rounded-pill text-dark bg-warning' ";
                                        } else if ($retorno->status_carregamento == 'Em carregamento') {
                                            echo "class='badge rounded-pill  bg-primary'";
                                        } else if ($retorno->status_carregamento == 'Ajuste de peso') {
                                            echo "class='badge rounded-pill text-dark bg-info'";
                                        } else if ($retorno->status_carregamento == 'Programado') {
                                            echo "class='badge rounded-pill  bg-secondary'";
                                        } else if ($retorno->status_carregamento == 'Cancelado') {
                                            echo "class='badge rounded-pill  bg-danger'";
                                        } else {
                                            echo "class='badge rounded-pill  bg-success'";
                                        }

                                        ?>><?php echo $retorno->status_carregamento; ?></td>
                                    <td><?php echo $retorno->nome_transportador; ?></td>
                                    <td><?php echo $retorno->ordemProd; ?></td>
                                    <td><?php echo $retorno->cif_fob; ?></td>
                                    <td><?php echo $retorno->n_pedido; ?></td>
                                    <td><?php echo $retorno->produtor; ?></td>
                                    <td><?php echo $retorno->nf_retorno; ?></td>
                                    <td><?php echo $retorno->ticket; ?></td>
                                    <td><?php echo $retorno->nf_venda; ?></td>

                                    <td class="text-center d-sm-flex align-items-center">
                                        <form action="edit.php" method="post">
                                            <input type="hidden" name="edit-id" value="<?php echo $retorno->id; ?>">
                                            <button type='submit' name="edit-btn" id='edite' class='fa fa-magnifying-glass-plus btn-sm btn-success m-1'></button>

                                        </form>
                                    </td>
                                    </td>
                                </tr>

                            <?php } ?>
                        </tbody>
                    </div>
                </table>
            </div>
        </div>



    </div>

</div>
<!-- /.container-fluid -->

</div>
<!-- End of Main Content -->


</div>
<!-- End of Main Content -->







<?php

include('includes/modal.php');
include('includes/footer.php');


?>