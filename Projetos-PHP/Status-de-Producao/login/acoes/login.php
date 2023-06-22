<?php 
include("conexao.php");

require_once '/xampp/htdocs/Projetos/Projetos-PHP/Status-de-Producao/login/jwt/BeforeValidException.php';
require_once '/xampp/htdocs/Projetos/Projetos-PHP/Status-de-Producao/login/jwt/ExpiredException.php';
require_once '/xampp/htdocs/Projetos/Projetos-PHP/Status-de-Producao/login/jwt/SignatureInvalidException.php';
require_once '/xampp/htdocs/Projetos/Projetos-PHP/Status-de-Producao/login/jwt/JWT.php';

use \Firebase\JWT\JWT;



if(ISSET($_POST) && $conexao != null){

$email = $_POST['email'];
$senha = $_POST['senha'];

$stmt = $conexao->prepare("SELECT * FROM usuarios WHERE email = :email ");
$stmt->bindParam(':email', $email);
$stmt->execute();
$user = $stmt->fetch(PDO::FETCH_ASSOC);


    if (password_verify($senha,$user['senha'])) {
        //gerar o codigo jwt e redirecionar para pagina do usuario

        $key ='minhachave';

        $payload = array(
            'sub' => $user['id'],
            'email' => $email['email'],
            'usuario' => $usuario['usuario'],
            'iat' => time(),
            'exp' => time() + (60*60) //token experia em 1h

        );

        $jwt = JWT::encode($payload,$key,'');


        // setcookie('token',$token,time() + (60*60),'/');

    } else {
    
    }
     

    
}



    


?>