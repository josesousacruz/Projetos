<?php
include('../includes/config.php');
if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_POST['relatorio'] === 'true') {
    $currentDate = $_POST['min-date'];
    $nextDay = $_POST['max-date'];

    $query = "SELECT 
    SEC_TO_TIME(SUM(CASE WHEN ocorrencia = 'Manutenção preventiva' AND data_fim > '0000-00-00 00:00:00' THEN TIME_TO_SEC(TIMEDIFF(data_fim, data_inicio)) ELSE 0 END)) AS manutPreventiva,
    SEC_TO_TIME(SUM(CASE WHEN ocorrencia = 'Manutenção corretiva' AND data_fim > '0000-00-00 00:00:00' THEN TIME_TO_SEC(TIMEDIFF(data_fim, data_inicio)) ELSE 0 END)) AS manutCorretiva,
    SEC_TO_TIME(SUM(CASE WHEN ocorrencia = 'Limpeza de rotina' AND data_fim > '0000-00-00 00:00:00' THEN TIME_TO_SEC(TIMEDIFF(data_fim, data_inicio)) ELSE 0 END)) AS limpRotina,
    SEC_TO_TIME(SUM(CASE WHEN ocorrencia = 'Limpeza para troca de produto' AND data_fim > '0000-00-00 00:00:00' THEN TIME_TO_SEC(TIMEDIFF(data_fim, data_inicio)) ELSE 0 END)) AS limpProduto,
    SEC_TO_TIME(SUM(CASE WHEN ocorrencia = 'Falta de veiculos' AND data_fim > '0000-00-00 00:00:00' THEN TIME_TO_SEC(TIMEDIFF(data_fim, data_inicio)) ELSE 0 END)) AS faltVeiculos,
    SEC_TO_TIME(SUM(CASE WHEN ocorrencia = 'Falta de programação' AND data_fim > '0000-00-00 00:00:00' THEN TIME_TO_SEC(TIMEDIFF(data_fim, data_inicio)) ELSE 0 END)) AS faltProgramacao,
    SEC_TO_TIME(SUM(CASE WHEN ocorrencia = 'Aguardando OP' AND data_fim > '0000-00-00 00:00:00' THEN TIME_TO_SEC(TIMEDIFF(data_fim, data_inicio)) ELSE 0 END)) AS aguardOP,
    SEC_TO_TIME(SUM(CASE WHEN ocorrencia = 'Ajuste de peso' AND data_fim > '0000-00-00 00:00:00' THEN TIME_TO_SEC(TIMEDIFF(data_fim, data_inicio)) ELSE 0 END)) AS ajustPeso,
    SEC_TO_TIME(SUM(CASE WHEN ocorrencia = 'DDS' AND data_fim > '0000-00-00 00:00:00' THEN TIME_TO_SEC(TIMEDIFF(data_fim, data_inicio)) ELSE 0 END)) AS dds,
    SEC_TO_TIME(SUM(CASE WHEN ocorrencia = 'Troca de turno' AND data_fim > '0000-00-00 00:00:00' THEN TIME_TO_SEC(TIMEDIFF(data_fim, data_inicio)) ELSE 0 END)) AS trocTurno,
    SEC_TO_TIME(SUM(CASE WHEN ocorrencia = 'Abastecimento de silo' AND data_fim > '0000-00-00 00:00:00' THEN TIME_TO_SEC(TIMEDIFF(data_fim, data_inicio)) ELSE 0 END)) AS abastSilo,
    SEC_TO_TIME(SUM(CASE WHEN ocorrencia = 'Intervalo' AND data_fim > '0000-00-00 00:00:00' THEN TIME_TO_SEC(TIMEDIFF(data_fim, data_inicio)) ELSE 0 END)) AS intervalo,
    SEC_TO_TIME(SUM(CASE WHEN ocorrencia = 'Outros' AND data_fim > '0000-00-00 00:00:00' THEN TIME_TO_SEC(TIMEDIFF(data_fim, data_inicio)) ELSE 0 END)) AS outros,
    SEC_TO_TIME(SUM(CASE WHEN data_fim > '0000-00-00 00:00:00' THEN TIME_TO_SEC(TIMEDIFF(data_fim, data_inicio)) ELSE 0 END)) AS total
    FROM ocorrencias WHERE data_inicio BETWEEN '" . $currentDate . "' AND '" . $nextDay . "'";

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
} else {
    $currentDate = date('Y-m-d');
    $nextDay = date('Y-m-d', strtotime($currentDate . ' +1 day'));

    $query = "SELECT 
    SEC_TO_TIME(SUM(CASE WHEN ocorrencia = 'Manutenção preventiva' AND data_fim > '0000-00-00 00:00:00' THEN TIME_TO_SEC(TIMEDIFF(data_fim, data_inicio)) ELSE 0 END)) AS manutPreventiva,
    SEC_TO_TIME(SUM(CASE WHEN ocorrencia = 'Manutenção corretiva' AND data_fim > '0000-00-00 00:00:00' THEN TIME_TO_SEC(TIMEDIFF(data_fim, data_inicio)) ELSE 0 END)) AS manutCorretiva,
    SEC_TO_TIME(SUM(CASE WHEN ocorrencia = 'Limpeza de rotina' AND data_fim > '0000-00-00 00:00:00' THEN TIME_TO_SEC(TIMEDIFF(data_fim, data_inicio)) ELSE 0 END)) AS limpRotina,
    SEC_TO_TIME(SUM(CASE WHEN ocorrencia = 'Limpeza para troca de produto' AND data_fim > '0000-00-00 00:00:00' THEN TIME_TO_SEC(TIMEDIFF(data_fim, data_inicio)) ELSE 0 END)) AS limpProduto,
    SEC_TO_TIME(SUM(CASE WHEN ocorrencia = 'Falta de veiculos' AND data_fim > '0000-00-00 00:00:00' THEN TIME_TO_SEC(TIMEDIFF(data_fim, data_inicio)) ELSE 0 END)) AS faltVeiculos,
    SEC_TO_TIME(SUM(CASE WHEN ocorrencia = 'Falta de programação' AND data_fim > '0000-00-00 00:00:00' THEN TIME_TO_SEC(TIMEDIFF(data_fim, data_inicio)) ELSE 0 END)) AS faltProgramacao,
    SEC_TO_TIME(SUM(CASE WHEN ocorrencia = 'Aguardando OP' AND data_fim > '0000-00-00 00:00:00' THEN TIME_TO_SEC(TIMEDIFF(data_fim, data_inicio)) ELSE 0 END)) AS aguardOP,
    SEC_TO_TIME(SUM(CASE WHEN ocorrencia = 'Ajuste de peso' THEN TIME_TO_SEC(TIMEDIFF(data_fim, data_inicio)) ELSE 0 END)) AS ajustPeso,
    SEC_TO_TIME(SUM(CASE WHEN ocorrencia = 'DDS' THEN TIME_TO_SEC(TIMEDIFF(data_fim, data_inicio)) ELSE 0 END)) AS dds,
    SEC_TO_TIME(SUM(CASE WHEN ocorrencia = 'Troca de turno' THEN TIME_TO_SEC(TIMEDIFF(data_fim, data_inicio)) ELSE 0 END)) AS trocTurno,
    SEC_TO_TIME(SUM(CASE WHEN ocorrencia = 'Abastecimento de silo' THEN TIME_TO_SEC(TIMEDIFF(data_fim, data_inicio)) ELSE 0 END)) AS abastSilo,
    SEC_TO_TIME(SUM(CASE WHEN ocorrencia = 'Intervalo' THEN TIME_TO_SEC(TIMEDIFF(data_fim, data_inicio)) ELSE 0 END)) AS intervalo,
    SEC_TO_TIME(SUM(CASE WHEN ocorrencia = 'Outros' AND data_fim > '0000-00-00 00:00:00' THEN TIME_TO_SEC(TIMEDIFF(data_fim, data_inicio)) ELSE 0 END)) AS outros,
    SEC_TO_TIME(SUM(CASE WHEN data_fim > '0000-00-00 00:00:00' THEN TIME_TO_SEC(TIMEDIFF(data_fim, data_inicio)) ELSE 0 END)) AS total
    FROM ocorrencias WHERE data_inicio BETWEEN '" . $currentDate . " 00:00:00' AND '" . $nextDay . " 00:00:00'";

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