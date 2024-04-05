import "./collapse.js"
import { janelaProgram, id_cliente, id_ope_Janela, janelaEventStar, janelaEventEnd } from "../calendar/calendarAgendamento.js"
import { slotStart, slotEnd } from "../calendar/calendarProgam.js";
import { fileToBase64, updateLabelAndIconColor } from "./funcoes.js";


var tableImport


export function tableImports() {
    var dataString = localStorage.getItem('localProgramacoes');

    if ($.fn.DataTable.isDataTable("#tableImport")) {
        tableImport.clear().draw();
        tableImport.destroy();
    }

    if (dataString) {

        var dataArray = JSON.parse(dataString);
        tableImport = $("#tableImport").DataTable({
            data: dataArray, // Use dataArray aqui
            responsive: true,
            searching: false,
            lengthChange: false,
            paging: true,
            language: {
                url: "//cdn.datatables.net/plug-ins/1.13.4/i18n/pt-BR.json",
            },
            columns: [
                { data: "name", title: "Nome" },
                { data: "cnh", title: "CNH" },
                { data: "cpf", title: "CPF" },
                { data: "rg", title: "RG" },
                { data: "telefone", title: "Telefone" },
                { data: "cavalo", title: "Cavalo" },
                { data: "carreta", title: "Carreta" },
                { data: "slotStart", title: "Slot inicio" },
                { data: "slotEnd", title: "Slot Fim" },
                { data: "janelaProgram", title: "Id Janela" }
            ],
            createdRow: function (row, data, dataIndex) {
                $(row).attr('data-index', dataIndex);
            }
        });
    }
}
tableImports()

$.validator.addMethod("regex", function (value, element, regexp) {
    var re = new RegExp(regexp);
    return this.optional(element) || re.test(value);
}, "Formato inválido.");



$.validator.addMethod("regex", function (value, element, regexp) {
    var re = new RegExp(regexp);
    return this.optional(element) || re.test(value);
}, "Formato inválido.");

export function initializeForm() {
    const formImport = $("#form-total");

    $('#placa').mask('AAAAAAA');
    $('#cpf').mask('000.000.000-00');
    $('#cnh').mask('00000000000');
    $('#cpfAcesso').mask('000.000.000-00');
    $('#cnhAcesso').mask('00000000000');
    $('#rg').mask('00000000000');
    $('#telefone').mask('(00)0 0000-0000');

    formImport.validate({
        rules: {
            name: {
                required: true,
                minlength: 5,
                regex: /^[a-zA-ZÀ-ú\s]*$/ // Expressão regular para validar apenas letras e espaços
            },
            telefone: {
                required: true,
                digits: false
            },
            cnh: {
                required: true,
                regex: /^\d{11}$/,
                digits: true
            },
            cpf: {
                required: false,
                regex: /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/
            },
            rg: {
                required: false,
                regex: /^\d{1,2}\.?\d{3}\.?\d{3}-?[a-zA-Z0-9]{1}$/

            },
            cavalo: {
                required: true,
                regex: /^[A-Z]{3}-?[0-9]{4}|[A-Z]{3}-?[0-9][A-Z][0-9]{2}$/
            },
            carreta: {
                required: false,
                regex: /^[A-Z]{3}-?[0-9]{4}|[A-Z]{3}-?[0-9][A-Z][0-9]{2}$/
            }

        },
        messages: {
            name: {
                required: "Você deve preencher o nome",
                minlength: "O nome deve ter mais que 5 caracteres",
                regex: "O nome não deve conter números"
            },
            telefone: {
                required: "O telefone é obrigatório",

                minlength: "O telefone deve ter 11 dígitos",
                maxlength: "O telefone deve ter 11 dígitos"
            },
            cnh: {
                required: "A CNH é obrigatória",
                regex: "Formato de CNH inválido"
            },
            cpf: {
                regex: "Formato de CPF inválido"
            },
            rg: {
                regex: "Formato de RG inválido"
            },
            cavalo: {
                required: "A placa do cavalo é obrigatória",
                regex: "Formato de placa inválido"
            },
            carreta: {
                required: "A placa da carreta é obrigatória",
                regex: "Formato de placa inválido"
            }
        }
    });


    formImport.steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate: '<div class="title">#title#</div>',
        labels: {
            previous: 'Voltar',
            next: 'Proximo',
            finish: 'Salvar',
            current: ''
        },
        onFinished: async function (event, currentIndex) {

            let formData = new FormData(document.getElementById('form-total'));

            const file1 = formData.get('filecnhmotorista');
            const file2 = formData.get('filedocumentveiculo');




            var data = {};

            for (var pair of formData.entries()) {
                data[pair[0]] = pair[1];
            }

            if (file1) {
                data.filecnhmotorista = await fileToBase64(file1); // Aguardar a conversão
            }

            if (file2) {
                data.filedocumentveiculo = await fileToBase64(file2); // Aguardar a conversão
            }


            // Adicionando slotStart, slotEnd e eventProgram ao objeto data
            if (id_ope_Janela === 1) { 
                data.slotStart = moment(janelaEventStar).format('YYYY-MM-DD HH:mm:ss');;
                data.slotEnd = moment(janelaEventEnd).format('YYYY-MM-DD HH:mm:ss');;
                data.janelaProgram = janelaProgram;
                data.id_cliente = id_cliente;
            } else {
                data.slotStart = slotStart;
                data.slotEnd = slotEnd;
                data.janelaProgram = janelaProgram;
                data.id_cliente = id_cliente;
            }


            var existingData = localStorage.getItem('localProgramacoes');
            var dataArray = existingData ? JSON.parse(existingData) : [];

            // Adicionar os novos dados ao array
            dataArray.push(data);

            // Salvar o array atualizado no localStorage
            localStorage.setItem('localProgramacoes', JSON.stringify(dataArray));
            resetFormSteps();
            tableImports();
            $('#cpf').mask('000.000.000-00');
            $('#cnh').mask('00000000000');
            $('#telefone').mask('(00)0 0000-0000');
        },
        onStepChanging: function (event, currentIndex, newIndex) {
            $('#cpf').mask('000.000.000-00');
            $('#cnh').mask('00000000000');
            $('#telefone').mask('(00)0 0000-0000');

            return formImport.valid();
            // return true
        },
    });
}
initializeForm()




// Função para reiniciar o formulário
export function resetFormSteps() {
    // Seleciona os labels para os inputs do documento do veículo e do motorista
    var labels = [
        document.querySelector('label[for="filedocumentveiculo"]'),
        document.querySelector('label[for="filecnhmotorista"]') // Certifique-se de que 'labelMotoristaInput' é o id correto do input do motorista
    ];

    labels.forEach(function (label) {
        var paths = label.querySelectorAll('svg path');
        paths.forEach(function (path) {
            path.style.fill = '#121212';
            path.style.stroke = '#121212';
        });
    });


    $("#form-total").steps("destroy");
    $('#labelMotoristaInput').html('Arraste e solte sua imagem/pdf do documento do motorista aqui, ou clique para selecionar!')
    $('#labelDocumentVeiculo').html('Arraste e solte sua imagem/pdf do documento do veiculo aqui, ou clique para selecionar!')
    // Reinicializa o formulário
    initializeForm();
}


// Quando o botão é clicado, aciona o input do arquivo
$('#importarLote').on('click', function () {
    $('#excelFile').trigger("click");
});

// Quando um arquivo é selecionado, processa esse arquivo
$('#excelFile').on('change', function (event) {
    var reader = new FileReader();

    reader.onload = function (e) {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, { type: 'array' });

        var firstSheetName = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[firstSheetName];

        // Converter os dados da planilha para JSON
        var json = XLSX.utils.sheet_to_json(worksheet, { raw: false, defval: null });


        var colunasAVerificarVazio = [0, 1, 2, 3, 4]; //  verifica as colunas obrigatorias para preenchimento
        var colunasAVerificarRepetidos = [0, 1, 3, 4] // Verifica se tem campos repetidos em documentos
        var valoresVistos = colunasAVerificarVazio.reduce(function (acc, colIndex) {
            acc[colIndex] = new Set();
            return acc;
        }, {});

        var temCampoVazio = false;
        var temCampoRepetido = false;
        var listaErros = [];
        // Verificar campos vazios nas colunas especificadas
        json.forEach(function (row, rowIndex) {
            colunasAVerificarVazio.forEach(function (colIndex) {
                var valorColuna = row[Object.keys(row)[colIndex]];

                if (valorColuna === null || valorColuna === '') {
                    var mensagemErro = `Campo vazio encontrado na coluna ${colIndex + 1} na linha ${rowIndex + 1}`;
                    console.log(mensagemErro);
                    listaErros.push(mensagemErro);
                    temCampoVazio = true;
                }
            });
            colunasAVerificarRepetidos.forEach(function (colIndex) {
                var valorColuna = row[Object.keys(row)[colIndex]];

                if (valoresVistos[colIndex].has(valorColuna)) {
                    var mensagemErro = `Campo repetido encontrado na coluna ${colIndex + 1} na linha ${rowIndex + 1}`;
                    console.log(mensagemErro);
                    listaErros.push(mensagemErro);
                    temCampoRepetido = true;
                } else {
                    valoresVistos[colIndex].add(valorColuna);
                }

            });
        });

        $('#excelFile').val("");

        var listaHTML = "<ul>";
        listaErros.forEach(function (erro) {
            listaHTML += `<li>${erro}</li>`;
        });

        listaHTML += "</ul>";
        listaHTML += '<br>'
        listaHTML += `<p>Corrija os campos e importe a planilha novamente</p>`
        if (temCampoVazio || temCampoRepetido) {
            console.log(listaErros);
            Swal.fire({
                icon: 'error',
                title: 'Erro na importação da planilha',
                html: listaHTML,
            });
        } else {
            var mapeamentoNomes = {
                'Tipo *': 'tipo',
                'CPF': 'cpf',
                'CNH*': 'cnh',
                'RG': 'rg',
                'Email': 'email',
                'Motorista*': 'name',
                'Placa Carreta*': 'carreta',
                'Placa Cavalo*': 'cavalo',
                'Telefone': 'telefone'
            };

            var jsonModificado = json.map(function (objeto) {
                var novoObjeto = {};
                Object.keys(objeto).forEach(function (chaveAntiga) {
                    var novaChave = mapeamentoNomes[chaveAntiga] || chaveAntiga; // Usa a nova chave do mapeamento, ou a chave antiga se não estiver no mapeamento
                    novoObjeto[novaChave] = objeto[chaveAntiga];
                });
                return novoObjeto;
            });


            var existingData = localStorage.getItem('localProgramacoes');
            var dataArray = existingData ? JSON.parse(existingData) : [];

            jsonModificado.forEach((item) => {

                if (id_ope_Janela === 1) {
                    item.slotStart = moment(janelaEventStar).format('YYYY-MM-DD HH:mm:ss');;
                    item.slotEnd = moment(janelaEventEnd).format('YYYY-MM-DD HH:mm:ss');;
                    item.janelaProgram = janelaProgram;
                    item.id_cliente = id_cliente;
                } else {
                    item.slotStart = slotStart;
                    item.slotEnd = slotEnd;
                    item.janelaProgram = janelaProgram;
                    item.id_cliente = id_cliente;
                }

                dataArray.push(item);

                localStorage.setItem(`localProgramacoes`, JSON.stringify(dataArray));
            });
            tableImports()
        }



    };
    // Ler o arquivo como um array buffer
    reader.readAsArrayBuffer(event.target.files[0]);
});


$('#filecnhmotorista').on('change', function (e) {
    var labelForFile = document.querySelector('label[for="filecnhmotorista"]')
    var fileName = e.target.files[0].name;
    $('#labelMotoristaInput').html(fileName)
    var paths = labelForFile.querySelectorAll('svg path');

    paths.forEach(function (path) {
        path.style.fill = '#008000';
        path.style.stroke = '#008000'
    });

})

$('#filedocumentveiculo').on('change', function (e) {
    var labelForFile = document.querySelector('label[for="filedocumentveiculo"]')
    var fileName = e.target.files[0].name;
    $('#labelDocumentVeiculo').html('fileName')
    var paths = labelForFile.querySelectorAll('svg path');

    paths.forEach(function (path) {
        path.style.fill = '#008000';
        path.style.stroke = '#008000'
    });
})


$('#resetLocalStorage').on('click', function () {
    localStorage.clear();
    tableImports();
})


$('#programarAll').on('click', function () {
    let tipo
    Swal.fire({
        title: 'Criando as programações!',
        html: 'Aguarde...',
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
        }
    });

    var programLocal = localStorage.getItem('localProgramacoes');
    programLocal = JSON.parse(programLocal);

    var errosAjax = [];
    var ajaxPromises = [];

    programLocal.forEach((program, index) => {
        if (program.tipo == 'BI-TREM') {
            tipo = 3
        } else if (program.tipo == 'Truck') {
            tipo = 2
        } else if (program.tipo == 'Basculante') {
            tipo = 1
        }
        var cpfSemPontosETracos = program.cpf.replace(/[.-]/g, '');
        var telefoneSemCaracteresIndesejados = program.telefone.replace(/[\(\)\.\-\s]/g, '');

        var programVeiculos = {
            "id_entidade_criador": 229,
            "id_entidade_cliente": program.id_cliente,
            "id_entidade_transportador": 245,
            "id_janela": program.janelaProgram,
            "id_entidade_unidade_negocio": 5,
            "datahora_inicio": program.slotStart,
            "datahora_fim": program.slotEnd,
            "veiculo": {
                "cavalo": {
                    "id_veiculo_tipo": tipo,
                    "placa": program.cavalo
                },
                "carreta": {
                    "id_veiculo_tipo": tipo,
                    "placa": program.carreta
                }
            },
            "pessoa": {
                "nome": program.name,
                "natureza": "pessoa_fisica",
                "estrutura": "individual",
                "motorista": 1,
                "pessoa_fisica": {
                    "nome": program.name,
                    "cpf": cpfSemPontosETracos,
                    "cnh": program.cnh,
                    "rg": program.rg,
                    "documento": program.filecnhmotorista
                },
                "contato": {
                    "email": program.email,
                    "numero": telefoneSemCaracteresIndesejados
                }
            }
        };

        var ajaxPromise = new Promise((resolve, reject) => {
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
            $.ajax({
                url: '/programacao/insert',
                type: 'POST',
                data: programVeiculos,
                success: function (response) {
                    console.log(response);
                    $(`#tableImport tr[data-index="${index}"] td`).addClass('bg-success');
                    resolve({ success: true, response: response, mensagem: 'Programação importada com sucesso', index: index });
                },
                error: function (xhr, status, error) {
                    var jsonXrh = JSON.parse(xhr.responseText)

                    errosAjax.push({ index: index, mensagem: jsonXrh });

                    $(`#tableImport tr[data-index="${index}"] td`).addClass('bg-danger');

                    resolve({ success: false, mensagem: xhr.responseText, index: index, title: xhr.responseJSON.causas });
                }
            });
        });
        ajaxPromises.push(ajaxPromise);
    });
    Promise.all(ajaxPromises).then(responses => {
        var index
        var errosAjax = responses.filter(r => !r.success);
        if (errosAjax.length > 0) {
            var listaResultadosHtml = '<ul>';
            responses.forEach(res => {
                console.log(res);
                if (res.success) {
                    index = res.index + 1
                    listaResultadosHtml += `<li class="">Linha ${index}: Sucesso - ${res.mensagem}</li>`;
                } else {
                    index = res.index + 1
                    var resJson = JSON.parse(res.mensagem)
                    listaResultadosHtml += `<li title="${res.title}" class="">Linha ${index}: Erro - ${resJson.mensagem}</li>`;
                }

            });
            listaResultadosHtml += '</ul>';
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: listaResultadosHtml
            });
        } else {
            // Todas as requisições foram bem-sucedidas
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'As programações foram salvas!',
                showConfirmButton: false,
                timer: 1500
            });
            localStorage.clear();
            tableImports();
        }
    });

});
