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
                        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1> 

                        <!-- <div id="teste"></div> -->

                        <?php
                        
                        
                        
                        ?>


                         <!-- <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>  -->
                    </div>

                </div>

                <!-- /.container-fluid -->
                <div class="card shadow mb-4" >
                        <div class="card-body">
                        
<!-- Begin Page Content -->
<div class="container-fluid">


<p>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Filtrar e gerar dados
  </button>
</p>
<div class="collapse" id="collapseExample">
<form class="needs-validation"  action="gerarExcel.php" method="POST" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationCustom01">Data inicial</label>
      <input type="date" name="data_inicio" id="data_inicio" class="form-control" require/>
      <!-- <div class="valid-feedback">
        Tudo certo!
      </div> -->
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Data final</label>
      <input type="date" name="data_final" id="data_final" class="form-control" require/>
      <!-- <div class="valid-feedback">
        Tudo certo!
      </div> -->
    </div>      

    <!-- <div class="col-md-4 mb-3">
      <label for="validationCustomUsername">Produto</label>
      <div class="input-group">
        <div class="input-group-prepend">

        </div>
        <input type="text" class="form-control" id="validationCustomUsername" placeholder="Produto" aria-describedby="inputGroupPrepend" required>

      </div>

    </div> -->

  </div>
  
  <!-- <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationCustom03">Especie</label>
      <input type="text" class="form-control" id="validationCustom03" placeholder="Especie" required>
    </div>

  </div> -->

  <!-- <button class="btn btn-primary" type="submit">Enviar</button> -->
    <input type="button" name="search" id="search" value="Gerar Graficos"  class="btn btn-primary"  />
    <input type="submit" name="search" id="search" value="Gerar Excel" class="btn btn-primary">
        
</form>



<!-- Content Row -->
<div class="card border shadow mb-4 align-items-center " id="order_data">

    <div class="col-xl-9 col-lg-2">

        <!-- Bar Chart -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Produzido x Programado</h6>
            </div>
            <div class="card-body">
                <div class="chart-area">

                     <canvas id="myBarChart"></canvas>

                </div>
                <hr>
            </div>
        </div>

        <!-- Pie Chart -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Indice alcançado da </h6>
            </div>
            <div class="card-body">
                <div class="chart-bar">

                    <canvas id="myPieChart"></canvas>

                </div>
                <hr>
            </div>
        </div>

        

    </div>

                        
                        </div>



</div>

                        
                    </div>
                    <!-- /END.container-fluid -->

                </div>
                

            </div>
            <!-- End of Main Content -->


            </div>
            <!-- End of Main Content -->


           




            
<?php 
include('includes/modal.php');
include('includes/footer.php');
?>


<script src="js/filtros.js" defer></script>
