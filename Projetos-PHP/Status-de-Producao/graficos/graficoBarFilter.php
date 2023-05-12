<?php 
 include('../includes/config.php');
 session_start();

 $dataInicial =  $_POST['data_inicio'];
$dataFinal =  $_POST['data_final'];

$arrayBar = [];

$sqlI = "SELECT * ,SUM(quantidade) AS produzidoDia
FROM processos WHERE data_fim 
BETWEEN :dataInicial AND :dataFinal
AND status_carregamento = 'Carregado'
GROUP BY data_fim ORDER BY data_fim ASC";

$stmt = $conection->prepare($sqlI);
$stmt->bindParam(':dataInicial', $dataInicial);
$stmt->bindParam(':dataFinal', $dataFinal);
$stmt->execute();

while ($results = $stmt->fetchObject()) {
    array_push($arrayBar, $results);
}

echo json_encode($arrayBar);



?>