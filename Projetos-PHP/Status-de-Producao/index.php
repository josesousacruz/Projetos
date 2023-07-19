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
                <h1 class="h3 mb-3 text-gray-800">Indicadores</h1>
                <a href="relatorioPDF.php" target="_blank"
                    class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <i class="fas fa-download fa-sm text-white-50"></i>Gerar ordem
                </a>
            </div>

            <div class="row">
                <?php
                $dataAtual = date("Y-m-d");
                $sql = "SELECT COUNT(*) AS numeroRegistros24h FROM carregamentos 
                WHERE status_carregamento IN ('Liberado','Carregado','Aguardando NF','Ajuste de peso') AND DATE_FORMAT(data_fim,'%Y-%m-%d') = '$dataAtual';";
                $stm = $conection->prepare($sql);
                $stm->execute();
                $resultado24h = $stm->fetch(PDO::FETCH_ASSOC);
                $numeroRegistros24h = $resultado24h['numeroRegistros24h'];

                ?>
                
                <!-- Cards -->
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-success shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Carros carregados no dia</div>
                                    <div id="qtdCarrosCarregados" class="h2 mb-0 font-weight-bold text-gray-800">
                                        <?php echo $numeroRegistros24h ?>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <i class="fa fa-truck fa-2x text-gray-300 fa-beat-fade m-2">
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <?php
                $sql = "SELECT COUNT(*) AS numeroRegistros FROM carregamentos WHERE status_carregamento = 'Pátio' 
                || status_carregamento = 'Aguardando OP' ";
                $stm = $conection->prepare($sql);
                $stm->execute();
                $resultado = $stm->fetch(PDO::FETCH_ASSOC);
                $numeroRegistros = $resultado['numeroRegistros'];
                ?>
    
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-warning shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Carros no Pátio</div>
                                    <div id="qtdCarrosAguardando" class="h2 mb-0 font-weight-bold text-gray-800">
                                        <?php echo $numeroRegistros ?>
                                    </div>
                                </div>
                                <div class="col-auto">

                                    <i class="fa fa-clock fa-2x text-gray-300 fa-spin fa-spin-reverse m-2"></i>
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <?php
                $sql = "SELECT COUNT(*) AS numeroRegistros FROM carregamentos WHERE status_carregamento = 'Aguardando OP'";
                $stm = $conection->prepare($sql);
                $stm->execute();
                $resultado = $stm->fetch(PDO::FETCH_ASSOC);
                $numeroRegistrosOP = $resultado['numeroRegistros'];
                ?>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-warning shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    Aguardando OP</div>
                                    <div id="qtdCarrosAguardando" class="h2 mb-0 font-weight-bold text-gray-800">
                                        <?php echo $numeroRegistrosOP ?>
                                    </div>
                                </div>
                                <div class="col-auto">
                                <i class="fa-solid text-gray-300 fa-2x fa-circle-exclamation fa-beat m-2"></i>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

        <!-- /.container-fluid -->
        <div class="card shadow mb-4">

            <div class="card-header py-3 d-sm-flex align-items-center justify-content-between mb-4">

                <h6 class="m-0 font-weight-bold text-primary">Status de carregamento</h6>
                <!-- Botão para acionar modal -->
                <?php
                if ($user['nivel_acesso'] >= 2) {
                    echo '<button type="button" class="d-none d-sm-inline-block  btn btn-primary shadow" data-toggle="modal" data-target="#CadModal">
                          Programar veiculo
                          </button>';
                }
                ?>


            </div>
            <!--class= "card-body" -->
            <div class="">
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

                <!-- Inicio da tabela -->
       
                <div id="searchDiv" class="row">
                <div class="col-md-3 mb-2 d-flex justify-content-end align-items-center">
                    <label for="searchInput" class="text-">Pesquisar:</label>
                    <input class="form-control ml-2" type="text" id="searchInput" placeholder="Buscar registros">
                </div>
                </div>




                <div class="card shadow border-left-success">
                    <table class="table-bordered table-hover"  id="tabelaIndex">
                        <thead>
                            <tr class="text-center text-dark bg-light">
                                <!-- <th>Ordem</th> -->
                                <th>Chegada</th>
                                <th >Placa</th>
                                <th>Transportadora</th>
                                <th>Produto</th>
                                <th>Especie</th>
                                <th>Ton</th>
                                <th>Status</th>
                                <th>CIF/FOB</th>
                                <th>Pedido</th>
                                <th>Cliente</th>
                                <th>Data Inicio</th>
                                <th>Data fim</th>
                                <th>Tempo de Carregamento</th>
                                <th>OP</th>
                                <th>NF INTER</th>
                                <!-- <th>NF INTER HORA ENVIO</th> -->
                                <th>Ticket</th>
                                <th>NF venda</th>
                                <!--  <th>NF venda Hora recebimento</th>
                                <th>Tempo de recebimento</th>
                                <th>Status viagem</th>
                                <th>Data de Liberação</th>  -->
                                <?php
                                if ($user['nivel_acesso'] >= 2) {
                                    echo '<th>Ações</th>';
                                }
                                ?>




                            </tr>

                        </thead>




                        <div>

                            <tbody class="<?php
                            if ($user['nivel_acesso'] >= 2) {
                                echo 'sortable';
                            } ?>" id="results">

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
                                WHERE c.status_carregamento <> 'Liberado' AND c.status_carregamento <> 'Cancelado'
                                ORDER BY idOrdem ASC;
                                ";
                                $query = $conection->prepare($sql);
                                $query->execute();
                                $resultado = $query->fetchAll(PDO::FETCH_OBJ);

                                foreach ($resultado as $retorno) {


                                    // $tempoCarregamento;
                                    if ($retorno->tempo_carregamento < "00:00:00") {
                                        $tempoCarregamento = "00:00:00";
                                    } else {
                                        $tempoCarregamento = $retorno->tempo_carregamento;
                                    }

                                    ?>

                                    <tr class="text-center text-dark tabelaSmall" id="<?php echo $retorno->id; ?>">

                                        <td class="text-wrap">
                                            <?php echo $retorno->data_chegada; ?>
                                        </td>
                                        <td>
                                            <?php echo $retorno->placa; ?>
                                        </td>
                                        <td>
                                            <?php echo $retorno->nome_transportador; ?>
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
                                        <td <?php

                                        if ($retorno->status_carregamento == 'Patio' || 
                                        $retorno->status_carregamento == 'Aguardando OP') {
                                            echo "class='badge rounded-pill text-dark bg-warning' ";
                                        }else if ($retorno->status_carregamento == 'Em carregamento') {
                                            echo "class='badge rounded-pill  bg-primary'";
                                        }else if($retorno->status_carregamento == 'Ajuste de peso'){
                                            echo "class='badge rounded-pill text-dark bg-info'";
                                        }else if($retorno->status_carregamento == 'Programado'){
                                            echo "class='badge rounded-pill  bg-secondary'";
                                        }else if($retorno->status_carregamento == 'Cancelado'){
                                            echo "class='badge rounded-pill  bg-danger'";
                                        } else {
                                            echo "class='badge rounded-pill  bg-success'";
                                        }

                                        ?>
                                        >
                                            <?php echo $retorno->status_carregamento; ?>
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
                                            <?php echo $retorno->data_inicio; ?>
                                        </td>
                                        <td>
                                            <?php echo $retorno->data_fim; ?>
                                        </td>
                                        <td>
                                            <?php echo $tempoCarregamento; ?>
                                        </td>
                                        <td>
                                            <?php echo $retorno->ordemProd; ?>
                                        </td>
                                        <td>
                                            <?php echo $retorno->nf_retorno; ?>
                                        </td>
                                        <td>
                                            <?php echo $retorno->ticket; ?>
                                        </td>
                                        <td>
                                            <?php echo $retorno->nf_venda; ?>
                                        </td>
                                        <?php if ($user['nivel_acesso'] >= 2) { ?>
                                            <td class="text-center d-sm-flex align-items-center">
                                                <form action="edit.php" method="post">
                                                    <input type="hidden" name="edit-id" value="<?php echo $retorno->id; ?>">
                                                    <button type="submit" name="edit-btn" id="edit-btn"
                                                        class="fa fa-edit btn-sm btn-success m-1 mobile-hidden"></button>
                                                </form>

                                                <!-- Button trigger modal -->
                                                <button type="button" class="fas fa-trash btn-sm btn-danger m-1 mobile-hidden"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#deleteModal<?php echo $retorno->id; ?>"></button>

                                                <!-- Modal Delete -->
                                                <div class="modal fade" id="deleteModal<?php echo $retorno->id; ?>"
                                                    tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="deleteModalLabel">Confirmação de
                                                                    cancelamento</h5>
                                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                                    aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <p>Deseja realmente cancelar este carregamento?</p>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary"
                                                                    data-bs-dismiss="modal">Voltar</button>
                                                                <form action="code.php" method="POST">
                                                                    <input type="hidden" name="delete_id"
                                                                        value="<?php echo $retorno->id; ?>">
                                                                    <button type="submit" name="btndelete"
                                                                        class="btn btn-danger">Cancelar</button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        <?php } ?>

                                    </tr>

                                <?php } ?>
                            </tbody>


                        </div>


                    </table>




                </div>
                <!-- fim da tabela -->
            </div>

        </div>

    </div>
    <!-- /.container-fluid -->

</div>
<!-- End of Main Content -->


</div>
<!-- End of Main Content -->












<?php

include('includes/footer.php');

?>