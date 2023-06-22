<?php 
 include('../includes/config.php');
 session_start();


 $arrayMeta = [];
 $sqlI = "SELECT valorDaMeta FROM metamensal";
 $stmt = $conection->prepare($sqlI);
 $stmt->execute();
 $results = $stmt->fetchAll(PDO::FETCH_OBJ);
 foreach($results as $row){
     array_push($arrayMeta, $row);
 }
 echo json_encode($arrayMeta);
 
?>