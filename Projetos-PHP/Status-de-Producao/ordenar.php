<?php

include('includes/config.php');


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


?>