const BASE_URL = window.location.origin;

export var gerenciamentoPessoas;
export var gerenciamentoVeiculos;
export const datatabPessoasGerenciamento = (data) => {
    if ($.fn.DataTable.isDataTable("#gerenciamentoPessoas")) {
        gerenciamentoPessoas.clear().draw();
        gerenciamentoPessoas.destroy();
    }
    gerenciamentoPessoas = $("#gerenciamentoPessoas").DataTable({
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
            {
                data: "nome", title: "Nome",
                render: function (data, type, row) {
                    var baseUrl = window.location.protocol + "//" + window.location.host + "/";
                    var novoSrc = `${baseUrl}${row.entidade_fisica.imagem}.jpeg`;

                    return `<a class="d-flex align-items-center text-900"><div class="avatar avatar-l"><img style="width: 50px; height:50px; object-fit:cover;" src="${novoSrc}" alt="avatar" class="rounded-circle"></div><h6 class="mb-0 ms-3 text-900">${row.nome}</h6></a>`;
                }
            },
            {
                data: 'ativo', title: "Status",
                render: function (data, type, row) {
                    let status = (row.ativo ?? 1) ? `<span class="badge rounded-pill text-bg-success text-white"><h6 class="mb-0 text-700">Ativo</h6></span>` : `<span class="badge rounded-pill text-bg-danger text-white"><h6 class="mb-0 text-700">Bloqueado</h6></span>`;

                    return status
                }
            },
            { data: "entidade_fisica.cnh", title: "CNH" },
            { data: "entidade_fisica.cpf", title: "CPF" }
        ],
    });

}

export const datatabVeiculosGerenciamento = () => {
    if ($.fn.DataTable.isDataTable("#gerenciamentoVeiculos")) {
        gerenciamentoVeiculos.clear().draw();
        gerenciamentoVeiculos.destroy();
    }

    gerenciamentoVeiculos = $("#gerenciamentoVeiculos").DataTable({
        processing: true,
        serverSide: true,
        ajax: {
            url: "/gerenciamento/veiculos",
            type: 'POST',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        },
        responsive: true,
        searching: true,
        ordering: false,
        select: true,
        language: {
            url: `${BASE_URL}/dataTable_pt-br.json`,
        },
        columns: [
            { data: "id", title: "ID" },
            { data: "natureza", title: 'Natureza' },
            { data: "placa", title: "Placa" },
            { data: "tipo_veiculo.descricao", title: "Tipo" }
        ],
    });

}
