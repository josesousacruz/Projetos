
<nav class="navbar navbar-expand navbar-light bg-success bg-gradient topbar mb-4 shadow">

<!-- Sidebar Toggle (Topbar) -->
 <div id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3 btnMobileMenu">
    <i class="fa-solid fa-bars" style="color: #fafafa;"></i>
</div> 

<div class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-2 mw-100 navbar-search"></div>

    <!-- Nav Item - User Information -->
      <div class="nav-item dropdown no-arrow">
          
        <a class="nav-link dropdown-toggle"  id="userDropdown" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="mr-3 d-none d-lg-inline text-white small"><?php echo $user['email'] ?></span>
            <img class="img-profile rounded-circle" src="data:image/jpeg;base64,<?php echo base64_encode($user['imagem']); ?>">
         </a> 

        <!-- Dropdown - User Information -->
        <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown">
            <a class="dropdown-item" href="./perfil.php">
                <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Perfil
            </a>
            <?php 
            
            if($user['nivel_acesso'] >= 3 ){
                echo '<a class="dropdown-item" href="./login/cadastro.php">
                <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Cadastro de usuario
            </a>' ;

            };
            
            ?>
            
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="././login/logout.php">
                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Encerrar
            </a>
        </div>
        <?php
            include('includes/modal.php');
            include('includes/modalChart.php')
            ?>
      </div>



</nav>