/*1.

i=0
valor=0
i=1
valor=1
i=2
valor=3
i=3
valor=6
i=4
valor=10
i=5
stop

Será impresso o valor: 10

2.
a) Todos os número maiores que 18 presentes no array: 19,21,23,25,27,30
b) Sim, você poderia utilizar o break pra determinado valor. Como por exemplo deseja o
elemento 15 que é índice 3. Você pode criar um if que quando chegar nesse índice o loop
é cessado, e você têm acesso a esse valor.

3.

a)
let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for (number of array){
    console.log(number)
}

b)
let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for (number of array){
    console.log(number/10)
}

c)
let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let novo_array = []

for (let i = 0; i < array.length ; i++){
    let resto = array[i]%2
    if (resto == 0){
        novo_array.push(array[i])
    }
}

console.log(novo_array)

d)
let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let novo_array = []

for (let i=0; i < array.length; i++){
    novo_array.push(`O elemento do índex ${i} é: ${array[i]}`)
}
console.log(novo_array)

e)

let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior = 0
let menor = 99999999999999999999999999999

for (let i=0; i < array.length; i++){

    if (array[i] > maior){
        maior = array[i]
    }

    if (array[i] < menor){
        menor = array[i]
    }
}
console.log(`O maior número é: ${maior} e o menor número é: ${menor}`)

*/

//DESAFIO 1

/*

---------------------------------------------------------------

quantidadeTotal = 4
quantidadeAtual = 2

---------------------------------------------------------------

asteriscos < 2 + 1; 

saindo do for lista = "000"
asteriscos=3
printa "000"

quantidadeAtual = 3

---------------------------------------------------------------

quantidadeTotal = 4
quantidadeAtual = 3

---------------------------------------------------------------

asteriscos < 3 + 1; 

saindo do for lista = "0000"
asteriscos=4
printa "0000"

quantidadeAtual = 4

---------------------------------------------------------------

quantidadeTotal = 4
quantidadeAtual = 4

---------------------------------------------------------------

STOP

*/

//DESAFIO 2

/* let num1 = Number(prompt("Qual número você está pensando?"))
console.log("Vamos Jogar!")
let i = 0

while (num1 != num2){
    var num2 = Number(prompt("Qual número você acha que ela(e) está pensando?"))

    if (num1>num2){
        console.log("Errrrrrrrou, ele é maior")
        console.log(`O número chutado foi: ${num2}`)
        console.log(" ")
    }
    else if (num1<num2){
        console.log("Errrrrrrrou, ele é menor")
        console.log(`O número chutado foi: ${num2}`)
        console.log(" ")
    }
    else 
    {
        break
    }
    i = i +1
}
console.log(`Você acertou o número que ele escolheu: ${num1} em ${i} tentativas`) */


//DESAFIO 3

/* let num1 = Math.floor((Math.random()*100));
console.log(num1)
console.log("Vamos Jogar!")
let i = 0

while (num1 != num2){
    var num2 = Number(prompt("Qual número você acha que ela(e) está pensando?"))

    if (num1>num2){
        console.log("Errrrrrrrou, ele é maior")
        console.log(`O número chutado foi: ${num2}`)
        console.log(" ")
    }
    else if (num1<num2){
        console.log("Errrrrrrrou, ele é menor")
        console.log(`O número chutado foi: ${num2}`)
        console.log(" ")
    }
    else 
    {
        break
    }
    i = i +1
}
console.log(`Você acertou o número que ele escolheu: ${num1} em ${i} tentativas`) */




