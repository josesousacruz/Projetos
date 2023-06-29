<?php
include('../includes/config.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $currentDate = $_POST['min-date'];
    $nextDay = $_POST['max-date'];

    $query = "SELECT *, TIMEDIFF(data_fim, data_inicio) AS tempo FROM ocorrencias 
    WHERE data_inicio BETWEEN '" . $currentDate . "' AND '" . $nextDay . "'";

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
    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception(json_last_error_msg(), json_last_error());
    }
    echo $json;
    exit;
} elseif($_SERVER['REQUEST_METHOD'] === 'GET') {

    $currentDate = date('Y-m-d');
    $nextDay = date('Y-m-d', strtotime($currentDate . ' +1 day'));

    $query = 'SELECT *, TIMEDIFF(data_fim, data_inicio) AS tempo FROM ocorrencias WHERE data_inicio 
    BETWEEN \'' . $currentDate . ' 07:00:00\' AND \'' . $nextDay . ' 07:00:00\' OR data_fim = "00-00-00 00:00:00"';
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
    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception(json_last_error_msg(), json_last_error());
    }
    echo $json;
    exit;

}


?>