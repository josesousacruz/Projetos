<!-- Sidebar -->
<ul class="navbar-nav bg-success bg-gradient sidebar sidebar-dark accordion toggled" id="accordionSidebar">

    <!-- Sidebar - Brand -->

    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="">
        <img width="100px" height="40px" class="mb-2" src="includes/imagens/logo1.png">
    </a>

    <hr class="sidebar-divider">

    <div class="sidebar-heading">
        Operação
    </div>
    <!-- Divider -->
    <hr class="sidebar-divider my-0">

    <!-- Nav Item - Produção -->
    <li class="nav-item">
        <a class="nav-link" href="index.php">
            <i class="fas fa-fw fa-table"></i>
            <span>Status</span></a>
    </li>

    <?php
    if ($user['nivel_acesso'] >= 2) {
        echo '<li class="nav-item">
            <a class="nav-link" href="ocorrencias.php">
            <i class="fa-solid fa-book"></i>
            <span>Ocorrencias</span></a>
            </li>';
    }
    ;

    ?>





    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <div class="sidebar-heading">
        Relatorios
    </div>
    <!-- Nav Item - Charts -->
    <li class="nav-item">
        <a class="nav-link" href="" data-toggle="modal" data-target="#modalChart">
            <!-- fas fa-fw fa-chart-area -->
            <i class="fa-solid fa-chart-pie"></i>
            <span>Dashboard Mensal</span></a>
    </li>

    <li class="nav-item ">
        <a class="nav-link" href="filtrosRelatorios.php">
            <i class="fas fa-filter"></i>
            <span>Finalizados</span></a>
    </li>



    <!-- Nav Item - Utilities Collapse Menu -->

    <!-- Divider -->
    <hr class="sidebar-divider">

    <div class="sidebar-heading">
        Cadastros
    </div>
    <!-- Nav Item - Pages Collapse Menu -->
    <?php
    if ($user['nivel_acesso'] >= 2) {
        echo '<li class="nav-item">
                <a  class="nav-link collapsed" href="gerenciador.php">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Gerenciamento</span>
                </a>
                    </li>';
    }
    ;

    ?>

    <!-- Nav Item - Pages Collapse Menu -->
    <!-- <i class="fas fa-align-justify"></i> -->
    <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true"
            aria-controls="collapsePages">
            <i class="fa fa-list-ul"></i>
            <span>Opções</span>
        </a>

        <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Opções</h6>
                <!-- <a class="collapse-item" href="">Chat</a> -->
                <!-- <a class="collapse-item" href="">Relatorio</a> -->
                <?php
                if ($user['nivel_acesso'] >= 3) {
                    echo '<a class="collapse-item" href="arquivos.php">Arquivos</a>';
                } else {
                    echo 'Nivel de acesso insuficiente';
                }
                ?>
            </div>
        </div>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block">

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>

</ul>
<!-- End of Sidebar -->

<!-- Scroll to Top Button-->
<a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
</a>