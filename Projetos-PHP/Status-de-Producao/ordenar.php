<?php
date_default_timezone_set('America/Bahia');
include('includes/config.php');
include('includes/header.php');

$usuario = $user['username'];
$idCarregamento = $_POST['idCarregamento'];


$id = $_POST["id"];
$arr_item = explode(",", $id);
$ordem = 1;

foreach ($arr_item as $arr_item) {
    $sql = "UPDATE carregamentos SET idOrdem = :ordem WHERE id = :arr_item";
    $stmt = $conection->prepare($sql);
    $stmt->bindParam(':ordem', $ordem);
    $stmt->bindParam(':arr_item', $arr_item);
    $stmt->execute();
    $ordem++;
}


$query = 'INSERT INTO eventos (evento,data_evento,id_carregamento,usuario) 
VALUES (:evento, :data_evento,:id_carregamento,:usuario)';

$stmt = $conection->prepare($query);
$stmt->bindValue(':evento','Ajustou ordem');
$stmt->bindValue(':data_evento',date('Y-m-d H:i:s'));
$stmt->bindParam(':id_carregamento',$idCarregamento);
$stmt->bindParam(':usuario',$usuario);
$stmt->execute();


?>