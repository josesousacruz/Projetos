<div>
    <h1 class="fw-lighter text-muted">Relatorios de Veiculos no Terminal</h1>
<div class="d-flex" id="viewCountDashboard">
    
    <!-- Div maior para a lista de placas -->
    <div class="flex-grow-1  p-2 bg-body-secondary mx-2 my-1 rounded d-flex position-relative"
        style="height: 128px; box-shadow: 6px 4px 4px rgba(114, 113, 113, 0.25) inset;">
        <div id="boardPlaca" class="d-flex flex-wrap overflow-auto" style="height: 120px; width:100%">
            <!-- Placas SVG -->
        </div>
    </div>
    <!-- Div menor para "0" verde -->
    <div class="bg-success p-2 bg-opacity-75 mx-2 my-1 rounded d-flex justify-content-center align-items-center"
        style="min-width: 80px; height: 128px; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">
        <p id="qtdVeiculosNoTerminal" class="text-white fs-1">0</p>
    </div>
</div>
<div class="card shadow border-left-success mt-3">
    <table class="table table-hover justify-content-center align-items-center" id="noTerminalTable" style="width:100%">
    </table>
</div>
</div>