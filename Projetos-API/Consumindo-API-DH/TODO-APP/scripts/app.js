window.onload = function() {

    // Services responsáveis pela comunicação com a API.
    /**
     * Base do endereço da API.
     * @constant API_URL
     * @type string
    */
      const API_URL = 'https://ctd-todo-api.herokuapp.com/v1';
       /**
     * Captura e validação dos dados do usuário enviado pelo formulário.
     * @param {*} eventoDoFormulario Objeto de evento do formulário.
     */

    function validarCredenciaisDoUsuario(eventoDoFormulario) {

        // Para não atualizar a página.
        eventoDoFormulario.preventDefault();

        // Destruturando/Separando os campos e-mail e senha do formulário.
        let [email, senha] = eventoDoFormulario.target;

        // Armazena e-mail e senha em variáveis.
        let emailDoUsuario = email.value;
        let senhaDoUsuario = senha.value;

        // Cria um objeto contendo as credenciais do usuário.
        let credenciaisDoUsuario = {
            email: emailDoUsuario,
            password: senhaDoUsuario
        }

        console.log('passei');

        // Requisição de autenticação do usuário.
        loginUsuario(credenciaisDoUsuario);

    }
    /**
     * Service de autenticação do usuário.
     * @param credenciaisDoUsuario Objeto contendo e-mail e senha.
     * @type { email: string, password: string } 
     */
    function loginUsuario(credenciaisDoUsuario) {
    
        var configuracoes = {
            method: 'POST',
            body: JSON.stringify(credenciaisDoUsuario),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
        }
        
        fetch(`${API_URL}/users/login`, configuracoes)
            .then(function (respostaDoServidor) {
                //console.log(respostaDoServidor.ok);
                if (!respostaDoServidor.ok) {
                    throw new Error('Login ou senha incorretos!');
                } 
                //console.log(respostaDoServidor.status);

                if (respostaDoServidor.status >= 400 && respostaDoServidor.status < 600) {
                    throw new Error('Erro de resposta do servidor!')
                }
                
                // Retorno apenas dos dados convertidos em JSON.
                var JSON = respostaDoServidor.json();

                //console.log(JSON);
                // Retorno da promessa convertida em JSON.
                return JSON;
            })
            .then(function (respostaDoServidorEmJSON) {
                
        
                let tokenDoUsuario = respostaDoServidorEmJSON.jwt;
                // Resultado da promessa convertida em JSON. 
                localStorage.setItem('token', tokenDoUsuario);
                pedirInformacoesDoUsuario(tokenDoUsuario);
                
            })
            .catch(function(Error) { 
                msgErro(Error.message)
            });
    }


    /**
     * Pedi os dados de cadastro do usuário.
     * @param {string} tokenDoUsuario Token JWT da autenticação do usuário.
     */
    function pedirInformacoesDoUsuario(tokenDoUsuario) {

        // Configurações da requisição GET.
        let configuracoes = {
            method: 'GET',
            headers: {
                'authorization': tokenDoUsuario
            },
        }

        // Requisição para retorno dos dados de cadastro do usuário.
        fetch(`${API_URL}/users/getMe/`, configuracoes)
            .then(function (respostaDoServidor) {
                    
                // Retorno apenas dos dados convertidos em JSON.
                let JSON = respostaDoServidor.json();

                // Retorno da promessa convertida em JSON.
                return JSON;
            })
            .then(function (respostaDoServidorEmJSON) {

                localStorage.setItem('@User', JSON.stringify(respostaDoServidorEmJSON));

                // Apresentando resultado final no console.log().
                console.log(`GET pedirInformacoesDoUsuario() ${JSON.stringify(respostaDoServidorEmJSON)}`);
                if (respostaDoServidorEmJSON != null){
                    redirecionarPagina();
                };

            });

    }

    function redirecionarPagina() {
        var URL_LISTA = "list.html";
        window.location.href = URL_LISTA;
    };

    function msgErro(mensagem){

        let erro = document.querySelector('.msgErro')
        erro.innerHTML = ` ${mensagem} `;
        limparForm();

    }

    function limparForm(){
        window.focus();
        campos = document.getElementsByTagName("input");
        for (var x=0; x < campos.length; x++) {
            if ((campos[x].id != "btnCadastrar") && (campos[x].id != "btnLogar")) {
                campos[x].value = "";
            }
        }
    }
    
    let formulario = document.getElementById('appToForm');
    formulario.addEventListener('submit', evento => validarCredenciaisDoUsuario(evento));

}
