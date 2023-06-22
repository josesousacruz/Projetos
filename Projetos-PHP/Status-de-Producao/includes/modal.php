<!-- Modal -->
<div class="modal fade bd-example-modal-xl" id="CadModal" tabindex="-1" role="dialog" aria-labelledby="CadModal"
  aria-hidden="true">
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="CadModal">Novo Carregamento</h5>
        <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Fechar">
          Fechar
        </button>
      </div>
      <div class="modal-body">

        <form class="needs-validation" action="code.php" method="POST">

          <div class="form-row">

            <div class="col-md-4 mb-3">
              <label for="dataParaCota">Para Cota do Dia e Horario</label>
              <input type="datetime-local" name="dataParaCota" class="form-control"
                 required>
            </div>

            <div class="col-md-4 mb-3">
              <label for="transportadora">Transportadora</label>
              <select class="form-select" name="id_transportador" id="id_transportador">
                <option value=""></option>
                <?php
                $sql = "SELECT * FROM transportador;";
                $query = $conection->prepare($sql);
                $query->execute();
                $resultado = $query->fetchAll(PDO::FETCH_OBJ);
                foreach ($resultado as $row) {
                  ?>
                  <option value="<?php echo $row->id ?>"><?php echo $row->razao_social ?></option>

                <?php } ?>
              </select>
            </div>

            <div class="col-md-4 mb-3">
              <label for="cif_fob">CIF/FOB</label>
              <select name="cif_fob" id="cif_fob" class="form-select">
                <option value=""></option>
                <option value="CIF">CIF</option>
                <option value="FOB">FOB</option>
              </select>
            </div>

            <div class="col-md-4 mb-3">
              <label for="motorista">Motorista</label>
              <input type="text" class="form-control" name="motorista" id="motorista" placeholder="Informe o nome do motorista!"
                required>
            </div>

            
            <div class="col-md-4 mb-3">
              <label for="placa">Placa</label>
              <input type="text" class="form-control" name="placa" id="placa" placeholder="Informe a placa do veiculo!"
                required>
            </div>

            <div class="col-md-4 mb-3">
              <label for="cliente">Cliente</label>
              <input type="text" class="form-control" name="cliente" id="cliente"
                placeholder="Informe o cliente destinado" required>
            </div>

            <div class="col-md-3 mb-3">
              <label for="pedido">Nº Pedido</label>
              <input type="text" class="form-control" name="n_pedido" id="n_pedido" placeholder="Numero do pedido"
                required>
            </div>
            
            <div class="col-md-3 mb-3">
              <label for="produto">Produto</label>
              <select class="form-select" name="id_produto" id="id_produto">
                <option value=""></option>
                <?php
                $sql = "SELECT * FROM produto;";
                $query = $conection->prepare($sql);
                $query->execute();
                $resultado = $query->fetchAll(PDO::FETCH_OBJ);

                foreach ($resultado as $row) {

                  ?>
                  <option value="<?php echo $row->id ?>"> <?php echo $row->nome ?> </option>

                <?php } ?>
              </select>
            </div>

            
            <div class="col-md-3 mb-3">
              <label for="especie">Especie</label>
              <select class="form-select" name="especie" id="especie" placeholder="Informe a especie do carregamento"
                required>
                <option value=""></option>
                <option value="BigBag">BigBag</option>
                <option value="Granel">Granel</option>
              </select>

            </div>

            <div class="col-md-3 mb-3">
              <label for="text">Quantidade</label>
              <input type="text" class="form-control" name="quantidade" id="quantidade"
                placeholder="Informe a quantidade do carregamento" required>
            </div>



            



          </div>


          <div class="modal-footer">
            <input type="submit" id="btnregistrar" name="btnregistrar" class="btn btn-primary" value="Salvar">
            <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button> -->
          </div>

        </form>




      </div>

    </div>
  </div>
</div>