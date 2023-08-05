<?php

$host="192.168.10.53";
$user="root";
$password="cablev35";
$dbname="sefi";

// $host="localhost";
// $user="root";
// $password="";
// $dbname="sefi";


try {
  $conection = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);
  $conection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch(PDOException $e) {
  echo "Erro de conexão: " . $e->getMessage();
}

?>
