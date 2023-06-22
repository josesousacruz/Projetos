<?php 
$host="localhost";
$user="root";
$password="";
$dbname="status_carregamento";

try{
$conexao = new PDO("mysql:host=$host;dbname=$dbname",$user,$password);
$conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(PDOException $erro){
    echo "Ocorreu um erro de conexão: {$erro->getMessage()}";
    $conexao = null;
}


?>