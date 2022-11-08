<?php 
include('../includes/config.php');


$dataInicial =  $_POST['data_inicio'];
$dataFinal =  $_POST['data_final'];

$arrayPie = [];


$sql2 = "SELECT id,especie,status_carregamento,SUM(quantidade) AS produzidoTotal 
FROM processos WHERE data_fim BETWEEN '$dataInicial' AND '$dataFinal' AND status_carregamento = 'Carregado';";

$execute2 = $conection->query($sql2) or die (mysqli_error($conection));

while($results2 = mysqli_fetch_object($execute2)){
    array_push($arrayPie,$results2);
    
};

echo json_encode($arrayPie);

?>
