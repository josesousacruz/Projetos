<?php 
include('../includes/config.php');


$dataInicial = $_POST['data_inicio'];
$dataFinal = $_POST['data_final'];

$arrayPie = [];

$sql2 = "SELECT id, especie, status_carregamento, SUM(quantidade) AS produzidoTotal 
         FROM carregamentos WHERE data_fim BETWEEN :dataInicial AND :dataFinal 
         AND status_carregamento in ('Liberado','Carregado','Ajuste de peso','Aguardando NF')";

$stmt = $conection->prepare($sql2);
$stmt->bindParam(':dataInicial', $dataInicial);
$stmt->bindParam(':dataFinal', $dataFinal);
$stmt->execute();

while ($results2 = $stmt->fetch(PDO::FETCH_OBJ)) {
    array_push($arrayPie, $results2);
}

echo json_encode($arrayPie);

?>
