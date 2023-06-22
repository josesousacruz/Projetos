
 <!-- Modal -->
 <div id="content-wrapper" class="d-flex flex-column">
 <div class="modal fade bd-example-modal-xl" id="modalChart" tabindex="-1" role="dialog" aria-labelledby="modalChart" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="text-center" id="modalChart">DASHBOARDS MENSAL</h5>
        <button onclick="closeModalAttMeta()" type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Fechar">
          Fechar
        </button>
      </div>
      <div class="modal-body">


      <div class="card shadow mb-4 " >
                        <div class="card-body ">
                        
<!-- Begin Page Content -->
<div class="container-fluid ">



<!-- Content Row -->
<div class="row">

        <!-- Bar Chart -->
        <div class="col-xl0 col-lg-12">
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Produzido x Programado</h6>
            </div>
            <div class="card-body">
                <div class="chart-area row d-flex justify-content-center">

                     <canvas class="card shadow"id="myBarChart"></canvas>

                </div>
                <hr>
            </div>
        </div>
        </div>

        <!-- </div> -->

        <!-- Pie Chart -->
        <div class="col-xl-4 col-lg-8">
        <div class="card shadow mb-3">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Indice alcançado da meta mensal</h6>
            </div>
            <div class="card-body ">
                
                    <canvas class="card shadow" id="myPieChart"></canvas>

                <hr>
            </div>
        </div>
        </div>
    
    
    <!-- Donut Chart -->
    <div class="col-xl-8 col-lg-12">
        <div class="card shadow mb-4" >
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-sm-flex align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-primary">Status mensal</h6>
                <?php
                
                    if($user['nivel_acesso'] >= 3 ){
                        
                        echo '<div><button type="button" class="btnMobile  btn btn-primary btn-sm" data-toggle="modal" data-target="#modalExemplo">
                        Alterar Meta mensal
                      </button></div>';

                      
                    echo ' <div class="modal fade" id="modalExemplo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Meta mensal</h5>
                            <button type="button" class="btn close" data-dismiss="modal" aria-label="Fechar">
                            Fechar
                            </button>
                        </div>
                        <form action="code.php" method="POST">
                        <div class="modal-body">

                        <input class="form-control" name="metaMensal" id="metaMensal"  type="number">


                        </div>
                        
                        <div class="modal-footer">
                            <input type="submit" id="btnSalvar_metaMental"  name="btnSalvar_metaMental" class="btn btn-primary" value="Salvar">
                        </div>

                        </form>
                        </div>
                    </div>
                    </div>';

                    }
        
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
