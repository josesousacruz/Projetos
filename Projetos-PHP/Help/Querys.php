<?php 


//Select
$querySelect = "SELECT studentID, fullName as nomeCompleto, now() as currentDate
from tableName
WHERE (studentID BETWEEN 1 AND 5 OR fullName LIKE %nameEx% OR studentID = 8 
ORDER BY fullName ASC;
;";

//SUM
$querySelectSum1 = "SELECT id,especie,status_carregamento,SUM(quantidade) AS produzidoTotal 
FROM processos WHERE data_fim BETWEEN '$dataInicial' AND '$dataFinal'
 AND status_carregamento = 'Carregado';";

//SUM(CASE WHEN) 
$querySelectSum = "SELECT SUM(CASE WHEN status_carregamento <> 'Carregado' THEN quantidade END)
AS metaProgramadaNaoExecutada FROM processos";


//Insert
$insertQuery = "INSERT INTO processos (data_chegada, placa, transportadora, ordem) 
VALUES  ('  ".$dataBrasileira." ',' ".$placa." ',' ".$transportadora." ',' ".$ordem."'    ')";

//Update
$queryUpdate = "UPDATE tableName SET idOrdem = valueI WHERE columTarget = valueTargade";

//Deletar
$querydelete = "DELETE  FROM processos WHERE id ='$id' ";

