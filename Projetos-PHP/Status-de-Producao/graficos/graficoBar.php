<?php 
 include('../includes/config.php');
 session_start();

$dataInicial =  $_POST['data_inicio'];
$dataFinal = $_POST['data_final'].' 23:59:00';

$arrayBar = [];

$sqlI = "SELECT id, DATE_FORMAT(data_fim,'%d/%m/%Y') AS data_fim, especie, status_carregamento, SUM(quantidade) AS produzidoDia
         FROM carregamentos
         WHERE data_fim BETWEEN :dataInicial AND :dataFinal
         AND status_carregamento in ('Liberado','Carregado','Ajuste de peso','Aguardando NF')
         GROUP BY DATE(data_fim)";

$stmtI = $conection->prepare($sqlI);
$stmtI->execute(array(':dataInicial' => $dataInicial, ':dataFinal' => $dataFinal));

while ($results = $stmtI->fetch(PDO::FETCH_OBJ)) {
    array_push($arrayBar, $results);
};

echo json_encode($arrayBar);


?>