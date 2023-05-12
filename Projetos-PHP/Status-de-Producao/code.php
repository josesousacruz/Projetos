<?php
include('includes/config.php');
session_start();


////////////////////////Registrar//////////////////////////
if(isset($_POST['btnregistrar'])){


    try {
    
    $dataBrasileira = $_POST['data_chegada'];
 
    $placa = $_POST['placa'];
    $transportadora = $_POST['transportadora'];
    $ordem = $_POST['ordem'];                       
    $produto = $_POST['produto'];
    $especie = $_POST['especie'];
    $quantidade = $_POST['quantidade'];
    $status_carregamento = $_POST['status_carregamento'];
    $cif_fob = $_POST['cif_fob'];
    $pedido = $_POST['pedido'];
    $produtor = $_POST['produtor'];
    $data_inicio = $_POST['data_inicio'];
    $hora_inicio = $_POST['hora_inicio'];
    $data_fim = $_POST['data_fim'];
    $hora_fim = $_POST['hora_fim'];
    $nf_inter = $_POST['nf_inter'];
    $ticket = $_POST['ticket'];
    $nf_venda = $_POST['nf_venda'];


    $query = "INSERT INTO processos (data_chegada, placa, transportadora, ordem, 
    produto, especie, quantidade, status_carregamento, cif_fob, pedido, produtor, 
    data_inicio, hora_inicio, data_fim, hora_fim, nf_inter, ticket, nf_venda) 
    VALUES (:data_chegada, :placa, :transportadora, :ordem, :produto, :especie, 
    :quantidade, :status_carregamento, :cif_fob, :pedido, :produtor, :data_inicio, 
    :hora_inicio, :data_fim, :hora_fim, :nf_inter, :ticket, :nf_venda)";
    
    $stmt = $conection->prepare($query);
    $stmt->bindParam(':data_chegada', $dataBrasileira);
    $stmt->bindParam(':placa', $placa);
    $stmt->bindParam(':transportadora', $transportadora);
    $stmt->bindParam(':ordem', $ordem);
    $stmt->bindParam(':produto', $produto);
    $stmt->bindParam(':especie', $especie);
    $stmt->bindParam(':quantidade', $quantidade);
    $stmt->bindParam(':status_carregamento', $status_carregamento);
    $stmt->bindParam(':cif_fob', $cif_fob);
    $stmt->bindParam(':pedido', $pedido);
    $stmt->bindParam(':produtor', $produtor);
    $stmt->bindParam(':data_inicio', $data_inicio);
    $stmt->bindParam(':hora_inicio', $hora_inicio);
    $stmt->bindParam(':data_fim', $data_fim);
    $stmt->bindParam(':hora_fim', $hora_fim);
    $stmt->bindParam(':nf_inter', $nf_inter);
    $stmt->bindParam(':ticket', $ticket);
    $stmt->bindParam(':nf_venda', $nf_venda);
    
    $stmt->execute();
    
    
} catch(PDOException $e) {
    echo "Erro ao conectar ao banco de dados:" . $e->getMessage();
}


    if($query_run){
        $_SESSION['success'] = "Processo adicionado";
        header('Location: index.php');
    }else{
        $_SESSION['status'] = "Processo não foi adicionado";
        header('Location: index.php');
};
}


////////////////////Editar/////////////////////////

if(isset($_POST['updatebtn'])){
    $id = $_POST['edit_id'];
    $data_chegada = $_POST['edit_data_chegada'];
    $placa = $_POST['edit_placa'];
    $transportadora = $_POST['edit_transportadora'];
    $ordem = $_POST['edit_ordem'];
    $produto = $_POST['edit_produto'];
    $especie = $_POST['edit_especie'];
    $quantidade = $_POST['edit_quantidade'];
    $status_carregamento = $_POST['edit_status_carregamento'];
    $cif_fob = $_POST['edit_cif_fob'];
    $pedido = $_POST['edit_pedido'];
    $produtor = $_POST['edit_produtor'];
    $data_inicio = $_POST['edit_data_inicio'];
    $hora_inicio = $_POST['edit_hora_inicio'];
    $data_fim = $_POST['edit_data_fim'];
    $hora_fim = $_POST['edit_hora_fim'];
    $nf_inter = $_POST['edit_nf_inter'];
    $ticket = $_POST['edit_ticket'];
    $nf_venda = $_POST['edit_nf_venda'];



 $query = "UPDATE processos SET  data_chegada=:data_chegada, placa=:placa,
 transportadora=:transportadora, ordem=:ordem, produto=:produto, especie=:especie, quantidade=:quantidade,
 status_carregamento=:status_carregamento, cif_fob=:cif_fob, pedido=:pedido,
 produtor=:produtor, data_inicio =:data_inicio, hora_inicio=:hora_inicio, data_fim=:data_fim,
 hora_fim=:hora_fim, nf_inter=:nf_inter, ticket=:ticket, nf_venda=:nf_venda WHERE id=:id ";
    
$stmt = $conection->prepare($query);
$stmt->bindParam(':data_chegada', $data_chegada);
$stmt->bindParam(':placa', $placa);
$stmt->bindParam(':transportadora', $transportadora);
$stmt->bindParam(':ordem', $ordem);
$stmt->bindParam(':produto', $produto);
$stmt->bindParam(':especie', $especie);
$stmt->bindParam(':quantidade', $quantidade);
$stmt->bindParam(':status_carregamento', $status_carregamento);
$stmt->bindParam(':cif_fob', $cif_fob);
$stmt->bindParam(':pedido', $pedido);
$stmt->bindParam(':produtor', $produtor);
$stmt->bindParam(':data_inicio', $data_inicio);
$stmt->bindParam(':hora_inicio', $hora_inicio);
$stmt->bindParam(':data_fim', $data_fim);
$stmt->bindParam(':hora_fim', $hora_fim);
$stmt->bindParam(':nf_inter', $nf_inter);
$stmt->bindParam(':ticket', $ticket);
$stmt->bindParam(':nf_venda', $nf_venda);
$stmt->bindParam(':id', $id);
    
if ($stmt->execute()) {
    $_SESSION['success'] = "Editado";
    header('Location: index.php');
} else {
    $_SESSION['status'] = "ERRO";
    header('index.php');
}

    

    
};



///////////////////Deletar///////////////

if (isset($_POST['btndelete'])) {
    $id = $_POST['delete_id'];

    $query = "DELETE FROM processos WHERE id = :id";
    $stmt = $conection->prepare($query);
    $stmt->bindParam(':id', $id);
    $stmt->execute();


    if ($query_run) {
        $_SESSION['success'] = "Processo deletado";
        header('Location: index.php');
    }else{
        $_SESSION['status'] = "Processo não foi deletado";
        header('Location: index.php');
    }
}


///////////////////UPDATE META////////////////
if(isset($_POST['btnSalvar_metaMental'])){

    $meta = $_POST['metaMensal'];

    $query = "UPDATE metamensal SET valorDaMeta = :meta";
    $stmt = $conection->prepare($query);
    $stmt->bindParam(':meta', $meta);

    $query_run = $stmt->execute();



    if ($query_run) {
        $_SESSION['success'] = "Meta foi alterada";
        header('Location: charts.php');
    }else{
        $_SESSION['status'] = "FALHA AO ALTERAR META";
        header('Location: index.php');
    }

}





?>