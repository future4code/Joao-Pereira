// CRIANDO BARALHO COM NUMEROS E NAIPES E ATRIBUINDO VALOR A CADA CARTA

console.log("Bem vindo ao jogo de BlackJack!")

var retorno = confirm("Quer iniciar uma nova rodada?")

if (retorno == true){

   function Carta(){
      
      let num = Math.floor(Math.random()*13)+1
      valor = num
      if (num === 1){
         num ="A"
         valor = 11
      }
      else if (num === 11){
         num="J"
         valor = 10
      }
      else if (num === 12){
         num="Q"
         valor = 10
      }
      else if (num === 13){
         num="K"
         valor = 10
      }
      
      let naipe = Math.floor(Math.random()*4)+1
      if (naipe === 1){
         naipe ="coracao"
      }
      else if (naipe === 2){
         naipe="copas"
      }
      else if (naipe === 3){
         naipe="paus"
      }
      else if (naipe === 4){
         naipe="ouros"
      }

      carta = (`${num} de ${naipe}`)
      array = [carta,valor]
      return array
   }

   // DISTRIBUINDO CARTAS AOS JOGADORE
   usuario = Carta()
   usuario2 = Carta()
   computador = Carta()
   computador2 = Carta()

   //PONTUACAO DOS JOGADORES
   soma_usuario = Number(usuario[1]) + Number(usuario2[1])
   soma_computador = Number(computador[1]) + Number(computador2[1])
   
   console.log(`Usuario cartas: ${usuario[0]} e ${usuario2[0]} | Pontuação: ${soma_usuario}`)
   console.log(`Computador cartas: ${computador[0]} e ${computador2[0]} | Pontuação: ${soma_computador}`)

   if (soma_usuario > soma_computador){
      console.log("Usuário Venceu!")
   } else if (soma_usuario < soma_computador){
      console.log("Computador Venceu!")
   }
   else console.log("Deu empate!")

} 
else{console.log("O jogo acabou.")

}
