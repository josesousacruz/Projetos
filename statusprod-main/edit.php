<?php 
include('includes/header.php');
include('includes/navbar.php');
include('includes/config.php');
?>



<div class="container-fluid">

    <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary"> Editar processo </h6>
        </div>
        <div class="card-body">

        <?php 

$conection = mysqli_connect("localhost","root","","status_carregamento");
    
    if (isset($_POST['edit-btn'])) {
        $id = $_POST['edit-id'];
        $query = "SELECT * FROM processos WHERE id='$id' " ;
        $query_run = mysqli_query($conection, $query);
        
        foreach($query_run as $row){
            ?>

              
                        <form action="code.php" method="POST">
                            <input type="hidden" name="edit_id" value="<?php echo $row['id']?>">
                        <div class="form-group">
                        <label for="hora_chegada">Hora de chegada</label>
                                <input type="text" name="edit_hora_chegada" value="<?php echo $row['hora_chegada'] ?>" class="form-control"
                                placeholder="Hora de chegada do veiculo" require>
                            </div>


                            <div class="form-group">
                            <label for="placa">Placa</label>
                                <input type="text" name="edit_placa" value="<?php echo $row['placa'] ?>" class="form-control"
                                placeholder="Informe a placa do veiculo"  required>
                            </div>
                            <div class="form-group">
                            <label for="transportadora">transportadora</label>
                                <input type="text" name="edit_transportadora" value="<?php echo $row['transportadora'] ?>" class="form-control"
                                placeholder="Informe a transportadora">
                            </div>
                            <div class="form-group">
                            <label for="ordem">Ordem de produção</label>
                                <input type="text" name="edit_ordem" value="<?php echo $row['ordem'] ?>"
                                    class="form-control" 
                                    placeholder="Informe a numeração da ordem de carregamento" required>
                            </div>
                            
                            <div>

                            <label for="quantidade">Quantidade</label>
                                <input type="text" name="edit_quantidade" value="<?php echo $row['quantidade'] ?>"
                                    class="form-control" 
                                    placeholder="Informe a quantidade de toneladas do carregamento" required>
                            </div>

                            <button type="submit" name="updatebtn" class="btn btn-primary"> Editar </button>
                            <a href="indexZ.php" class="btn btn-danger"> Cancelar </a>
                            

                        </form>
              
        </div>

        <?php
        }
    }

    ?>


    </div>
</div>

</div>

