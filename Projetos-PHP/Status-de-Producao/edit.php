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
        $query = "SELECT * FROM processos WHERE id='$id' " ;
        $query_run = mysqli_query($conection, $query);
        
        foreach($query_run as $row){
            ?>

                    
                        <form action="code.php" method="POST">

                    <div class="form-row">
                            <input type="hidden" name="edit_id" value="<?php echo $row['id']?>">
                        <div class="col-md-4 mb-3">
                        <label for="edit_data_chegada">Hora de chegada</label>
                                <input type="date" name="edit_data_chegada" value="<?php echo $row['data_chegada'] ?>" class="form-control"
                                placeholder="Hora de chegada do veiculo" require>
                            </div>


                            <div class="col-md-4 mb-3">
                            <label for="edit_placa">Placa</label>
                                <input type="text" name="edit_placa" value="<?php echo $row['placa'] ?>" class="form-control"
                                placeholder="Informe a placa do veiculo"  required>
                            </div>

                            <div class="col-md-4 mb-3">
                            <label for="transportadora">transportadora</label>
                                <input type="text" name="edit_transportadora" value="<?php echo $row['transportadora'] ?>" class="form-control"
                                placeholder="Informe a transportadora">
                            </div>

                     </div>

                        <div class="form-row">
                            <div class="col-md-4 mb-3">
                            <label for="edit_ordem">Ordem de produção</label>
                                <input type="text" name="edit_ordem" value="<?php echo $row['ordem'] ?>"
                                    class="form-control" 
                                    placeholder="Informe a numeração da ordem de carregamento" required>
                            </div>
                            
                            <div class="col-md-4 mb-3">
                            <label for="edit_produto">Produto</label>
                                <input type="text" name="edit_produto" value="<?php echo $row['produto'] ?>"
                                    class="form-control" 
                                    placeholder="Informe o produto a ser carregado" required>
                            </div>

                            <div class="col-md-4 mb-3">
                                                        
                                <label for="edit_especie">Especie</label>
                                <select class="form-control" name="edit_especie"  id="especie"   required>
                                <option value="<?php echo $row['especie'] ?>"><?php echo $row['especie'] ?></option>
                                <option value="BigBag">BigBag</option>
                                <option value="Granel">Granel</option>
                                <option value="Paletizado">Paletizado</option>
                                <option value="Sacaria">Sacaria</option>
                                </select>

                            </div>


                        </div>

                        <div class="form-row">

                            <div class="col-md-4 mb-3">
                            <label for="edit_quantidade">Quantidade</label>
                                <input type="text" name="edit_quantidade" value="<?php echo $row['quantidade'] ?>"
                                    class="form-control" 
                                    placeholder="Informe a quantidade de toneladas do carregamento" required>
                            </div>

                            <div class="col-md-4 mb-3">
                            <label for="edit_status_carregamento">Status do carregamento</label>
                            <select name="edit_status_carregamento" id="edit_status_carregamento" class="form-control">
                                <option value="<?php echo $row['status_carregamento'] ?>"><?php echo $row['status_carregamento'] ?></option>
                                <option value=" Pátio">Pátio</option>
                                <option value="Carregando">Em carregamento</option>
                                <option value="Carregado">Carregado</option>    
                            </select>


                            </div>





                            <div class="col-md-4 mb-3">
                                                        
                             <label for="edit_cif_fob">CIF/FOB</label>
                                <select class="form-control" name="edit_cif_fob"  id="edit_cif_fob"  required> 
                                    <option value="<?php echo $row['cif_fob'] ?>"><?php echo $row['cif_fob'] ?></option>
                                    <option value="CIF">CIF</option>
                                    <option value="FOB">FOB</option>
                                </select>
                            
                            </div>

                         </div>



                    <div class="form-row">

                        <div class="col-md-4 mb-3">
                        <label for="edit_pedido">Pedido</label>
                                <input type="text" name="edit_pedido" value="<?php echo $row['pedido'] ?>" class="form-control"
                                placeholder="Nº do pedido" require>
                            </div>


                            <div class="col-md-4 mb-3">
                            <label for="edit_produtor">Produtor</label>
                                <input type="text" name="edit_produtor" id="edit_produtor" value="<?php echo $row['produtor'] ?>" class="form-control"
                                placeholder="Informe o produtor destinado"  required>
                            </div>

                            <div class="col-md-4 mb-3">
                            <label for="data_inicio">Data de inicio</label>
                                <input type="date" name="edit_data_inicio" value="<?php echo $row['data_inicio'] ?>" class="form-control">
                            </div> 

                     </div>

                     <div class="form-row">
                        <div class="col-md-4 mb-3">
                        <label for="edit_data_chegada">Hora de inicio</label>
                                <input type="time" name="edit_hora_inicio" value="<?php echo $row['hora_inicio'] ?>" class="form-control">
                            </div>


                            <div class="col-md-4 mb-3">
                            <label for="edit_placa">Data do termino</label>
                                <input type="date" name="edit_data_fim" value="<?php echo $row['data_fim'] ?>" class="form-control">
                            </div>
                            
                            <div class="col-md-4 mb-3">
                            <label for="edit_hora_fim">Hora do termino</label>
                                <input type="time" name="edit_hora_fim" value="<?php echo $row['hora_fim'] ?>" class="form-control">
                            </div>

                     </div>
                    
                     <div class="form-row">
                        <div class="col-md-4 mb-3">
                        <label for="edit_nf_inter">NF Inter</label>
                                <input type="text" name="edit_nf_inter" value="<?php echo $row['nf_inter'] ?>" class="form-control">
                            </div>


                            <div class="col-md-4 mb-3">
                            <label for="edit_ticket">Ticket</label>
                                <input type="text" name="edit_ticket" value="<?php echo $row['ticket'] ?>" class="form-control">
                            </div>
                            
                            <div class="col-md-4 mb-3">
                            <label for="edit_nf_venda">NF venda</label>
                                <input type="text" name="edit_nf_venda" value="<?php echo $row['nf_venda'] ?>" class="form-control">
                            </div>

                     </div>







                        

                            <button type="submit" name="updatebtn" class="btn btn-primary"> Editar </button>
                            <a href="index.php" class="btn btn-danger">Cancelar</a>
                            

                        </form>
              
        </div>

        <?php
        }
    }

    ?>


    </div>
</div>

</div>

<?php 

include('includes/script.php');
include('includes/footer.php');


?>