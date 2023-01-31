function salvarUser(event){
    event.preventDefault();

    // const formData = {
    //  nome : document.getElementById("nomeUser").value,
    //  idade : document.getElementById("idadeUser").value
    // }

    // const url = "/crud-rest-api/salvar/";

    // const settings = {
    //     method:"POST",
    //     headers:{
    //         'Content-Type' : 'application/json'
    //     },
    //     body: JSON.stringify(formData)
    // }
    // fetch(url,settings)

    $.ajax({
        method:"POST",
        url: "crud-rest-api/salvar",
        data: JSON.stringify({
            nome : document.getElementById("nomeUser").value,
            idade : document.getElementById("idadeUser").value
        }),
        contentType:"application/json; charset=utf-8",
        success: function(response) {
            alert("Sucesso")
            console.log(response)
        }
    }).fail(function(xhr,status,errorThrown){
        alert("Erro ao salvar:" + xhr.responseText)
    });



 }
document.getElementById('btnAdicionar')
.addEventListener('click',salvarUser);






