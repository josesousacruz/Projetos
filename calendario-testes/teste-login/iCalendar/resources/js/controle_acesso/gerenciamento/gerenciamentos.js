import { fetchPessoasGerenciamento, modalDetailslMotorista } from "./funcoes.js";
import { gerenciamentoPessoas, datatabVeiculosGerenciamento } from "./dataTable.js";
import { modalDetalhesMotorista, cameraModal } from "../../elementos/index.js";
import { updatePessoasGerenciamento, fetchUplaudImg, startCamera, takePhoto, capturedImage, setCameraStream, cameraStream } from "./funcoes.js";

fetchPessoasGerenciamento()
datatabVeiculosGerenciamento() 

$('#cpf').mask('000.000.000-00');
$('#UFGerenciamento').mask('AA');
$('#cpfGerenciamento').mask('000.000.000-00');
$('#cnhGeremciamento').mask('00000000000');
$('#telefoneGerenciamento').mask('(00)0 0000-0000');

$('#gerenciamentoPessoas').on('select.dt', function (e, dt, type, indexes) {
    let infos = gerenciamentoPessoas.rows(indexes).data().toArray()
    modalDetailslMotorista(infos[0]);
    modalDetalhesMotorista.show();
});

$('#cancelDatails').on('click', () => {
    modalDetalhesMotorista.hide();
    $('#formGerenciamento input').val(null);
})

$('#updateDatails').on('click', () => {
    let dadosPessoa = {
        id_entidade: $('#id_datails').val(),
        nome: $('#nomeGerenciamento').val(),
        cpf: $('#cpfGerenciamento').val(),
        cnh: $('#cnhGeremciamento').val(),
        email: $('#emailGerenciamento').val(),
        telefone: $('#telefoneGerenciamento').val(),
        uf: $('#UFGerenciamento').val(),
        cidade: $('#cidadeGerenciamento').val(),
        cep: $('#cepGerenciamento').val(),
        complemento: $('#complementoGerenciamento').val()
    };
    fetchPessoasGerenciamento()
    updatePessoasGerenciamento(dadosPessoa)


    modalDetalhesMotorista.hide();
    $('#formGerenciamento input').val(null);
})

$('#bloqueioGerenciamento').on('change', function () {
    $('#bntUpdadeBloqueio').prop('disabled', !$(this).prop('checked'));
});

$('#bntUpdadeBloqueio').on('click', () => {
    let dadosPessoa = {
        id_entidade: $('#id_datails').val()
    };

    if ($('#bloqueioGerenciamento').prop('checked')) {
        dadosPessoa.checked = 1;
    }

    updatePessoasGerenciamento(dadosPessoa);
})

$('#btnUpdateImg').on('click', () => {
    $('#fileInputImg').click();
});

 
$('#fileInputImg').on('change', function () {
    let file = this.files[0];
    let id_entidade = $('#id_datails').val()

    fetchUplaudImg(file, '', id_entidade);
});

$('#btnCamera').on('click', () => {
    cameraModal.show()
    startCamera();
})

$('#otherPhotoButton').on('click', () => {
    startCamera()
})


// Quando o botão de tirar foto é clicado
$('#takePhotoButton').on('click', function () {
    takePhoto();
});

$('#savePhotoButton').on('click', () => {
    let id_entidade = $('#id_datails').val()
    fetchUplaudImg('', capturedImage, id_entidade);
})

$('#bntDefaut').on('click', () => {
    let id_entidade = $('#id_datails').val()
    fetchUplaudImg('', '', id_entidade);
})


$('#cameraModal').on('hidden.bs.modal', function () {
    if (cameraStream) {

        cameraStream.getTracks().forEach(function (track) {
            track.stop();
        });
        setCameraStream(null);
    }
});

