<?php 
 include('../includes/config.php');
 session_start();

 $mes = $_POST['mes'];
 $ano = $_POST['ano'];
if(isset($_POST['graficoModal'])){
    $arrayMeta = [];
    $sqlI = "SELECT * FROM metamensal WHERE mes = :mes AND ano = :ano";
    $stmt = $conection->prepare($sqlI);
    $stmt->bindParam(':mes',$mes);
    $stmt->bindParam('ano',$ano);
    $stmt->execute();
    $results = $stmt->fetchAll(PDO::FETCH_OBJ);
    foreach($results as $row){
        array_push($arrayMeta, $row);
    }
    echo json_encode($arrayMeta);
}

if(isset($_POST['filtrosFinalizados'])){
    $arrayMeta = [];
    $sqlI = "SELECT * FROM metamensal WHERE mes = :mes AND ano = :ano";
    $stmt = $conection->prepare($sqlI);
    $stmt->bindParam(':mes',$mes);
    $stmt->bindParam('ano',$ano);
    $stmt->execute();
    $results = $stmt->fetchAll(PDO::FETCH_OBJ);
    foreach($results as $row){
        array_push($arrayMeta, $row);
    }
    echo json_encode($arrayMeta);
}
 
?>