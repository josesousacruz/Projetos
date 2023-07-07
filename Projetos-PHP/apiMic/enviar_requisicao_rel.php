<?php

$url = 'http://webservice.hom.micsistemas.com.br/NFECentralEAR-NFECentral/TiqueteImpl?wsdl';
$xmlData = '<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:ejb="http://ejb.postos.notafiscal.micsistemas.com.br/">
   <soap:Header/>
   <soap:Body>
      <ejb:tiqueteRecepcao>         
         <tiquete>
            <autenticacao>
               <password>dfrV4D3s!hSjMs7</password>
               <user>tmg-salvador</user>
            </autenticacao>
            <cdTiquete>505050</cdTiquete>            
            <cnpjEmpresa>61156501008130</cnpjEmpresa>            
            <cnpjTransportadora>01137349000132</cnpjTransportadora>
            <dtHrTiquete>2017-08-31T13:59:27</dtHrTiquete>
            <idCarreta1>DAO 3648</idCarreta1>
            <idCarreta2/>
            <idCarreta3/>
            <idCavalo>EMU 5360</idCavalo>
            <idVagao/>
            <nrDI>17/1807574-6</nrDI>
            <nrPedido>5900008459</nrPedido>
            <observacao/>
            <qtBruto>50.78</qtBruto>
            <qtLiquido>34.02</qtLiquido>
            <qtTara>16.76</qtTara>
         </tiquete>
      </ejb:tiqueteRecepcao>
   </soap:Body>
</soap:Envelope>';

$options = [
  'http' => [
    'method' => 'POST',
    'header' => 'Content-Type: application/xml',
    'content' => $xmlData
  ]
];

$context = stream_context_create($options);
$result = file_get_contents($url, false, $context);

if ($result === FALSE) {
  echo 'Erro na requisição';
} else {
  echo 'Resposta: ' . $result;
}


?>