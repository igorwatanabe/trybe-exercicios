// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:A soma total de 1 a 50 é:

let numeros = 0;

for(let index = 1; index <= 50; index+=1 ){
    numeros += index;
  }
  console.log('A soma total de 1 a 50 é: ' + numeros);

//2 
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let num = 0;
for( let index = 2; index <= 150; index +=1){
    if(index % 3 === 0){
        num += 1; 
    }
}    
    if (num === 50){
        console.log('Quantidade igual a 50!');
    } else {
        console.log('nao deu');
    }
 


// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let player1 = 'tesoura';
let player2 = 'pedra';

if (player1 === 'tesoura' && player2 === 'papel' || player1 === 'pedra' && player2 === 'tesoura' || player1 === 'papel' && player2 === 'pedra'){
    console.log('Player 1 won');
} else if (player2 === 'tesoura' && player1 === 'papel' || player2 === 'pedra' && player1 === 'tesoura' || player2 === 'papel' && player1 === 'pedra'){
        console.log('Player 2 won');
} else {
    console.log ('A Ties')
}

//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

let idade = 16;

idade >=18 ? (console.log("A pessoa é maior de idade")) : (console.log('Menor de idade'));

// 5 

//Crie um algoritmo que recebe a idade de Carolzita , Flavio e Noel e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.
let carolzita = 26;
let flavio = 28;
let noel = 38;

let idades = [26,28,38];
let maisNovo = idades[0];
for(let index = 0; index < idades.length; index +=1){
    if(maisNovo > idades[index]){
        maisNovo === idades[index];
    }
}
console.log('Pessoa ' + maisNovo);





const n = 100;

let resultado = 0;
for (let index = 0; index <= n; index += 1) {
  resultado += index
};
console.log(resultado)
