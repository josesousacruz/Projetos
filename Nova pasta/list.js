function salvarUser(){

    var nome = document.getElementById("nomeUser").value
    var idade = document.getElementById("idadeUser").value

    $.ajax({
        method:"POST",
        url: "salvar",
        data: JSON.stringify({
            nome : nome,
            idade : idade
        }),
        contentType:"application/json; charset=utf-8",
        success: function(response) {
            alert("Sucesso")
        }
    }).fail(function(xhr,status,errorThrown){
        alert("Erro ao salvar:" + xhr.responseText)
    });
}

document.getElementById('btnAdicionar')
.addEventListener('click',salvarUser);






