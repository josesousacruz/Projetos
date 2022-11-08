<?php 
// include('includes/config.php');
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
      <label for="data_chegada">Data de chegada</label>
      <input type="date" class="form-control" name="data_chegada" id="data_chegada" placeholder="Hora de chegada do veiculo"  required>
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
      <label for="produto">Produto</label>
      <input type="text" class="form-control" name="produto" id="produto" placeholder="Informe o produto a ser carregado" required>
    </div>

    <div class="col-md-4 mb-3">
      <label for="especie">Especie</label>
          <select class="form-control" name="especie" id="especie" placeholder="Informe a especie do carregamento" required>
          <option value=""></option>
          <option value="BigBag">BigBag</option>
          <option value="Granel">Granel</option>
          </select>

    </div>


  </div>

  <div class="form-row">

    <div class="col-md-4 mb-3">
    <label for="text">Quantidade</label>
      <input type="text" class="form-control" name="quantidade" id="quantidade" placeholder="Informe a quantidade do carregamento" required>
    </div>

    <div class="col-md-4 mb-3">
      <label for="ordem">Status Carregamento</label>
      <select name="status_carregamento" id="status_carregamento" class="form-control">
        <option value=""></option>
        <option value=" Pátio">Pátio</option>
        <option value="Em carregamento">Em carregamento</option>
        <option value="Carregado">Carregado</option>
      </select>
    </div>

    <div class="col-md-4 mb-3">
      <label for="cif_fob">CIF/FOB</label>
      <select name="cif_fob" id="cif_fob" class="form-control">
        <option value=""></option>
        <option value="CIF">CIF</option>
        <option value="FOB">FOB</option>
      </select>
    </div>

  </div>


  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="pedido">Nº Pedido</label>
      <input type="text" class="form-control" name="pedido" id="pedido" placeholder="Numero do pedido"  required>
      <div class="valid-tooltip">
        Tudo certo!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="produtor">Produtor</label>
      <input type="text" class="form-control" name="produtor" id="produtor" placeholder="Informe o produtor destinado"  required>
    </div>

       <div class="col-md-4 mb-3">
      <label for="data_inicio">Data Inicio</label>
      <div class="input-group">
        <input type="date" class="form-control" name="data_inicio" id="data_inicio">
      </div>
    </div> 

  </div>


  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="hora_inicio">Hora inicio</label>
      <input type="time" class="form-control" name="hora_inicio" id="hora_inicio">
    </div>
    <div class="col-md-4 mb-3">
      <label for="data_fim">Data fim</label>
      <input type="date" class="form-control" name="data_fim" id="data_fim" >
    </div>

       <div class="col-md-4 mb-3">
      <label for="hora_fim">Hora fim</label>
      <div class="input-group">
        <input type="time" class="form-control" name="hora_fim" id="hora_fim"  aria-describedby="validationTooltipUsernamePrepend" >
      </div>
    </div> 

  </div>

  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="hora_inicio">NF Retorno</label>
      <input type="text" class="form-control" name="nf_inter" id="nf_inter">
    </div>
    <div class="col-md-4 mb-3">
      <label for="data_fim">Ticket</label>
      <input type="text" class="form-control" name="ticket" id="ticket" >
    </div>

       <div class="col-md-4 mb-3">
      <label for="hora_fim">NF venda</label>
      <div class="input-group">
        <input type="text" class="form-control" name="nf_venda" id="nf_venda"  >
      </div>
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
