<?php
include('includes/config.php');

$html = '<html>
<head>
<style>
    @page {
        margin-top: 100px; /* Espaço para a imagem no cabeçalho */
    }
    #header {
        position: fixed;
        left: 0;
        top: -100px; /* Altura da imagem */
        right: 0;
        height: 100px; /* Altura da imagem */
        text-align: center;
    }
    #header img {
        max-height: 100px; /* Altura da imagem */
    }
    table {
        width: 100%;
        border-collapse: collapse;
    }
    table, th, td {
        border: 1px solid black;
        text-align: center;
    }
</style>
</head>
<body>
<div id="header">
    <img src="https://gs.intermaritima.com.br/gs/giusoft/img_2.0/logo_pdf.jpg" />
</div>
<h1 style="text-align: center;">Ordem de Carregamento</h1>
<table>
<thead>
<tr>
<td>Ordem</td>
<td>Placa</td>
<td>Quantidade</td>
<td>Produto</td>
<td>Espécie</td>
</tr>
</thead>
<tbody>';

$sql = "SELECT c.*,
TIMEDIFF(c.data_fim, c.data_inicio) AS tempo_carregamento,
p.id AS produto_id,
p.nome AS nome_produto,
t.id AS transportadora_id,
t.razao_social AS nome_transportador,
DATE_FORMAT(c.data_chegada, '%d/%m/%Y %H:%i:%s') AS data_chegada,
DATE_FORMAT(c.data_inicio, '%d/%m/%Y %H:%i:%s') AS data_inicio,
DATE_FORMAT(c.data_fim, '%d/%m/%Y %H:%i:%s') AS data_fim
FROM carregamentos c
INNER JOIN produto p ON c.id_produto = p.id
INNER JOIN transportador t ON c.id_transportador = t.id
WHERE c.status_carregamento = 'Patio' OR c.status_carregamento = 'Em carregamento'
ORDER BY idOrdem ASC;";
$execute = $conection->query($sql);

while($row_result = $execute->fetch(PDO::FETCH_ASSOC)){
    $html .= '<tr><td>'.$row_result['idOrdem']."</td>";
    $html .= '<td>'.$row_result['placa']."</td>";
    $html .= '<td>'.$row_result['quantidade']."</td>";
    $html .= '<td>'.$row_result['nome_produto']."</td>";
    $html .= '<td>'.$row_result['especie']."</td></tr>";
}

$html .= '</tbody></table></body></html>';

use Dompdf\Dompdf;
require_once 'dompdf/autoload.inc.php';

// Instanciar a classe Dompdf
$dompdf = new Dompdf();

// Carregar o HTML no Dompdf
$dompdf->loadHtml($html);

// Renderizar o PDF
$dompdf->render();

// Exibir ou salvar o PDF
$dompdf->stream("relatorio_Ordem_De_Carregamento.pdf", array("Attachment" => false) );
?>
