<?php 
session_start();
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
                        <h1 class="h3 mb-0 text-gray-800">Grafico Mensal</h1> 

                    

                        <?php
                        
                        
                        
                        ?>


                         <!-- <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>  -->
                    </div>

                </div>

                <!-- /.container-fluid -->
                <div class="card shadow mb-4 " >
                        <div class="card-body ">
                        
<!-- Begin Page Content -->
<div class="container-fluid ">

<!-- Page Heading -->
<!-- <h1 class="h3 mb-2 text-gray-800">Graficos de produção</h1>
<p class="mb-4"></p> -->


<!-- Content Row -->
<div class="row">

    <div class="col-xl-7 col-lg-9">

        <!-- Bar Chart -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Produzido x Programado</h6>
            </div>
            <div class="card-body">
                <div class="chart-area">

                     <canvas class="card shadow mb-6" height="166vh" id="myBarChart"></canvas>

                </div>
                <hr>
            </div>
        </div>

        </div>

        <!-- Pie Chart -->
        <div class="col-xl-5 col-lg-12">
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Indice alcançado da meta mensal</h6>
            </div>
            <div class="card-body">
                <!-- <div class="chart-bar"> -->
                <!-- width="330vh" height="330vh"  -->
                    <canvas class="card shadow mb-8" height="246vh" id="myPieChart"></canvas>

                <!-- </div> -->
                <hr>
            </div>
        </div>
        </div>
    
    
    <!-- Donut Chart -->
    <div class="col-xl-12 col-lg-9">
        <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3   d-sm-flex align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-primary">Status mensal</h6>
                <?php

                    // if($_SESSION["usuario"][1] == 1){

                        
                        echo '<div><button type="button" class="btnMobile  btn btn-primary btn-sm" data-toggle="modal" data-target="#modalExemplo">
                        Alterar Meta mensal
                      </button></div>';
                        
                      
                    echo ' <div class="modal fade" id="modalExemplo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Meta mensal</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <form action="code.php" method="POST">
                                <div class="modal-body">

                                <input class="form-control" name="metaMensal" id="metaMensal"  type="number">


                                </div>
                                
                                <div class="modal-footer">
                                    <input type="submit" id="btnSalvar_metaMental"  name="btnSalvar_metaMental" class="btn btn-primary" value="Salvar">
                                    <button type="submit" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
        
                                </div>
                                </form>
                                </div>
                            </div>
                            </div>';




                    // }elseif($_SESSION["usuario"][1] == 0){
                        
                    //   }
                // echo '<input type="text">'
                
                ?>
                
            </div>

            

            <!-- Card Body -->
            <div class="card-body">
            

                <div class="container">
       <table class="table table-sm table-hover">
            
                <tr>    
                    <td>Meta mensal para expedição</td>
                    <td id="totalMeta"></td>
                </tr>

                <tr>
                    <td>Saldo a ser expedido</td>
                    <td id="saldoPendente"></td>
                </tr>


                <tr>
                    <td>Meta programada não executada</td>
                    <td id="metaProgramadaNaoExecutada"></td>
                </tr>

                <tr>
                    <td>Total de meta executada em big bag</td>
                    <td id="carregadoEmBigbag"></td>
                </tr>
                
                <tr>
                    <td>Total de meta executada em granel</td>
                    <td id="carregadoEmGranel"></td>
                </tr>



                <tr>
                    <td>Meta diaria</td>
                    <td id="MetaDiaria"></td>
                </tr>

                <tr>
                    <td>Total de veiculos já carregados</td>
                    <td id="totalVeiculosCarregados"></td>
                </tr>

                <tr>
                    <td>Necessidade de veiculos diaria p/ objetivo</td>
                    <td id="necessidadeVeicuPdiaPobjetivo"></td>
                </tr>
          
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


include('includes/modal.php');
include('includes/footer.php');


?>


<script src="js/graficos.js"></script>




    

