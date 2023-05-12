<?php 
include('../includes/config.php');

$dataInicial = $_POST['data_inicio'];
$dataFinal = $_POST['data_final'];

$arrayTabela = [];

$sql3 = "SELECT 
    SUM(CASE WHEN status_carregamento = 'Carregado' THEN quantidade END) AS totalCarregado,
    SUM(CASE WHEN status_carregamento = 'Carregado' AND especie = 'BigBag' THEN quantidade END) AS carregadoEmBigbag,
    SUM(CASE WHEN status_carregamento = 'Carregado' AND especie = 'Granel' THEN quantidade END) AS carregadoEmGranel,
    COUNT(CASE WHEN status_carregamento = 'Carregado' THEN id END) AS totalVeiculosCarregados
    FROM processos WHERE data_fim BETWEEN :dataInicial AND :dataFinal";

$statement = $conection->prepare($sql3);
$statement->bindParam(':dataInicial', $dataInicial);
$statement->bindParam(':dataFinal', $dataFinal);
$statement->execute();

while($results3 = $statement->fetch(PDO::FETCH_OBJ)){
    array_push($arrayTabela,$results3);
}

echo json_encode($arrayTabela);

?>
