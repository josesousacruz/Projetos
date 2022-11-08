<?php 
$host="us-cdbr-east-06.cleardb.net";
$user="b7ec0b61a1182a";
$password="c16df8dd";
$dbname="heroku_eb23841869b8888";

// $host="localhost";
// $user="root";
// $password="";
// $dbname="status_carregamento";

try{
$conexao = new PDO("mysql:host=$host;dbname=$dbname",$user,$password);
$conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(PDOException $erro){
    echo "Ocorreu um erro de conexão: {$erro->getMessage()}";
    $conexao = null;
}


?>