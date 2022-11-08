<?php 
 include('../includes/config.php');
 session_start();


$arrayMeta = [];

$sqlI = "SELECT valorDaMeta FROM metamensal";


$executeI = $conection->query($sqlI) or die (mysqli_error($conection));
   

while($results = mysqli_fetch_object($executeI)){
    array_push($arrayMeta,$results);
    
};

echo json_encode($arrayMeta);

?>