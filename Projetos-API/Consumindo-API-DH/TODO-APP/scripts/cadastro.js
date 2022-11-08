    const API_URL = 'https://ctd-todo-api.herokuapp.com/v1';

    // CRUD - CRIAR USUARIO
    function cadastrarUser (){
        // Função é acionada no DOM pega valores do input e aciona a função CriarUmUsuario passando a const usuario
        const usuario = {
            firstName: document.getElementById('name').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value, 
            RepeatPassword: document.getElementById('RepeatPassword').value
        }
        
        criarUmUsuario(usuario)
    
        // imprimir msg na tela
    
    }

    function criarUmUsuario(usuario) {

        var configuracoes = {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }
        // API_URL('https://ctd-todo-api.herokuapp.com/v1')
        fetch(`${API_URL}/users/`, configuracoes)
            .then(function (respostaDoServidor) {
                
                if (!respostaDoServidor.ok) {
                    throw new Error('O usuário informado já está cadastrado!');
                } 
                //console.log(respostaDoServidor.status);
    
                if (respostaDoServidor.status >= 400 && respostaDoServidor.status < 600) {
                    throw new Error('Erro de resposta do servidor!')
                }

                // Retorno apenas dos dados convertidos em JSON.
                let JSON = respostaDoServidor.json();
                // Nota: Você pode ter acesso ao corpo da informação sem convertê-la:
                // respostaDoServidor.body(); 

                // Retorno da promessa convertida em JSON.
                return JSON;
            })
            .then(function (respostaDoServidorEmJSON){
                
                alert('Usuário criado com sucesso!')

                let URL_LISTA = "index.html";
                window.location.href = URL_LISTA;
                
                // Resultado da promessa convertida em JSON.
                console.log('POST criarUmUsuario() \n', respostaDoServidorEmJSON)
            })
            .catch(function(Error){
                alert(Error.message);
                limparForm();
            });
    }

    function limparForm(){
        window.focus();
        campos = document.getElementsByTagName("input");
        for (var x=0; x < campos.length; x++) {
            if (campos[x].id != "btnCadastrar"){
                campos[x].value = "";
            }
        }
    }

    // Eventos
    document.getElementById('btnCadastrar')
        .addEventListener('click', cadastrarUser)

