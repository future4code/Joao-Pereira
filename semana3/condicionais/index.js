// Q1

/*
1. O código recebe um número por meio do usuário e é armazenado na variável respostaDoUsuário, como tipo Number.
Em seguida ele vê se o resto da divisão desse número por 3 é igual a 0. Se sim imprime: "Passou no teste" - números 
pares e se não imprime "Não passou no teste" -números ímpares. 
*/ 

// Q2

/*
a) o código é utilizado para o usuário entrar com o valor de uma fruta e retorna o preço desse alimento.
b) O preço da fruta Maça é R$ 2.25.
c) 5
*/ 

// Q3

/*
a) Ela pede ao usuário digitar uma valor, que é um Number e é constante.
b) se for 10: "Esse número passou no teste"
                "Essa mensagem é secreta!!!"

   se for -10: undefined 
c) Não será possível a variável mensagem receber o valor dentro do if. Assim, não retornará nada o console.log fora do bloco
*/ 

// Q4

/* let age = Number(prompt("Digite sua idade:"))
if (age >=18){
    console.log("Você pode dirigir!")
}
else{
    console.log("Você não pode dirigir!")
} */

// Q5

/* let turno = prompt("Digite o seu turno de estudo (M/T/N):")

if (turno == "M"){
    console.log("Bom dia!")
}
else if (turno =="T"){
    console.log("Boa tarde!")
}
else{
    console.log("Boa noite!")
} */

// Q6

/* let turno = prompt("Digite o seu turno de estudo (M/T/N):")
let message

switch (turno) {
    case "M": 
        message = "Bom dia!"
        break;
    case "T": 
        message = "Boa tarde!"
        break;
    case "N":
        message = "Boa noite!"
        break;
    default:
        message: "digite algo"
        break;
}

console.log(message) */

// Q7
/* 
let genre = prompt("Qual o gênero do filme? (fantasia/terror/acao):")
let price = Number(prompt("Qual o valor do ingresso?"))

if (genre == "fantasia" && price < 15){
    console.log("Bom filme!")
}
else{
    console.log("Escolha outro filme :(")
} */

// DESAFIOS

// DESAFIO 1 

/* let genre = prompt("Qual o gênero do filme? (fantasia/terror/acao):")
let price = Number(prompt("Qual o valor do ingresso?"))
let snack = prompt("Qual snack você deseja (pipoca, chocolate, doce)?")

if (genre == "fantasia" && price < 15){
    console.log(`Bom filme! E com ${snack}`)
}
else{
    console.log("Escolha outro filme :(")
} */

// DESAFIO 2

let name = prompt("Digite o seu nome: ")
let game = prompt("Digite o tipo de jogo (IN: internacional; DO: doméstico)")
let stage = prompt("Digite o estágio (SF: semi-final; DT: decisão de terceiro lugar; FI: indica final")
let category = Number(prompt("Digite a sua categoria (1,2,3,4): "))
let quantity = Number(prompt("Quantidade de ingressos desejados: "))
let price = 0
const dolar = 4.10

if (game=="DO"){
    game = "Nacional";
    if (stage=="SF"){
        stage = "Semi-final"
        if (category = 1){
            price = 1320
            total_price = price * quantity;
        } else if (category = 2){
            price = 880
            total_price = price * quantity;
        } else if (category = 3){
            price = 550
            total_price = price * quantity;
        } else {
            price = 220
            total_price = price * quantity;
        }
    } else if (stage=="DT"){
        stage = "Decisão de Terceiro Lugar"
        if (category = 1){
            price = 660
            total_price = price * quantity;
        } 
        else if (category = 2){
            price = 440
            total_price = price * quantity; 
        } 
        else if (category = 3){
            price = 330
            total_price = price * quantity;
        } 
        else {
            price = 170
            total_price = price * quantity;
        }

    } else {
        stage = "Final"
        if (category = 1){
            price = 1980
            total_price = price * quantity;
        } 
        else if (category = 2){
            price = 1320
            total_price = price * quantity;
        } 
        else if (category = 3){
            price = 880
            total_price = price * quantity; 
        } 
        else {
            price = 330
            total_price = price * quantity;
        }

    }
    console.log("---Dados da compra---")
    console.log(`Nome do Cliente: ${name}`)
    console.log(`Tipo do jogo: ${game}`)
    console.log(`Etapa do Jogo: ${stage}`)
    console.log(`Categoria: ${category}`)
    console.log(`Quantidade de Ingressos: ${quantity}`)
    
    console.log("---Valores---")
    console.log(`Valor do Ingresso: R$ ${price}`)
    console.log(`Valor do Total: R$ ${total_price}`)
}
else {
    game = "Internacional";
    if (stage=="SF"){
        stage = "Semi-final"
        if (category = 1){
            price = 1320 / dolar;
            total_price = price * quantity;
        } 
        else if (category = 2){
            price = 880 / dolar;
            total_price = price * quantity;
        } 
        else if (category = 3){
            price = 550 / dolar;
            total_price = price * quantity;
        } 
        else {
            price = 220 / dolar;
            total_price = price * quantity;
        }
    } 
    else if (stage=="DT"){
        stage = "Decisão de Terceiro Lugar"
        if (category = 1){
            price = 660 / dolar;
            total_price = price * quantity;
        } 
        else if (category = 2){
            price = 440 / dolar;
            total_price = price * quantity; 
        } 
        else if (category = 3){
            price = 330 / dolar;
            total_price = price * quantity;
        } 
        else {
            price = 170 / dolar;
            total_price = price * quantity;
        }

    } 
    else {
        stage = "Final"
        if (category = 1){
            price = 1980 / dolar;
            total_price = price * quantity;
        } 
        else if (category = 2){
            price = 1320 / dolar;
            total_price = price * quantity;
        } 
        else if (category = 3){
            price = 880 / dolar;
            total_price = price * quantity; 
        } 
        else {
            price = 330 / dolar;
            total_price = price * quantity;
        }

    }
    console.log("---Dados da compra---")
    console.log(`Nome do Cliente: ${name}`)
    console.log(`Tipo do jogo: ${game}`)
    console.log(`Etapa do Jogo: ${stage}`)
    console.log(`Categoria: ${category}`)
    console.log(`Quantidade de Ingressos: ${quantity}`)

    console.log("---Valores---")
    console.log(`Valor do Ingresso: U$ ${price}`)
    console.log(`Valor do Total: U$ ${total_price}`)
}





