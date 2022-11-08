<?php 
include('includes/config.php');
?>

 <!-- Modal -->
 <div class="modal fade bd-example-modal-xl" id="CadModal" tabindex="-1" role="dialog" aria-labelledby="CadModal" aria-hidden="true">
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="CadModal">Novo processo</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

      <form class="needs-validation" action="code.php" method="POST">
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="hora_chegada">Hora de chegada</label>
      <input type="text" class="form-control" name="hora_chegada" id="hora_chegada" placeholder="Hora de chegada do veiculo"  required>
      <div class="valid-tooltip">
        Tudo certo!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="placa">Placa</label>
      <input type="text" class="form-control" name="placa" id="placa" placeholder="Informe a placa do veiculo"  required>
      <div class="valid-tooltip">
        Tudo certo!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="transportadora">transportadora</label>
      <div class="input-group">
        <input type="text" class="form-control" name="transportadora" id="transportadora" placeholder="Informe a transportadora" aria-describedby="validationTooltipUsernamePrepend" required>
      </div>
    </div>
  </div>

  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="ordem">Ordem de produção</label>
      <input type="text" class="form-control" name="ordem" id="ordem" placeholder="Informe a numeração da ordem de carregamento" required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="ordem">Quantidade</label>
      <input type="text" class="form-control" name="quantidade" id="quantidade" placeholder="Informe a numeração da ordem de carregamento" required>
    </div>


  </div>




  <div class="modal-footer">
        
        <input type="submit" id="btnregistrar"  name="btnregistrar" class="btn btn-primary" value="Salvar">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
    
      </div>
  
</form>

      
      </div>

    </div>
  </div>
</div>
