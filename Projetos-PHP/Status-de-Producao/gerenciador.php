<?php 
// session_start();
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
                        <h1 class="h3 mb-0 text-gray-800">Cadastros</h1> 
                    </div>

                </div>

    


    <nav class="nav">
    <a class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseProduto" aria-expanded="true" aria-controls="collapseOne">
          Produtos
        </a>

        <a class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTransportador" aria-expanded="false" aria-controls="collapseTwo">
          Transportador
        </a>


    </nav>




                <!-- /.container-collapsse -->
                <div class="card shadow mb-4 " >
                <div class="card-body ">



              
    <!-- Donut Chart -->
    <div class="collapse" id="collapseProduto">
        <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->     
                <div >
                    <div class="card card-body">
                    <div class="card-header py-3   d-sm-flex align-items-center justify-content-between">
                        <h6>Produto</h6>
                
                <div>
                <button type="button" class="btnMobile  btn btn-primary btn-sm" data-toggle="modal" data-target="#modalCadProduto">
                 Novo Cadastro
                </button>
                </div>

             <div class="modal fade" id="modalCadProduto" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Novo Produto</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <form action="code.php" method="POST">
                        <div class="modal-body">

                        <div class="row">
                            <div class="col">
                                <input id="nomeProd" name="nomeProd" type="text" class="form-control" placeholder="Nome do produto" aria-label="Nome do produto">
                            </div>
                            </div>

                        </div>
                        
                        <div class="modal-footer">
                            <input type="submit" id="btnSalvar_novoProd"  name="btnSalvar_novoProd" class="btn btn-primary" value="Salvar">
                            <button type="submit" class="btn btn-seondary" data-dismiss="modal">Fechar</button>

                        </div>
                        </form>
                        </div>
                    </div>
                    </div>
        
    </div>

    

    <!-- Card Body -->
    <div class="card-body">
    

        <div class="container">
<table class="table table-sm table-hover">
    
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Produto</th>
    </tr>
  </thead>
  <tbody>
    <?php 
    $sql = "SELECT * FROM produto;";
    $query = $conection->prepare($sql);
    $query->execute();
    $resultado = $query->fetchAll(PDO::FETCH_OBJ);

    foreach($resultado as $row){
    ?>
    <tr>
      <th scope="row"><?php echo $row->id ?></th>
      <td><?php echo $row->nome?></td>
      
    </tr>

<?php } ?>
    


  </tbody>
</table>


        </div>
    
    </div>
    <hr>
</div>

</div>
                        
                    </div>
                    </div>

                    <!--  -->




                    <!-- Donut Chart -->
    <div class="collapse" id="collapseTransportador">
        <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->     
                <div >
                    <div class="card card-body">
                    <div class="card-header py-3   d-sm-flex align-items-center justify-content-between">
                        <h6>Transportador</h6>
                
                <div>
                <button type="button" class="btnMobile  btn btn-primary btn-sm" data-toggle="modal" data-target="#modalTransportador">
                 Novo Cadastro
                </button>
                </div>
                
              
             <div class="modal fade" id="modalTransportador" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Novo Transportador</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form action="code.php" method="POST">
                        <div class="modal-body">
                        <div class="form-row">
                            
                                <div class="col-md-12 mb-3">
                                <label for="razaoSocial">Razão social</label>
                                <input type="text" class="form-control" name="razaoSocial" id="razaoSocial" placeholder="Informe a placa do veiculo"  required>
                            
                                </div>
                                <div class="col-md-12 mb-3">
                                <label for="cnpj">CNPJ</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" name="cnpj" id="cnpj" placeholder="Informe a transportadora" aria-describedby="validationTooltipUsernamePrepend" required>
                                </div>
                                </div>
                            </div>


                        </div>
                        
                        <div class="modal-footer">
                            <input type="submit" id="btnSalvar_novaTransp"  name="btnSalvar_novaTransp" class="btn btn-primary" value="Salvar">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>

                        </div>
                        </form>
                        </div>
                    </div>
                    </div>
        
    </div>

    

    <!-- Card Body -->
    <div class="card-body">
    

        <div class="container">
<table class="table table-sm table-hover">
    
<thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Razão social</th>
      <th scope="col">CNPJ</th>
    </tr>
  </thead>
  <tbody>
    <?php 
    $sql = "SELECT * FROM transportador;";
    $query = $conection->prepare($sql);
    $query->execute();
    $resultado = $query->fetchAll(PDO::FETCH_OBJ);

    foreach($resultado as $row){
    ?>
    <tr>
      <th scope="row"><?php echo $row->id ?></th>
      <td><?php echo $row->razao_social?></td>
      <td><?php echo $row->cnpj?></td>
      
    </tr>

<?php } ?>
    


  </tbody>

    
</table>


        </div>
    
    </div>
    <hr>
</div>

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
include('includes/footer.php');
?>


<script>
$(document).ready(function() {
  $('.btn[data-toggle="collapse"]').click(function() {
    var target = $(this).data('target');
    $('.collapse.show').not(target).collapse('hide');
  });
});



hideLoader();

</script>




    

