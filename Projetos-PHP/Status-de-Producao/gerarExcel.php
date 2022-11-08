
 <?php
    include('includes/config.php');
?>
<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="utf-8">
		<title>Contato</title>
	<head>
	<body>
		<?php
		// Definimos o nome do arquivo que será exportado
		$arquivo = 'Relatorio.xls';
		
		// Criamos uma tabela HTML com o formato da planilha
		$html = '';
		$html .= '<table border="1">';
		$html .= '<tr>';
		$html .= '<td colspan="5">Relatorio em Excel</tr>';
		$html .= '</tr>';
		
		
		$html .= '<tr>';
		$html .= '<td><b>Placa</b></td>';
		$html .= '<td><b>transportadora</b></td>';
		$html .= '<td><b>Ordem</b></td>';
		$html .= '<td><b>Produto</b></td>';
		// $html .= '<td><b>Data</b></td>';
		$html .= '</tr>';


        $dataInicial =  $_POST['data_inicio'];
        $dataFinal =  $_POST['data_final'];
		
		//Selecionar todos os itens da tabela 
		$result_processosExcel = "SELECT *
        FROM processos WHERE data_fim 
        BETWEEN '$dataInicial' AND '$dataFinal'
        AND status_carregamento = 'Carregado'
        ORDER BY data_fim ASC";
        
        $resultado_processoExcel = mysqli_query($conection , $result_processosExcel);
		
        while($row = mysqli_fetch_assoc($resultado_processoExcel)){
			$html .= '<tr>';
			$html .= '<td>'.$row["placa"].'</td>';
			$html .= '<td>'.$row["transportadora"].'</td>';
			$html .= '<td>'.$row["ordem"].'</td>';
			$html .= '<td>'.$row["produto"].'</td>';
			$html .= '</tr>';
			;
		}
		







        
		// Configurações header para forçar o download
		header ("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
		header ("Last-Modified: " . gmdate("D,d M YH:i:s") . " GMT");
		header ("Cache-Control: no-cache, must-revalidate");
		header ("Pragma: no-cache");
		header ("Content-type: application/x-msexcel");
		header ("Content-Disposition: attachment; filename=\"{$arquivo}\"" );
		header ("Content-Description: PHP Generated Data" );
		// Envia o conteúdo do arquivo
		echo $html;
		exit; ?>
	</body>
</html>