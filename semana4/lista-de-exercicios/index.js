// -----------------------------------  Exercícios de interpretação de código ----------------------------------- 

/*
1. Temos uma função que tem como parâmetro a entrada de um valor númerico - nesse caso 100 reais. 
Dentro dessa função é impressa uma mensagem para inserir o valor da cotação em dolar atual, e então
a função retorna o valor em reais. Ou seja. Converte dólar para reais. Se a cotação for 4 reais o valor
impresso para converter 100 dólares será 400 reais.

2. É uma função que tem como parametros o tipo de investimento e o valor a ser investido. Dependendo 
do tipo de invertimento que se deseja é calculado e retornado o valor final após esse investimento. 
Caso seja inserido algum valor incorreto de investimento, uma mensagem de erro é enviada ao usuário. 

3. Temos um loop tipo for em que separa o array números entre números pares e ímpares. Os parés 
são armazenados no array1 e os ímpares no array2. Ao final é impresso a quantidade de números, 
de números pares e ímpares.

4. Determina e imprimei qual o menor número e o maior número do array numeros. O menor será armazenado 
na variável número1 e o maior na variável número2. 

*/

// -----------------------------------  Exercícios de Lógica de Programação ----------------------------------- 

/*1. 
    const numeros = [1,2,3,4,5,6,7,8,9,10]
    for (let i = 0; i < numeros.length ; i++){
        console.log(numeros[i])
    }

    console.log("________")

    for (numero of numeros){
        console.log(numero)
    }

    console.log("________")

    numeros.forEach( numeros => {
        console.log(numeros)
    })

  2.

const booleano1 = true
const booleano2 = false
const booleano3 = true
const booleano4 = false

a) true e false e true => Resposta: false
b) (true e false) = false ou (false) => Resposta: false
c) [!(false e true)] = true e (false ou true) = true  => Resposta: true
d) true ou false => Resposta: true
e) true e false ou (true e true e true) => Resposta: true

  3. Não.

let numero = Number(prompt("Digite um número:"))
let resposta = [0]
let num = 0

let i = 0
while(i < (numero)) {
  num = num +1  
  if (num % 2 == 0){
      resposta.push(num)
    }
  console.log("i:",i) 
  console.log("num",num)  
 
  i++
}

console.log(resposta)


4.

function triangulo(a,b,c){
    if ((a == b) && (a==c) && (b==c)){
        console.log("Equilátero")
    }
    else if ((a!=b) && (a!=c) && (b!=c)){
        console.log("Escaleno")
    }
    else {
        console.log("Isósceles")
    }
}

triangulo(7,7,6)

5.

let num1 = Number(prompt("Numero 1:"))
let num2 = Number(prompt("Numero 2:"))

function number(num1,num2){
    if (num1 > num2){
        console.log(`${num1} é maior que ${num2}`)
        divisao(num1,num2)
        let diferenca = num1-num2
        console.log(`A diferença entre eles é: ${diferenca}`)
    }

    else if (num1 < num2) {
        console.log(`${num2} é maior que ${num1}`)
        divisao(num1,num2)
        let diferenca = num2-num1
        console.log(`A diferença entre eles é ${diferenca}`)
    }

    else {
        console.log("os números são iguais")
    }
}

function divisao(num1,num2){
    if ((num1 % num2) == 0){
        console.log(`${num1} é divisível por ${num2}`)
        console.log(`${num2} não é divisível por ${num1}`)
    }

    else if ((num2 % num1) == 0){
        console.log(`${num2} é divisível por ${num1}`)
        console.log(`${num1} não é divisível por ${num2}`)
    }
}

number(num1,num2)

// -------------------------------------- Exercícios de Funções ----------------------------------- 
1.

let maior = 0
let menor = 999
let array_maior = []
let array_menor = []

array = [10,12,33,44,5,76,27,58,19]
function metodoArray(array) {
    for (number of array){
        if (number < menor){
            menor = number
            array_menor.push(number)
        } else {
            maior = number
            array_maior.push(number)
        }
    }
    console.log("menor:", array_menor)
    console.log("maior:", array_maior)
}

metodoArray(array)

2.

let future = () => {
    alert("Hello Future4")
}
future()


// -------------------------------------- Exercícios de Objetos ----------------------------------- 
1. 
Array: é uma lista de elementos
Objetos: conjunto de pares chave / valor

2.

function criaRetangulo(x,y){
    const retangulo = {
        largura : x,
        altura : y,
        perimetro: (2*(x+y)),
        area: x*y
    }
    return retangulo
}
console.log(criaRetangulo(3,3))

3.

function criaFavorito(titulo, ano, diretor, atores){
    const favorito = {
        titulo: titulo,
        ano: ano,
        diretor: diretor,
        ator: atores,
    }
    console.log(`Venha assistir ao filme ${favorito.titulo}, de ${favorito.ano}, dirigido por ${favorito.diretor} e estrelado por ${favorito.ator}`)
}

criaFavorito("Velozes e Furiosos", 2001,"Rob L. Cohen",["Vin Diesel"," Paul Walker"," Michelle Rodriguez"," Jordana Brewster"])

4.
*/





