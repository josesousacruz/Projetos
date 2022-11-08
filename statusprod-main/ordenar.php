<?php 
$host="localhost";
$user="root";
$password="";
$dbname="status_carregamento";


$conection = mysqli_connect($host,$user,$password,$dbname);


mysqli_set_charset($conection, "utf-8");




    $id = $_POST["id"];

    $arr_item = explode(",", $id);
    
    print_r($arr_item);

    $ordem =1;

    foreach($arr_item as $arr_item ){

        $sql = "UPDATE processos SET idOrdem = $ordem WHERE id = $arr_item";

        $execute = $conection->query($sql) or die(mysqli_error($conection));

        $ordem++;
       

    }


?>