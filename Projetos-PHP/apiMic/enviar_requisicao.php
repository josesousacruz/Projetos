<!DOCTYPE html>
<html>
<head>
  <title>Exemplo de uso da API Fetch</title>
</head>
<body>
  
  <!-- Seu conteúdo HTML aqui -->

  <script>

function enviarTicket() {

  fetch('enviar_requisicao_rel.php', {
    method: 'GET'
  })
    .then(function(response) {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error('Erro na requisição.');
      }
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
}

enviarTicket();

    


  </script>
</body>
</html>
