<?php
$host="localhost";
$user="root";
$password="";
$dbname="status_carregamento";

try {
  $conection = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);
  $conection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $sqlCarregados = "SELECT *, TIMEDIFF(hora_fim,hora_inicio) AS tempo_carregamento FROM processos WHERE status_carregamento = 'Carregado' ORDER BY data_chegada DESC";
  $executeCarregados = $conection->query($sqlCarregados);

} catch(PDOException $e) {
  echo "Erro de conexão: " . $e->getMessage();
}

?>
