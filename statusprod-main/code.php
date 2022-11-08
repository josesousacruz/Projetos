<?php
include('includes/config.php');
session_start();





if(isset($_POST['btnregistrar'])){

    $hora_chegada = $_POST['hora_chegada'];
    $placa = $_POST['placa'];
    $transportadora = $_POST['transportadora'];
    $ordem = $_POST['ordem'];
    $quantidade = $_POST['quantidade'];

    $query = "INSERT INTO processos (hora_chegada, placa, transportadora, ordem, quantidade) VALUES(
    '".$hora_chegada."','".$placa."','".$transportadora."','".$ordem."','".$quantidade."   ') ";
    $query_run = mysqli_query($conection, $query);

    if($query_run){
        $_SESSION['success'] = "Processo adicionado";
        header('Location: indexZ.php');
    }else{
        $_SESSION['status'] = "Processo não foi adicionado";
        header('Location: indexZ.php');
};
}


if(isset($_POST['updatebtn'])){
    $id = $_POST['edit_id'];
    $hora_chegada = $_POST['edit_hora_chegada'];
    $placa = $_POST['edit_placa'];
    $transportadora = $_POST['edit_transportadora'];
    $ordem = $_POST['edit_ordem'];
    $quantidade = $_POST['edit_quantidade'];

    $query = "UPDATE processos SET  hora_chegada='$hora_chegada', placa='$placa', transportadora='$transportadora', ordem='$ordem', quantidade = '$quantidade' WHERE id='$id' ";
    $query_run = mysqli_query($conection, $query);

    if ($query_run) {
        $_SESSION['success'] = "Editado";
        header('Location: indexZ.php');

    }else{
        $_SESSION['status'] = "Editado";
        header('indexZ.php');
    }
};


if (isset($_POST['btndelete'])) {
    $id = $_POST['delete_id'];

    $query = "DELETE  FROM processos WHERE id ='$id' ";
    $query_run = mysqli_query($conection, $query);

    if ($query_run) {
        $_SESSION['success'] = "Processo deletado";
        header('Location: indexZ.php');
    }else{
        $_SESSION['status'] = "Processo não foi deletado";
        header('Location: indexZ.php');
    }
}







?>