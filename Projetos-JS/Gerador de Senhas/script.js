//Funções

//Declarei variaveis globais que são utilizadas nas funções
let passwordLenght = 8
const inputPassword = document.getElementById("password")


//Função que gera a senha aleatoria
function generatePassword(){


    //Constante com todos os caracteres que serão usados na senha
    const chars = "abcdefghjlmnpqrstuvxzABCDEFGHJLMNPQRSTUVXZ123456789?.!@#*()$%"

    // variavel que vai armazenar os caracteres sorteados no for
    let password = ""

    
    
    for(let i = 0; i < passwordLenght; i++){
        const randomNumber = Math.floor(Math.random() * chars.length)
        
        password += chars.substring(randomNumber, randomNumber+ 1)
    }


    // pega o elemento armazenado na variavel global e insere o valor da variavel password
  inputPassword.value = password

}

// utiliza api do navegador para copiar 
function copy(){

    navigator.clipboard.writeText(inputPassword.value)
}


// Constante que contem o elemento ranger
const inputPasswordLenght = document.getElementById("password-lenght")
// evento que aciona a função que faz o elemento a variavel global receber o valor que está no ranger 
// e aciona a função generatePassword()
inputPasswordLenght.addEventListener("input", function(){
    passwordLenght = inputPasswordLenght.value

    generatePassword()
})


// Evento que aciona a função copy no button
const buttonCopy = document.getElementById("copy")
buttonCopy.addEventListener("click", copy)


const btnGerarSenha = document.getElementById("gerar")
btnGerarSenha.addEventListener("click",generatePassword)


//aciona a função sempre q a pagina é carregada
generatePassword()