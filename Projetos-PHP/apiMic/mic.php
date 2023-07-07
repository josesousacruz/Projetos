
<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
// Credenciais de acesso
$usuario = "tmg-salvador";
$senha = "dfrV4D3s!hSjMs7";

// Dados do tiquete
$cdTiquete = "505050";
$cnpjEmpresa = "61156501008130";
$cnpjTransportadora = "01137349000132";
$dtHrTiquete = "2017-08-31T13:59:27";
$idCarreta1 = "DAO 3648";
$idCarreta2 = "";
$idCarreta3 = "";
$idCavalo = "EMU 5360";
$idVagao = "";
$nrDI = "17/1807574-6";
$nrPedido = "5900008459";
$observacao = "";
$qtBruto = "50.78";
$qtLiquido = "34.02";
$qtTara = "16.76";

// URL do WSDL
$wsdl = 'http://webservice.hom.micsistemas.com.br/NFECentralEAR-NFECentral/TiqueteImpl';
$wsdl = 'http://webservice.hom.micsistemas.com.br/NFECentralEAR-NFECentral/TiqueteImpl?wsdl';

// Criação do objeto SoapClient
$client = new SoapClient($wsdl, array('trace' => true));

// Construção do XML da requisição
$xml = '
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
</soap:Envelope>
';

// Cabeçalhos da requisição SOAP
$headers = array(
    'Content-Type: application/soap+xml',
    'charset=utf-8',
    'Content-Length: '.strlen($xml),
);

// Configuração dos parâmetros da requisição SOAP
$options = array(
    'soap_version' => SOAP_1_2,
    'encoding' => 'UTF-8',
    'trace' => true,
    'exceptions' => true,
);

try {
    // Realiza a chamada ao método do webservice
    $response = $client->__soapCall('tiqueteRecepcao', array($xml), $options);

    // Verifica se a resposta foi recebida com sucesso
    if ($response !== null) {
        // Processa a resposta de sucesso
        // Aqui você pode realizar as ações necessárias com os dados retornados pelo webservice
        
        // Exemplo: exibindo a resposta
        echo "Requisição realizada com sucesso!";
        echo "<pre>";
        echo htmlspecialchars($client->__getLastResponse());
        echo "</pre>";
    } else {
        // A resposta do webservice foi nula ou vazia
        echo "Erro na requisição: resposta vazia";
    }
} catch (SoapFault $fault) {
    // Trata a exceção ocorrida durante a chamada ao webservice
    echo "Erro na requisição SOAP: " . $fault->getMessage();
}
