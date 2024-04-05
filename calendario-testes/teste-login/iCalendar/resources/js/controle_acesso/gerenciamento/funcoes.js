import { datatabPessoasGerenciamento, datatabVeiculosGerenciamento } from "./dataTable.js";

export let capturedImage = null
export let cameraStream = null;

export const fetchPessoasGerenciamento = () => {

    $.post('/gerenciamento/pessoas', {
        _token: $('meta[name="csrf-token"]').attr('content'),
    }, function (data) {

        datatabPessoasGerenciamento(data)

    }, 'json')
        .fail(function (xhr, status, error) {
            if ($.fn.DataTable.isDataTable("#gerenciamentoPessoas")) {
                $.fn.DataTable.isDataTable("#gerenciamentoPessoas").clear().draw();
                $.fn.DataTable.isDataTable("#gerenciamentoPessoas").destroy();
            }
            console.error('Erro na requisição POST:', error);
        });
}

export const fetchVeiculosGerenciamento = () => {

    $.post('/gerenciamento/veiculos', {
        _token: $('meta[name="csrf-token"]').attr('content'),
    }, function (data) {
        datatabVeiculosGerenciamento(data)
    }, 'json')
        .fail(function (xhr, status, error) {
            if ($.fn.DataTable.isDataTable("#gerenciamentoPessoas")) {
                $.fn.DataTable.isDataTable("#gerenciamentoPessoas").clear().draw();
                $.fn.DataTable.isDataTable("#gerenciamentoPessoas").destroy();
            }
            console.error('Erro na requisição POST:', error);
        });
}

export const updatePessoasGerenciamento = (infos) => {
    $.ajax({
        url: '/gerenciamento/pessoas/update',
        type: 'PUT',
        data: {
            _token: $('meta[name="csrf-token"]').attr('content'),
            ...infos
        },
        dataType: 'json',
        success: function (data) {
            $('#bntUpdadeBloqueio').html(data.entidade.ativo ? 'Bloquear Acesso' : 'Desbloquear Acesso')
                .removeClass('btn-warning btn-danger')
                .addClass(data.entidade.ativo ? 'btn-danger' : 'btn-warning')

            data.entidade.ativo ? $('#bloqueioimg').hide() : $('#bloqueioimg').show();

            fetchPessoasGerenciamento();

        },
        error: function (xhr, status, error) {
            console.error('Erro na requisição PUT:', error);
        }
    });
}


export const modalDetailslMotorista = (infos) => {
    $('#bntUpdadeBloqueio').html(infos.ativo ? 'Bloquear Acesso' : 'Desbloquear Acesso')
        .removeClass('btn-warning btn-danger')
        .addClass(infos.ativo ? 'btn-danger' : 'btn-warning')
        .prop('disabled', true)


    infos.ativo ? $('#bloqueioimg').hide() : $('#bloqueioimg').show();

    updateImg(infos.id);

    $('#id_datails').val(infos.id);
    $('#nomeGerenciamento').val(infos.nome);
    $('#cpfGerenciamento').val(infos.entidade_fisica.cpf);
    $('#cnhGeremciamento').val(infos.entidade_fisica.cnh);
    $('#emailGerenciamento').val(infos.entidade_contatos ? infos.entidade_contatos.email : '');
    $('#telefoneGerenciamento').val(infos.entidade_contatos ? infos.entidade_contatos.contato : '');
    $('#UFGerenciamento').val(infos.entidade_endereco ? infos.entidade_endereco.uf : '');
    $('#cidadeGerenciamento').val(infos.entidade_endereco ? infos.entidade_endereco.cidade : '');
    $('#cepGerenciamento').val(infos.entidade_endereco ? infos.entidade_endereco.cep : '');
    $('#complementoGerenciamento').val(infos.entidade_endereco ? infos.entidade_endereco.complemento : '');
    $('#bloqueioGerenciamento').prop('checked', false);

}

export const updateImg = (id_entidade) => {
    var baseUrl = window.location.protocol + "//" + window.location.host + "/";
    var novoSrc = `${baseUrl}images/motoristas/${id_entidade}.jpeg`;

    fetch(novoSrc)
        .then(response => {
            if (response.ok) {
                $('#img_motorista').attr('src', novoSrc);
            } else {
                $('#img_motorista').attr('src', `${baseUrl}images/motoristas/defaut.jpeg`);
            }
        })
        .catch(error => {
            console.error('Erro ao tentar carregar a imagem:', error);
        });

}


export const base64ToBlob = (base64Data, contentType = '', sliceSize = 512) => {
    const byteCharacters = atob(base64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: contentType });
};

export const fetchUplaudImg = (file, img, id_entidade) => {

    if (!img && !file) {
        $.post('/upload-image', {
            _token: $('meta[name="csrf-token"]').attr('content'),
            id_entidade: id_entidade
        }, function (data) {
            fetchPessoasGerenciamento();

        }, 'json')
            .fail(function (xhr, status, error) {
                console.error('Erro na requisição POST:', error);
            });
    }

    if (img) {
        const base64Data = img.src.replace(/^data:image\/\w+;base64,/, "");
        const blob = base64ToBlob(base64Data, 'image/jpeg');
        file = new File([blob], { type: 'image/jpeg' });
    }

    if (file) {
        let formData = new FormData();
        formData.append('image', file);
        formData.append('id_entidade', id_entidade);

        $.ajax({
            url: '/upload-image',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: (response) => {
                
                updateImg(id_entidade);
            },
            error: (error) => {
                if (error.status === 422) { // Erro de validação
                    var errors = error.responseJSON.errors;
                    $.each(errors, (key, value) => {

                        Swal.fire({
                            title: value[0],
                            text: value[1],
                            icon: "warning"
                        });
                    });
                } else {
                    console.log('Erro:', error);
                }
            }
        });
    }
    updateImg(id_entidade);
    fetchPessoasGerenciamento();
};


let cameraVideo = document.getElementById('cameraVideo'), cameraCanvas = document.getElementById('cameraCanvas')

// Função para iniciar a câmera
export const startCamera = () => {
    $('#capturedImageDisplay').css('display', 'none');
    $('#cameraVideo').css('display', 'block');
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                cameraStream = stream;
                cameraVideo.srcObject = stream;
                cameraVideo.play();
            })
            .catch(function (err) {
                console.error('An error occurred: ' + err);
            });
    } else {
        console.error('Camera access is not supported.');
    }
}



export const takePhoto = () => {
    cameraCanvas.width = cameraVideo.videoWidth;
    cameraCanvas.height = cameraVideo.videoHeight;

    let context = cameraCanvas.getContext('2d');
    context.drawImage(cameraVideo, 0, 0, cameraCanvas.width, cameraCanvas.height);
    let dataUrl = cameraCanvas.toDataURL('image/jpeg');
    capturedImage = new Image();
    capturedImage.src = dataUrl;


    $('#capturedImageDisplay').attr('src', dataUrl);
    $('#capturedImageDisplay').css('display', 'block');
    $('#cameraVideo').css('display', 'none');

}

export const setCameraStream = (stream) => {
    cameraStream = stream;
};