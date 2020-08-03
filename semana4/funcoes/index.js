// exercicio 1

/*

1. a) 10 e 50
   b) nada apareceria no console.log

2. a) Darvas, Goli
   b) Amanda, Caio

3. Ele pega os elementos pares de um array e eleva ao quadrado
    quadradoPares

4. a)
        function mensagem(){
            return "Eu sou Joao, tenhho 24 anos, moro em BH e sou estudante"
        }
        console.log(mensagem())

b)

let nome = prompt("Qual o seu nome:")
let idade = Number(prompt("Qual sua idade:"))
let cidade = prompt("Qual cidade você mora:")
let status = Boolean(prompt("Você é estudante (true/false)?"))

function mensagem(nome, idade, cidade, status){

    if (status == true) {
        status = "sou"
    }
    else {
        status = "não sou"
    }
    return `O meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e ${status} estudante`
}

console.log(mensagem(nome,idade,cidade,status))

5.
a)

function numeroSoma(num1,num2){
    resultado= num1 + num2
    return resultado
}

console.log(numeroSoma(2,3))

b)

function numeroSoma(num1,num2){
    if (num1 > num2){
        resultado= true
    }
    else {
        resultado= false
    }
    return resultado
}

console.log(numeroSoma(3,2))

c)

function getMessage(num){
    for (let i = 0; i<num; i++){
        console.log("oi você está aqui!")
    }
}
getMessage(15)

6.

a)

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function tamanhoArray(array){
    tamanho = array.length
    return tamanho
}

console.log(tamanhoArray(array))

b)
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function numeroPar(num){
    if (num % 2 == 0){
        par = true
    }
    else{
        par = false
    }
    return par
}

console.log(numeroPar(11))

c)


let pares = []
function tamanhoArray(array){
    for (let i=0; i< array.length; i++){
              
        if (array[i] % 2 == 0){
            pares.push(array[i])
        }
    }
    tamanho = pares.length
    return tamanho
}

console.log(tamanhoArray([0,1,2,3,4,5,6]))

*/













