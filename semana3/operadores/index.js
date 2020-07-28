/* **Exercícios de interpretação de código** 

1. a. false
   b. false
   c. true
   d. bolean

2. a. undefined
   b. null
   c. 11
   d. 3
   e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
   f. 9

**Exercícios de escrita de código 1 **  */

/* let user_age = prompt('Qual a sua idade?');
user_age = Number(user_age);

let friend_age = prompt('Qual a idade de seu amigo?');
friend_age = Number(friend_age);

let state = prompt("Sua idade é maior que a do seu amigo?");
console.log(Boolean(state))

console.log("A diferença de idade é:", (user_age - friend_age)); */

/* **Exercícios de escrita de código 2 **  */

/* let num = prompt('Digite um número par:');
num = Number(num);

console.log('O resto da divisão desse número por 2 é:', num%2); */

// sempre será igual a zero a divisão, porque o resto é 0 em uma divisão de uma número par
// ao inserir um número impar o resto da divisão dará um número diferente de 0.

/* **Exercícios de escrita de código 3 **  */

/* let listaDeTarefas = [];
listaDeTarefas[0]= prompt('Quais tarefas você deseja realizar hoje?');
listaDeTarefas[1]= prompt('Quais tarefas você deseja realizar hoje?');
listaDeTarefas[2]= prompt('Quais tarefas você deseja realizar hoje?');
console.log(listaDeTarefas);

let i = prompt('Digite um indíce de 0 a 2:');
let removed = listaDeTarefas.splice(i,1);
console.log(listaDeTarefas); */

/* **Exercícios de escrita de código 4 **  */

/* let nomeDoUsuario = prompt('Qual o seu nome?');
let emailDoUsuario = prompt('Qual o seu email?');
console.log(`O email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vinda(o), ${nomeDoUsuario}`);
 */










// FAVOR RELEVAR O DESAFIO EXTRA 1 - EMPOLGUEI AQUI E FIZ PARA CONVERTER DE QQ TIPO DE UNIDADE DE TEMPERATURA.








// DESAFIO EXTRA 1

/* let measure_in = prompt("De (celsius / fahrenheit / kelvin)");
let temp = prompt("Digite o valor de temperatura que deseja converter:");
temp = Number(temp);

   if (measure_in == "celsius") {
         let measure_out = prompt("Para (fahrenheit / kelvin)");
         if (measure_out == "kelvin"){
            kelvin = temp + 273.15;
            console.log(`A temperatura é ${kelvin}K`);
         }
         else{
            fahrenheit = temp*9/5 + 32;
            console.log(`A temperatura é ${fahrenheit}ºF`);
         }
   } else if (measure_in == "fahrenheit") {
      let measure_out = prompt("Para  (celsius / kelvin)");
      if (measure_out =="celsius"){
         celsius = (temp - 32) * 5/9;
         console.log(`A temperatura é ${celsius}ºC`);
      }
      else {
         kelvin = (temp - 32)*5/9 + 273.15;
         console.log(`A temperatura é ${kelvin}K`);
      }
   }
   else {
      let measure_out = prompt("Para (celsius / fahrenheit)");
      if (measure_out == "celsius"){
         celsius = temp - 273.15;
         console.log(`A temperatura é ${celsius}ºC`);
      } 
      else {
         fahrenheit = ((temp - 273.15)*9/5)+32;
         console.log(`A temperatura é ${fahrenheit}ºF`);
      }

   }  */




   
// DESAFIO EXTRA 2

/* const value = 0.05;
let price = 280 * value;
console.log(`Preço a ser pago pela residência que consumiu 280KW/h é: ${price}`);

let amount = prompt("Qual a quantidade de quilowatt/h de energia consumida?")
amount=Number(amount);
let price_variable = amount * value;
console.log(`O valor consumido pela residência é: ${price_variable}`)

let discount = 0.85;
discount = Number(discount)
let price_with_discount = price * discount;
console.log(`Preço a ser pago pela residência que consumiu 280KW/h é: ${price_with_discount}`); */

// DESAFIO 3

let kg = 20*0.4536;
console.log(`20lb equivalem a ${kg} kg`);

let oz = 10.5 * 35.274;
console.log(`10.5oz equivalem a ${oz} kg`);

let milha = 100* 0.00062137;
console.log(`100milha equivalem a ${milha} m`);

let pe = 50* 0.3048;
console.log(`50ft equivalem a ${pe} m`);

let gal = 103.56* 3.79;
console.log(`50gal equivalem a ${gal} m`);

let xic = 450* 0.24;
console.log(`450xic equivalem a ${xic} l`);


