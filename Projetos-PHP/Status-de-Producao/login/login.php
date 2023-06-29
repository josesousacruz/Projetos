<?php
// ATIVAR DEBUG;
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require_once('../includes/config.php');

if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    
    $username = $_POST["username"];
    $senha = $_POST["senha"];

    try {
        $stmt = $conection->prepare("SELECT * FROM usuarios WHERE username = :username;");
        $stmt->execute(['username' => $username]);
        $usuario = $stmt->fetch(PDO::FETCH_ASSOC);


    if($usuario && password_verify($senha, $usuario['senha']))
    {
        function generateRandomToken($length = 10) {
            $characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            $token = '';
            
            for ($i = 0; $i < $length; $i++) {
              $randomIndex = rand(0, strlen($characters) - 1);
              $token .= $characters[$randomIndex];
            }
            
            return $token;
          }


        $token = generateRandomToken(26);
        $expiry = time() + 3600 * 12;

        $stmt = $conection->prepare("UPDATE usuarios SET token = :token, token_validade = :expiry WHERE id = :id");
        $stmt->execute(['token' => $token, 'expiry' => $expiry, 'id' => $usuario['id']]);


        setcookie("token", $token, $expiry, "/");
        header("Location: ../index.php");
        exit();
    }else{
        header("Location: login.php");
    }

       
      
      } catch(PDOException $e) {
        echo "Erro de conexão: " . $e->getMessage();
      }


    
}

?>
<!DOCTYPE html>


<html lang="pt-br">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Login</title>
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="../css/sb-admin-2.min.css" rel="stylesheet">



</head>



<body class="bg-gradient-success">

    <div class="container">

        <!-- Outer Row -->
        <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block">
                                <img width="490vh" height="470vh" class="justify-content-center"
                                    src="../includes/imagens/fertilizantes.jpg">
                            </div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Bem vindo!</h1>
                                    </div>
                                    <form method="POST" action="" id="appToForm" class="user">
                                        <div class="form-group">
                                            <input type="text" name="username" class="form-control form-control-user"
                                                id="InputEmail" aria-describedby="emailHelp" placeholder="Enter">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" name="senha" class="form-control form-control-user"
                                                id="InputPassword" placeholder="Password">
                                        </div>
                                        <div class="form-group">
                                            <div class="custom-control custom-checkbox small">
                                                <input type="checkbox" class="custom-control-input" id="customCheck">
                                                <label class="custom-control-label" for="customCheck">Remember
                                                    Me</label>
                                            </div>
                                        </div>
                                        <input class="btn btn-primary btn-user btn-block" type="submit" value="Entrar">
                                        <hr>

                                    </form>
                                    <hr>
                                    <div class="text-center">
                                        <!-- <a class="small" href="">Esqueceu a senha?</a> -->
                                        <br>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>

</body>

</html>