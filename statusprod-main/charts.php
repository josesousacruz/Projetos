<?php 
session_start();
include('includes/header.php');
include('includes/navbar.php');
include('includes/config.php');


?>




        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                <nav class="navbar navbar-expand navbar-light bg-gradient-primary topbar mb-4 static-top shadow">

                    <!-- Sidebar Toggle (Topbar) -->
                    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                        <i class="fa fa-bars"></i>
                    </button>

                    <!-- Topbar Search -->
                    <form
                        class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                                aria-label="Search" aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button">
                                    <i class="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                    <!-- Topbar Navbar -->

                </nav>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <!-- Page Heading -->
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>

                </div>

                <!-- /.container-fluid -->
                <div class="card shadow mb-4" >
                        <div class="card-body">
                        
<!-- Begin Page Content -->
<div class="container-fluid">

<!-- Page Heading -->
<h1 class="h3 mb-2 text-gray-800">Graficos de produção</h1>
<p class="mb-4"></p>

<!-- Content Row -->
<div class="row">

    <div class="col-xl-8 col-lg-7">

        <!-- Area Chart -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Grafico</h6>
            </div>
            <div class="card-body">
                <div class="chart-area">

                     <canvas id="myAreaChart"></canvas>

                </div>
                <hr>
            </div>
        </div>

        <!-- Bar Chart -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Grafico</h6>
            </div>
            <div class="card-body">
                <div class="chart-bar">

                    <canvas id="myChart"></canvas>

                </div>
                <hr>
            </div>
        </div>

    </div>

    <!-- Donut Chart -->
    <div class="col-xl-4 col-lg-5">
        <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Grafico</h6>
            </div>
            <!-- Card Body -->
            <div class="card-body">
                <div class="chart-pie pt-4">

                    <canvas id="myPieChart"></canvas>

                </div>
                <hr>
            </div>
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

include('includes/script.php');
include('includes/modal.php');
include('includes/footer.php');


?>



