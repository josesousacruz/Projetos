<?php 
 include('../includes/config.php');

 $dataInicial = $_POST['data_inicio'];
 $dataFinal = $_POST['data_final'];
 
 $naoExecut = [];
 
 $sqlI = "SELECT SUM(CASE WHEN status_carregamento <> 'Liberado' THEN quantidade END) AS metaProgramadaNaoExecutada FROM carregamentos";
 
 $executeI = $conection->query($sqlI);
 $naoExecut = $executeI->fetchAll(PDO::FETCH_OBJ);
 
 echo json_encode($naoExecut);
 

?>