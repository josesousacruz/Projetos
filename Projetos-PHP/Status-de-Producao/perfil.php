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
                <h1 class="h3 mb-0 text-gray-800">Perfil</h1>

                <!-- <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>  -->
            </div>

        </div>

        <!-- /.container-fluid -->

        <div class="container-xl px-4 mt-4">
            <!-- Account page navigation-->
            <hr class="mt-0 mb-4">
            <div class="row">
                <div class="col-xl-4">
                    <!-- Profile picture card-->
                    <div class="card mb-4 mb-xl-0">
                        <div class="card-header">Imagem de perfil</div>
                        <div class="card-body text-center">
                            <!-- Profile picture image-->
                            <div class="imagem-perfil">
                                <img width="250px" height="250px" class="img-account-profile rounded-circle mb-2" src="data:image/jpeg;base64,<?php echo base64_encode($user['imagem']); ?>">
                            </div>
                            <!-- Profile picture help block-->
                            <div class="small font-italic text-muted mb-4">Selecione uma imagem jpeg ou png</div>
                            <!-- Profile picture upload button-->
                            <form action="code.php" method="POST" enctype="multipart/form-data">
                                <input type="hidden" name="idUser" value="<?php echo $user['id'] ?>">
                                <input type="file" class="form-control" name="perfil_imagem" id="perfil_imagem">
                                <button type="submit" class="btn btn-primary" type="button">Salvar imagem</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-xl-8">
                    <!-- Account details card-->
                    <div class="card mb-4">
                        <div class="card-header">Detalhes da conta</div>
                        <div class="card-body">
                            <form action="code.php" method="POST">
                                <input type="hidden" name="perfil_id" value="<?php echo $user['id'] ?>">

                                <!-- Form Row-->
                                <div class="row gx-3 mb-3">
                                    <!-- Form Group (first name)-->
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputUsername">Username</label>
                                        <input class="form-control" name="inputUsername" id="inputUsername" type="text" placeholder="Digite seu username" value="<?php echo $user['username'] ?>">
                                    </div>
                                    <!-- Form Group (last name)-->
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputSenha">Senha</label>
                                        <input class="form-control" name="inputSenha" id="inputSenha" type="password" placeholder="Digite sua nova senha" value="" required>
                                    </div>
                                </div>

                                <div class="row gx-3 mb-3">
                                    <!-- Form Group (first name)-->
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputFirstName">Nome</label>
                                        <input class="form-control" name="inputFirstName" id="inputFirstName" type="text" placeholder="Digite seu nome" value="<?php echo $user['nome'] ?>">
                                    </div>
                                    <!-- Form Group (last name)-->
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputLastName">Sobre Nome</label>
                                        <input class="form-control" name="inputLastName" id="inputLastName" type="text" placeholder="Digite seu sobre nome" value="<?php echo $user['sobre_nome'] ?>">
                                    </div>
                                </div>
                                <!-- Form Row        -->
                                <div class="row gx-3 mb-3">
                                    <!-- Form Group (organization name)-->
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputEmpresa">Empresa/Unidade</label>
                                        <input class="form-control" name="inputEmpresa" id="inputEmpresa" type="text" placeholder="Digite o nome da empresa ou unidade" value="<?php echo $user['empresa'] ?>">
                                    </div>

                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputPhone">Numero de telefone</label>
                                        <input class="form-control" name="inputPhone" id="inputPhone" type="tel" placeholder="Digite seu telefone" value="<?php echo $user['telefone'] ?>">
                                    </div>
                                </div>
                                <!-- Form Group (email address)-->
                                <div class="mb-3">
                                    <label class="small mb-1" for="inputEmail">Email</label>
                                    <input class="form-control" name="inputEmail" id="inputEmail" type="email" placeholder="Digite seu email" value="<?php echo $user['email'] ?>">
                                </div>

                                <!-- Save changes button-->
                                <button type="submit" class="btn btn-primary" name="btnUpdatePerfil" type="button">Salvar mudanças</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>






    </div>
    <!-- End of Main Content -->

    <?php
    // include('includes/modal.php');
    include('includes/footer.php');
    ?>

    <script>


    </script>