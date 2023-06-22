<?php
include('includes/header.php');
include('includes/navbar.php');
?>



<div class="container-fluid">

    <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary"> Editar processo </h6>
        </div>
        <div class="card-body">

            <?php


            if (isset($_POST['edit-btn'])) {



                $id = $_POST['edit-id'];

                $stmt = $conection->prepare("SELECT c.*, p.nome as nome_produto, p.id as produto_id, t.id as transportador_id, t.razao_social as transportador_nome 
                FROM carregamentos c 
                INNER JOIN produto p 
                INNER JOIN transportador t WHERE c.id=:id AND c.id_produto = p.id AND c.id_transportador = t.id;");
                $stmt->bindParam(":id", $id);
                $stmt->execute();
                $row = $stmt->fetch(PDO::FETCH_ASSOC);

                ?>

            <form action="code.php" method="POST" enctype="multipart/form-data">

                <div class="form-row">
                    <input type="hidden" name="user_username" value="<?php echo $user['username'] ?>">
                    <input type="hidden" name="edit_id" value="<?php echo $row['id'] ?>">
                    <div class="col-md-4 mb-3">
                        <label for="edit_data_chegada">Data de chegada</label>
                        <input type="datetime-local" name="edit_data_chegada" id="edit_data_chegada"
                            value="<?php echo $row['data_chegada'] ?>" class="form-control"
                            placeholder="Hora de chegada do veiculo">
                    </div>


                    <div class="col-md-4 mb-3">
                        <label for="edit_placa">Placa</label>
                        <input type="text" name="edit_placa" value="<?php echo $row['placa'] ?>" class="form-control"
                            placeholder="Informe a placa do veiculo" required>
                    </div>
                    <?php
                        $sql = "SELECT * FROM transportador;";
                        $query = $conection->prepare($sql);
                        $query->execute();
                        $resultados = $query->fetchAll(PDO::FETCH_ASSOC); ?>
                    <div class="col-md-4 mb-3">
                        <label for="transportadora">Transportadora</label>
                        <select class="form-select" name="edit_transportadora" id="edit_transportadora">
                            <option value="<?php echo $row['transportador_id'] ?>">
                                <?php echo $row['transportador_nome'] ?></option>
                            <?php
                                foreach ($resultados as $valor) {
                                    ?>
                            <option value="<?php echo $valor['id'] ?>"><?php echo $valor['razao_social'] ?></option>
                            <?php } ?>
                        </select>
                    </div>
                </div>

                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="edit_ordem">Ordem de produção</label>
                        <input type="text" name="edit_ordem" id="edit_ordem" value="<?php echo $row['ordemProd'] ?>"
                            class="form-control" placeholder="Informe a numeração da ordem de carregamento">
                    </div>

                    <?php
                        $sql = "SELECT * FROM produto;";
                        $query = $conection->prepare($sql);
                        $query->execute();
                        $resultados = $query->fetchAll(PDO::FETCH_ASSOC); ?>
                    <div class="col-md-4 mb-3">
                        <label for="edit_produto">Produto</label>
                        <select class="form-select" name="edit_produto">
                            <option value="<?php echo $row['produto_id'] ?>"><?php echo $row['nome_produto'] ?></option>
                            <?php
                                foreach ($resultados as $valor) {
                                    ?>
                            <option value="<?php echo $valor['id'] ?>"><?php echo $valor['nome'] ?></option>
                            <?php } ?>

                        </select>

                    </div>

                    <div class="col-md-4 mb-3">

                        <label for="edit_especie">Especie</label>
                        <select class="form-select" name="edit_especie" id="especie" required>
                            <option value="<?php echo $row['especie'] ?>"><?php echo $row['especie'] ?></option>
                            <option value="BigBag">BigBag</option>
                            <option value="Granel">Granel</option>
                        </select>

                    </div>


                </div>

                <div class="form-row">

                    <div class="col-md-4 mb-3">
                        <label for="edit_quantidade">Quantidade</label>
                        <input type="text" name="edit_quantidade" value="<?php echo $row['quantidade'] ?>"
                            class="form-control" placeholder="Informe a quantidade de toneladas do carregamento"
                            required>
                    </div>

                    <div class="col-md-4 mb-3">
                        <label for="edit_status_carregamento">Status do carregamento</label>
                        <select name="edit_status_carregamento" id="edit_status_carregamento" class="form-select"
                            required>
                            <option value="<?php echo $row['status_carregamento'] ?>">
                                <?php echo $row['status_carregamento'] ?></option>
                            <option value="Aguardando OP">Aguardando OP</option>
                            <option value="Patio">Pátio</option>
                            <option value="Em carregamento">Em carregamento</option>
                            <option value="Carregado">Carregado</option>
                            <option value="Ajuste de peso">Ajuste de peso</option>
                            <option value="Liberado">Liberado</option>
                            <option value="Cancelado">Cancelado</option>
                            <option value="Aguardando NF">Aguardando NF</option>
                        </select>
                    </div>


                    <div class="modal fade" id="modalExemplo" tabindex="-1" role="dialog"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Quantidade Ajustada</h5>
                                </div>
                        
                                    <div class="modal-body">
                                        <input class="form-control" name="ajust_peso" id="ajust_peso" type="number"
                                        value="<?php echo $row['ajust_peso'] ?>">

                                    </div>


                            </div>
                        </div>
                    </div>


                    <div class="col-md-4 mb-3">

                        <label for="edit_cif_fob">CIF/FOB</label>
                        <select class="form-select" name="edit_cif_fob" id="edit_cif_fob" required>
                            <option value="<?php echo $row['cif_fob'] ?>"><?php echo $row['cif_fob'] ?></option>
                            <option value="CIF">CIF</option>
                            <option value="FOB">FOB</option>
                        </select>

                    </div>

                </div>



                <div class="form-row">

                    <div class="col-md-6 mb-3">
                        <label for="edit_pedido">Pedido</label>
                        <input type="text" name="edit_pedido" value="<?php echo $row['n_pedido'] ?>"
                            class="form-control" placeholder="Nº do pedido" required>
                    </div>


                    <div class="col-md-6 mb-3">
                        <label for="edit_produtor">Cliente</label>
                        <input type="text" name="edit_produtor" id="edit_produtor"
                            value="<?php echo $row['produtor'] ?>" class="form-control"
                            placeholder="Informe o produtor destinado" required>
                    </div>


                </div>

                <div class="form-row">


                    <div class="col-md-6 mb-3">
                        <label for="data_inicio">Data de inicio</label>
                        <input type="datetime-local" name="edit_data_inicio" id="edit_data_inicio"
                            value="<?php echo $row['data_inicio'] ?>" class="form-control">
                    </div>

                    <div class="col-md-6 mb-3">
                        <label for="edit_placa">Data do termino</label>
                        <input type="datetime-local" name="edit_data_fim" id="edit_data_fim"
                            value="<?php echo $row['data_fim'] ?>" class="form-control">
                    </div>

                </div>

                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="edit_nf_inter">NF Inter</label>
                        <input type="text" id="inputPDFretorno" class="form-control verifyInput"
                            placeholder="É necessario digitar numero da NF" name="edit_nf_inter"
                            value="<?php echo $row['nf_retorno'] ?>">
                        <br>
                        <input type="file" class="fileDisabled form-control" name="arquivoPdf_nfRetorno"
                            id="arquivo_pdf_retorno">
                        <br>
                        <br>
                        <?php
                            $pdfExiste = file_exists('includes/documentos/doc_NF_retorno/' . $row['nf_retorno'] . '.pdf');
                            if ($pdfExiste) {
                                echo "<a class='fa-sharp fa-solid fa-file-pdf fa-2xl'  href='includes/documentos/doc_NF_retorno/" . $row['nf_retorno'] . ".pdf" . "' target='_blank'></a><br>";
                            } else {
                                echo "<a class='fas fa-file fa-2xl' target='_blank'></a><br>Nenhum arquivo importado";
                            }

                            ?>
                    </div>


                    <div class="col-md-4 mb-3">
                        <label for="edit_ticket">Ticket</label>
                        <input type="text" id="inputPDFticket" class="form-control verifyInput"
                            placeholder="É necessario digitar o numero do TICKET" name="edit_ticket"
                            value="<?php echo $row['ticket'] ?>">
                        <br>
                        <input type="file" class="form-control fileDisabled" name="arquivoPdf_ticket"
                            id="arquivo_pdf_ticket">
                        <br>
                        <br>
                        <?php
                            $pdfExiste = file_exists('includes/documentos/doc_ticket/' . $row['ticket'] . '.pdf');
                            if ($pdfExiste) {
                                echo "<a class='fa-sharp fa-solid fa-file-pdf fa-2xl'  href='includes/documentos/doc_ticket/" . $row['ticket'] . ".pdf" . "' target='_blank'></a><br>";
                            } else {
                                echo "<a class='fas fa-file fa-2xl' target='_blank'></a><br>Nenhum arquivo importado";
                            }
                            ?>
                    </div>

                    <div class="col-md-4 mb-3">
                        <label for="edit_nf_venda">NF venda</label>
                        <input type="text" id="inputPDFvenda" placeholder="É necessario digitar o numero da NF de Venda"
                            name="edit_nf_venda" value="<?php echo $row['nf_venda'] ?>"
                            class="form-control verifyInput">
                        <br>
                        <input type="file" class="fileDisabled form-control" name="arquivoPdf_nfVenda"
                            id="arquivo_pdf_venda">
                        <br>
                        <br>
                        <?php
                            $pdfExiste = file_exists('includes/documentos/doc_NF_venda/' . $row['nf_venda'] . '.pdf');
                            if ($pdfExiste) {
                                echo "<a class='fa-sharp fa-solid fa-file-pdf fa-2xl'  href='includes/documentos/doc_NF_venda/" . $row['nf_venda'] . ".pdf" . "' target='_blank'></a><br>";
                            } else {
                                echo "<a class='fas fa-file fa-2xl' target='_blank'></a><br>Nenhum arquivo importado";
                            }
                            ?>
                    </div>
                </div>

                <button type="submit" name="updatebtn" class="btn btn-primary"> Editar </button>
                <a href="index.php" class="btn btn-danger">Cancelar</a>


            </form>

        </div>

        <?php } ?>


    </div>
</div>

</div>



<?php

include('includes/script.php');
include('includes/footer.php');


?>