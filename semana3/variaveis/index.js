// Exercícios de interpretação de código

/*

----------------------- INTERPRETAÇÃO DE CÓDIGO --------------------

1. Será impresso: 10 5
2. Será impresso: 10 10 10 



----------------------- ESCRITA DE CÓDIGO 1 --------------------
*/
// QUESTAO 1

let name
let idade

name = prompt("Qual o seu nome?")
console.log(typeof(name))
idade = prompt("Qual sua idade?")
console.log(typeof(idade))

// d) O resultado foi undefined. Isso se deve ao fato de não termos atribuido valores às variáveis ou ter desginado algum tipo a elas, como string, number, float, etc.

// e) notei que o próprio js atribiu valores strings para ambos valores iniciados pelo o usuário às variáveis. Mesmo que idade seja um número, foi descrito como uma string.

//console.log("Olá ", name, " você tem ", idade, " anos.")

// QUESTAO 2

let name = prompt("Qual o seu nome?")
console.log("name")
let surname = prompt("Qual seu sobrenome?")
console.log(surname)
let age = prompt("Qual sua idade?")
console.log(age)
let city = prompt("Qual a cidade que você está falando?")
console.log(city)
let neigh = prompt("Qual seu bairro?")
console.log(neigh)

// QUESTAO 3

let foods = ["umbigo de banana", "tropeiro", "pão de queijo", "feijoada", "churrasco"]
console.log(foods)
console.log("Essas são as minhas comidas prediletas:")
console.log(foods[0])
console.log(foods[1])
console.log(foods[2])
console.log(foods[3])
console.log(foods[4])

foods[0] = prompt("Usuário qual sua comida predileta?")
console.log(foods)

// QUESTAO 4

let question = ["Você é homem?", 
"Você gosta de viajar?",
"Você gosta de futebol?"]
console.log(question)

let answer = [true, true, true]
console.log(answer)

console.log(question[0],answer[0])
console.log(question[1],answer[1])
console.log(question[2],answer[2])
