<!DOCTYPE html>
<html lang="bt-br">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="José Sousa">

    <title>Projeto</title>

        <!-- Custom fonts for this template-->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

    <!-- Custom styles for this template-->
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"> -->
    <link href="css/sb-admin-2.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    
    <script src="https://kit.fontawesome.com/31a35138c2.js" crossorigin="anonymous"></script>

 
    

</head>

<body id="page-top">

<?php 
// include('includes/config.php');


$host="us-cdbr-east-06.cleardb.net";
$user="b7ec0b61a1182a";
$password="c16df8dd";
$dbname="heroku_eb23841869b8888";


// $host="localhost";
// $user="root";
// $password="";
// $dbname="status_carregamento";


$conection = mysqli_connect($host,$user,$password,$dbname);

mysqli_set_charset($conection, "utf-8");

$sqlCarregados = "SELECT *, TIMEDIFF(hora_fim,hora_inicio) AS tempo_carregamento FROM processos WHERE  status_carregamento = 'Carregado'  ORDER BY data_chegada DESC";
$executeCarregados = $conection->query($sqlCarregados) or die (mysqli_error($conection)); // relatorio carregados


$sql = "SELECT *, TIMEDIFF(hora_fim,hora_inicio) AS tempo_carregamento FROM processos WHERE  status_carregamento <> 'Carregado'  ORDER BY idOrdem ASC";
$execute = $conection->query($sql) or die (mysqli_error($conection)); // relatorio não carregados



?>


    <!-- Page Wrapper -->
    <div id="wrapper">

    