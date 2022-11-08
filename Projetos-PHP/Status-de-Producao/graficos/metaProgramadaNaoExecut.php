<?php 
 include('../includes/config.php');

 $dataInicial =  $_POST['data_inicio'];
 $dataFinal =  $_POST['data_final'];

 $naoExecut = [];

$sqlI = "SELECT SUM(CASE WHEN status_carregamento <> 'Carregado' THEN quantidade END)
AS metaProgramadaNaoExecutada FROM processos";


$executeI = $conection->query($sqlI) or die (mysqli_error($conection));
   

while($results = mysqli_fetch_object($executeI)){
    array_push($naoExecut,$results);
    
};

echo json_encode($naoExecut);

?>