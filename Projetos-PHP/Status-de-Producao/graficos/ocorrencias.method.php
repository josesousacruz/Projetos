<?php
include('../includes/config.php');


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $id = $_GET['id'];

    $query = 'SELECT * FROM ocorrencias WHERE id =' . $id;
    $stmt = $conection->prepare($query);
    $stmt->execute();
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $results = array_map(function ($result) {
        return array_map(function ($item) {
            return mb_convert_encoding($item, 'UTF-8', 'auto');
        }, $result);
    }, $results);

    header('Content-Type: application/json');
    $json = json_encode(['data' => $results], JSON_UNESCAPED_UNICODE);
    // Retorna os resultados como resposta JSON
    // $json = json_encode(['data' => $results]);
    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception(json_last_error_msg(), json_last_error());
    }
    echo $json;
    exit;

}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['_method']) && $_POST['_method'] === 'POST') {

    $ocorrencia = $_POST['ocorrencia'];
    $data_inicio = $_POST['date_inicio'];
    $data_fim = $_POST['date_termino'];
    $obs = $_POST['obs'];

    $query = "INSERT INTO ocorrencias (ocorrencia, data_inicio, data_fim, observacao) 
        VALUES (:ocorrencia, :data_inicio, :data_fim, :observacao)";

    $stmt = $conection->prepare($query);
    $stmt->bindParam(':ocorrencia', $ocorrencia);
    $stmt->bindParam(':data_inicio', $data_inicio);
    $stmt->bindParam(':data_fim', $data_fim);
    $stmt->bindParam(':observacao', $obs);

    if ($stmt->execute()) {
        // O registro foi inserido com sucesso
        echo 'Registro inserido com sucesso';
    } else {
        // Ocorreu um erro ao inserir o registro
        echo 'Erro ao inserir o registro';
    }
}


if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['_method']) && $_POST['_method'] === 'PUT') {

    $ocorrencia = $_POST['ocorrenciaEdit'];
    $data_inicio = $_POST['date_inicioEdit'];
    $data_fim = $_POST['date_terminoEdit'];
    $obs = $_POST['message-textEdit'];
    $id = $_POST['edit_id'];

    $query = 'UPDATE ocorrencias SET ocorrencia=:ocorrencia, data_inicio=:data_inicio, 
    data_fim=:data_fim ,observacao=:observacao WHERE id=:id';

    $stmt = $conection->prepare($query);
    $stmt->bindParam(':ocorrencia', $ocorrencia);
    $stmt->bindParam(':data_inicio', $data_inicio);
    $stmt->bindParam(':data_fim', $data_fim);
    $stmt->bindParam(':observacao', $obs);
    $stmt->bindParam(':id', $id);
    $stmt->execute();

}


?>