<?php
include('includes/config.php');

$html= '<table border="1"  style="text-align: center;" width="100%" cellspacing="1">';
$html.= '<thead>';
$html.= '<tr>';
$html.= '<td>Ordem</td>';
$html.= '<td>Placa</td>';
$html.= '<td>Quantidade</td>';
$html.= '<td>Produto</td>';
$html.= '<td>Especie</td>';
$html.= '</tr>';
$html.= '</thead>';

// $results = "SELECT * FROM processos ORDER BY idOrdem ASC";
// $execut = mysqli_query($conection,$results);


while($row_result = mysqli_fetch_assoc($execute)){
    $html.= '<tbody>';
    $html.= '<tr><td>'.$row_result['idOrdem']."</td>";
    $html.= '<td>'.$row_result['placa']."</td>";
    $html.= '<td>'.$row_result['quantidade']."</td>";
    $html.= '<td>'.$row_result['produto']."</td>";
    $html.= '<td>'.$row_result['especie']."</td></tr>";
    $html.= '</tbody>';
}

$html .= '</table>';

 


use Dompdf\Dompdf;

require_once 'dompdf/autoload.inc.php';

//Instanciar a classe dompdf

$dompdf = new Dompdf();

$dompdf->loadhtml('

<h1 style="text-align: center;"> Ordem de carregamento </h1>
'.$html.'


');

$dompdf->render();

$dompdf->stream(
    "relatorio_Ordem_De_Carregamento",
    array(
        "Attachment" => false
    )

)













?>