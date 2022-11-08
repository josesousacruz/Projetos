<?php 
 include('../includes/config.php');
 session_start();

 $dataInicial =  $_POST['data_inicio'];
 $dataFinal =  $_POST['data_final'];
 

$arrayBar = [];

$sqlI = "SELECT id,data_fim,especie,status_carregamento,SUM(quantidade) AS produzidoDia
FROM processos WHERE data_fim 
BETWEEN '$dataInicial' AND '$dataFinal'
AND status_carregamento = 'Carregado'
GROUP BY data_fim";


$executeI = $conection->query($sqlI) or die (mysqli_error($conection));
   

while($results = mysqli_fetch_object($executeI)){
    array_push($arrayBar,$results);
    
};

echo json_encode($arrayBar);

?>