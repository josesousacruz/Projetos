<div>
    <h1 class="fw-lighter text-muted">Relatorios de acessos</h1>
<section id="filtros" class="d-flex flex-column border rounded">
    <h4 class="my-2 text-center fw-normal ">Filtros</h4>

    <div class="d-flex text-center p-3">
        <div class="d-flex flex-column flex-fill px-2">
            <div class="mb-3">
                <label for="datainicio" class="form-label">Data Inicial</label>
                <input type="datetime-local" name="relatorio1" id="datainicio" class="form-control">
            </div>

            <div class="mb-3">
                <label for="datafim" class="form-label">Data Final</label>
                <input type="datetime-local" name="relatorio1" id="datafim" class="form-control">
            </div>
        </div>

        <div class="d-flex flex-column flex-fill px-2">
            <div class="mb-3">
                <label for="placa" class="form-label">Placa</label>
                <input type="text" name="relatorio1" id="placa" class="form-control">
            </div>

            <div class="mb-3">
                <label for="motorista" class="form-label">Motorista</label>
                <input type="text" name="relatorio1" id="motorista" class="form-control">
            </div>
        </div>

        <div class="d-flex flex-column flex-fill px-2">
            <div class="mb-3">
                <label for="cnh" class="form-label">CNH</label>
                <input type="text" name="relatorio1" id="cnh" class="form-control">
            </div>

            <div class="mb-3">
                <label for="cpf" class="form-label">CPF</label>
                <input type="text" name="relatorio1" id="cpf" class="form-control">
            </div>
        </div>

        <button id="buscarRelAcessos" class="btn btn-success d-flex justify-content-center align-items-center rounded-4" style="width: 80px; height: 180px;">
            <i class="bi bi-search"></i>
        </button>
    </div>
</section>
</div>
<div class="card shadow border-left-success mt-3">
    <table class="table table-hover justify-content-center align-items-center" id="acessoslTable" style="width:100%">
    </table>
</div>
