    window.onload = function() {
        infoDosUser();  
        updadeTabela();
    }

    const API_URL = 'https://ctd-todo-api.herokuapp.com/v1';

    function infoDosUser(){
        tokenDoUsuario = localStorage.getItem('token')
        let dadosUser = JSON.parse(localStorage.getItem('@User'))
        if (dadosUser !== null) { 
            let userHTML = document.getElementById('labelUser');
            userHTML.innerText = `Usuário:  ${dadosUser.firstName}`
            pedirTodasTarefas();  
        }
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

            });
    }

    function pedirTodasTarefas() {

        let configuracoes = {
            method: 'GET',
            headers: {
                'authorization': localStorage.getItem('token')
            },
        }

        // URL(https://jsonplaceholder.typicode.com/posts)
        fetch(`${API_URL}/tasks`, configuracoes)
            .then(function (respostaDoServidor) {
                
                // Retorno apenas dos dados convertidos em JSON.
                var JSON = respostaDoServidor.json();

                // Retorno da promessa convertida em JSON.
                return JSON;
            })
            .then(function (respostaDoServidorEmJSON) {

                localStorage.setItem('tarefas', JSON.stringify(respostaDoServidorEmJSON)) ?? []
                
                // Resultado da promessa convertida em JSON. 
                console.log('GET pedirTodasTarefas() \n', respostaDoServidorEmJSON)
                // criarLista(respostaDoServidorEmJSON)
                limparCampo()
                updadeTabela()
            });
    }

    function updadeTabela(){
        limparTarefas()
        const tarefas = JSON.parse(localStorage.getItem("tarefas")) ?? []
        tarefas.sort(function(x, y) {
            return Number(x.completed) - Number(y.completed);
         });
        tarefas.forEach(criarLista)
    }

    function criarLista(tarefas) {
        let listaHTML = document.createElement('div')

        listaHTML.innerHTML = `
        <div class=" card-body m-1 card-md-3 shadow border rounded" style="width: 22.7rem;">


        
        <p class="card-text text-lg text-justify" id="desc${tarefas.id}" >${tarefas.description}</p>

        <div class="d-flex justify-content-between align-items-center">

        
        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">${tarefas.createdAt.substr(0, 10).split('-').reverse().join('/')}</div>  
       
        
            
                <div class="form-check form-switch">
                <input class="" type="checkbox"  id="${tarefas.id}" onclick="atzTarefa(${tarefas.id})" ${tarefas.completed ? 'checked' : ''}>
                <span class="selecionarBotao"></span>
                
                </div>
            
       
        
        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">${tarefas.completed ? "Finalizada" : "Pendente"}</div>

        
        <button class="btn btn-sm btn-outline-secondary" id="delete" onclick="deletarUmaTarefa(${tarefas.id})">Deletar</button>
        
        </div>

        </div>
        
        `
        
        document.querySelector('#listaTarefas').appendChild(listaHTML)   
    }

    function criarUmaTarefa(corpoDaTarefa) {

        var configuracoes = {
            method: 'POST',
            body: JSON.stringify(corpoDaTarefa),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'authorization': localStorage.getItem('token')
            },
        }

        // URL(https://jsonplaceholder.typicode.com/posts)
        fetch(`${API_URL}/tasks/`, configuracoes)
            .then(function (respostaDoServidor) {
                    
                // Retorno apenas dos dados convertidos em JSON.
                var JSON = respostaDoServidor.json();
                // Nota: Você pode ter acesso ao corpo da informação sem convertê-la:
                // respostaDoServidor.body(); 

                // Retorno da promessa convertida em JSON.
                return JSON;
            })
            .then(function (respostaDoServidorEmJSON) {
                
                // Resultado da promessa convertida em JSON. 
                console.log('POST criarUmaTarefa() \n', respostaDoServidorEmJSON)
                pedirTodasTarefas()
            });
    }

    function deletarUmaTarefa(idDaTarefa) {

        var configuracoes = {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'authorization': localStorage.getItem('token')
            },
        }

        // URL(https://jsonplaceholder.typicode.com/posts/1)
        fetch(`${API_URL}/tasks/${idDaTarefa}`, configuracoes)
            .then(function (respostaDoServidor) {
                            
                // Retorno apenas dos dados convertidos em JSON.
                var JSON = respostaDoServidor.json();
                // Nota: Você pode ter acesso ao corpo da informação sem convertê-la:
                // respostaDoServidor.body(); 

                // Retorno da promessa convertida em JSON.
                return JSON;
            })
            .then(function (respostaDoServidorEmJSON) {
                    
                // Resultado da promessa convertida em JSON. 
                console.log('DELETE deletarUmaTarefa() \n',respostaDoServidorEmJSON)
                pedirTodasTarefas()
            });

    }

    function atualizarUmaTarefa(idDaTarefa, corpoDaTarefa) {

        var configuracoes = {
            method: 'PUT',
            body: JSON.stringify(corpoDaTarefa),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'authorization': localStorage.getItem('token')
            },
        }
        
        // URL(https://jsonplaceholder.typicode.com/posts/1)
        fetch(`${API_URL}/tasks/${idDaTarefa}`, configuracoes)
            .then(function (respostaDoServidor) {
                        
                // Retorno apenas dos dados convertidos em JSON.
                var JSON = respostaDoServidor.json();
                // Nota: Você pode ter acesso ao corpo da informação sem convertê-la:
                // respostaDoServidor.body(); 

                // Retorno da promessa convertida em JSON.
                return JSON;
            })
            .then(function (respostaDoServidorEmJSON) {
                
                // Resultado da promessa convertida em JSON. 
                console.log('PATCH atualizarUmaTarefa() \n', respostaDoServidorEmJSON)
                pedirTodasTarefas()
            });
    }

    function adcTarefa(){
        const corpoDaTarefa = {
            "id": 1,
            "description": document.getElementById('descTarefa').value,
            "completed": false,
            "userId": 1,
            "createdAt": Date.now
        }
        criarUmaTarefa(corpoDaTarefa)

    }

    function atzTarefa(idDaTarefa){
        
        let checkbox = document.getElementById(idDaTarefa);
        let tarefa = document.getElementById('desc' + idDaTarefa);
        
        const corpoDaTarefa = {
            "description": tarefa.innerText,
            "completed": checkbox.checked
        }
        atualizarUmaTarefa(idDaTarefa, corpoDaTarefa);

    }

    const limparTarefas = () => {
        const todoList = document.getElementById('listaTarefas');
        while (todoList.firstChild) {
            todoList.removeChild(todoList.lastChild);
        }
    }

    const limparCampo = ()=>{
        const campos = document.getElementById('descTarefa')
        campos.value = ""
    }

    function fecharSessao(){
        window.localStorage.clear();
        window.location.href = 'index.html';
    }

    document.getElementById('fecharSessao')
        .addEventListener('click',fecharSessao);

    document.getElementById('btnAdicionar')
        .addEventListener('click', adcTarefa);
        

