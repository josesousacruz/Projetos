
<nav class="navbar navbar-expand navbar-light bg-gradient-info topbar mb-4 shadow">

<!-- Sidebar Toggle (Topbar) -->
 <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3 btnMobileMenu">
    <i class="fa fa-bars"></i>
</button> 

<!-- Topbar Search -->
<div
    class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-2 mw-100 navbar-search">
    <div class="input-group">
        <input type="text" class="form-control bg-light border-0 small" placeholder="Pesquisar processo..."
            aria-label="Search" aria-describedby="basic-addon2">

    </div>
</div>

    
    <!-- Nav Item - User Information -->
      <div class="nav-item dropdown no-arrow">
          
        <a class="nav-link dropdown-toggle"  id="userDropdown" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="mr-3 d-none d-lg-inline text-white small"><?php echo $_SESSION["usuario"][0] ?></span>
            <img class="img-profile rounded-circle" src="includes/imagens/OIP.jpeg"> 
         </a> 
        
        <!-- Dropdown - User Information -->
        <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown">
            <a class="dropdown-item" href="">
                <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Perfil
            </a>
            <a class="dropdown-item" href="#">
                <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Configuração
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="login/acoes/logout.php">
                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Encerrar
            </a>
        </div>
      </div>



</nav>