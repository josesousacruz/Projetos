<?php
require_once('../includes/config.php');

session_start();
if (!isset($_COOKIE["token"])) {
  header("Location: login/login.php");
  exit();
}

$token = $_COOKIE["token"];

$stmt = $conection->prepare("SELECT * FROM usuarios WHERE token = :token AND token_validade > :expiry");
$stmt->execute(['token' => $token, 'expiry' => time()]);

$user = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$user) {
  header("Location: login/login.php");
  exit();
}

// Verifica o nível de acesso do usuário
if ($user['nivel_acesso'] < 3) {
  echo "Você não tem permissão para acessar esta página.";
  exit();
}

if($_SERVER['REQUEST_METHOD'] === 'POST'){

    $username = $_POST['inputUsername'];
    $nome = $_POST['inputFirstName'];
    $sobreNome = $_POST['inputLastName'];
    $email = $_POST['inputEmail'];
    $senha = $_POST['inputSenha'];
    $empresa = $_POST['inputEmpresa'];
    $telefone = $_POST['inputPhone'];
    $nivelDeAcesso = $_POST['selectNivel'];
    
    $hashedPassword = password_hash($senha, PASSWORD_DEFAULT);

    
    $query = "INSERT INTO usuarios (username, nome, sobre_nome, email, senha, empresa, telefone, nivel_acesso)
    VALUES (:username, :nome, :sobrenome, :email,:senha, :empresa, :telefone, :nivel_acesso)";
    
    $stmt = $conection->prepare($query);
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':sobrenome', $sobrenome);
    $stmt->bindParam(':email',$email);
    $stmt->bindParam(':senha',$hashedPassword);
    $stmt->bindParam(':empresa', $empresa);
    $stmt->bindParam(':telefone', $telefone);
    $stmt->bindParam(':nivel_acesso',$nivelDeAcesso);
    $stmt->execute();

    if($stmt){
        header('Location: ../index.php');
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Cadastro</title>

    
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="../css/sb-admin-2.min.css" rel="stylesheet">
</head>
<body>

        <!-- Begin Page Content -->
        <div class="container-fluid">

            <!-- Page Heading -->
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Cadastrar novo usuario</h1>
            </div>

        </div>

        <!-- /.container-fluid -->
                <div class="col-xl-8">
                    <!-- Account details card-->
                    <div class="card mb-4">
                        <div class="card-header">Detalhes da conta</div>
                        <div class="card-body">
                            <form action="" method="POST">
                                <!-- Form Row-->
                                <div class="row gx-3 mb-3">
                                    <!-- Form Group (first name)-->
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputUsername">Username</label>
                                        <input class="form-control" name="inputUsername" id="inputUsername" type="text" placeholder="Digite seu username" value="">
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
                                        <input class="form-control" name="inputFirstName" id="inputFirstName" type="text" placeholder="Digite seu nome" value="">
                                    </div>
                                    <!-- Form Group (last name)-->
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputLastName">Sobre Nome</label>
                                        <input class="form-control" name="inputLastName" id="inputLastName" type="text" placeholder="Digite seu sobre nome" value="">
                                    </div>
                                </div>
                                <!-- Form Row        -->
                                <div class="row gx-3 mb-3">
                                    <!-- Form Group (organization name)-->
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputEmpresa">Empresa/Unidade</label>
                                        <input class="form-control" name="inputEmpresa" id="inputEmpresa" type="text" placeholder="Digite o nome da empresa ou unidade" value="">
                                    </div>

                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputPhone">Numero de telefone</label>
                                        <input class="form-control" name="inputPhone" id="inputPhone" type="tel" placeholder="Digite seu telefone" value="">
                                    </div>
                                </div>
                                <!-- Form Group (email address)-->
                                <div class="mb-3">
                                    <label class="small mb-1" for="inputEmail">Email</label>
                                    <input class="form-control" name="inputEmail" id="inputEmail" type="email" placeholder="Digite seu email" value="">
                                </div>
                                <div class="mb-3">
                                    <label class="small mb-1" for="inputEmail">Nivel de acesso</label>
                                    <select class="form-control" name="selectNivel" id="selectNivel" required>
                                        <option value=""></option>
                                        <option value="1">Cliente</option>
                                        <option value="2">Colaborador</option>
                                        <option value="3">Administrador</option>
                                    </select>
                                    <!-- <input class="form-control" name="inputNivel" id="inputNivel" type="text" placeholder="Nivel do usuario" value=""> -->
                                </div>

                                <!-- Save changes button-->
                                <button type="submit" class="btn btn-primary" name="btnUpdatePerfil" type="button">Salvar mudanças</button>
                                <a href="../index.php" class="btn btn-danger">Voltar</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>






    </div>
    <!-- End of Main Content -->

</body>
</html>
