export var tableControleAcesso
const BASE_URL = window.location.origin;
export const datatableCA = (data) =>{
if ($.fn.DataTable.isDataTable("#programTable")) {
    tableControleAcesso.clear().draw();
    tableControleAcesso.destroy();
}

 tableControleAcesso = $("#programTable").DataTable({
    data: data.programacao,
    responsive: {
        details: {
            renderer: function ( api, rowIdx, columns ) {
                // Lógica customizada para decidir quando mostrar detalhes
                return false; // Isso evitará que a <tr> de detalhes seja mostrada
            }
        }
    }, 
    searching: true,
    ordering: false, 
    select: true,
    language: {
        url: `${BASE_URL}/dataTable_pt-br.json`,
    },
    columns: [
        { data: "id", title: "ID" },
        { data: "veiculo.placa", title: "Placa" },
        { data: "entidade_motorista.nome", title: "Motorista" },
        { data: "operacoes.observacao", title: "Operação" },
        { data: "veiculo_carreta.placa", title: "Carreta" },
        { data: "veiculo.tipo_veiculo.descricao", title: "Tipo" },
        { data: "entidade_motorista.cnh", title: "CNH" },
        { data: "entidade_motorista.cpf", title: "CPF" },
        { data: "entidade_transportador.razao_social", title: "Transportadora" },
    ],
});

}