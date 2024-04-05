export var tableAcessos
const BASE_URL = window.location.origin;
export const datatableVNT = (data) => {
    if ($.fn.DataTable.isDataTable("#noTerminalTable")) {
        tableAcessos.clear().draw();
        tableAcessos.destroy();
    }

    tableAcessos = $("#noTerminalTable").DataTable({
        data: data,
        responsive: true, 
        searching: true,
        ordering: false,
        select: true,
        language: {
            url: `${BASE_URL}/dataTable_pt-br.json`,
        },
        columns: [
            { data: "id", title: "ID" },
            { data: "veiculos.placa", title: "Placa" },
            { data: "veiculos.natureza", title: "Tipo" },
            { data: "motorista.nome", title: "Motorista" },
            { data: "motorista.cnh", title: "CNH" },
            {
                data: "created_at", title: "Data/Hora", render: function (data, type, row) {
                    return moment(data).format('DD/MM/YYYY HH:mm');
                }
            }
        ],
        order: [[5, 'desc']],

    });

}

export const datatableAcessos = (data) => {
    if ($.fn.DataTable.isDataTable("#acessoslTable")) {
        tableAcessos.clear().draw();
        tableAcessos.destroy();
    }

    tableAcessos = $("#acessoslTable").DataTable({
        data: data,
        responsive: true,
        searching: true,
        // ordering: false,
        select: false,
        language: {
            url: `${BASE_URL}/dataTable_pt-br.json`,
        },
        columns: [
            { data: "id", title: "ID" },
            { data: "veiculos.placa", title: "Placa" },
            { data: "veiculos.natureza", title: "Tipo" },
            { data: "motorista.nome", title: "Motorista" },
            { data: "motorista.cnh", title: "CNH" },
            { data: "direcao", title: "Direção" },
            {
                data: "created_at", title: "Data/Hora", render: function (data, type, row) {
                    return moment(data).format('DD/MM/YYYY HH:mm');
                }
            }
        ],
        order: [[0, 'desc']],
    });

}