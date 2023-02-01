let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//console.log(numbers);

let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}
let mediaAritmetrica = soma/numbers.length;
if (mediaAritmetrica > 20){
    console.log('valor maior que 20');
} else {
    console.log('valor menos ou igual a 20');
}
console.log(mediaAritmetrica);

// exibindo maior numero do array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = numbers[0];

for (let index1 = 0; index1 < numbers.length; index1 += 1) {
    if (maiorNumero < numbers[index1]) {
        maiorNumero = numbers[index1];
    }
}
console.log(maiorNumero);

//imprimindo numeros impares
let numbers = [6, 10, 4, 20, 70, 8, 100, 2, 36, 28];
let numeroImpar =0;

for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    if (numbers[index2] % 2 !== 0) {
        numeroImpar +=1;
    }
    if (numeroImpar === 0) {
        console.log('nenhum valor ímpar encontrado');
    } else {
        console.log(numeroImpar);
    }
}
console.log(numeroImpar);

//menor valor de um array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];

for (let index1 = 0; index1 < numbers.length; index1 += 1) {
    if (menorNumero > numbers[index1]) {
        menorNumero = numbers[index1];
    }
}
console.log(menorNumero);

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let numbers = [];

for (let index = 1; index <= 25; index +=1){
    numbers.push(index);
}

console.log(numbers);


//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
let numbers = [];

for (let index = 1; index <= 25; index +=1){
    numbers.push(index);
}
console.log(numbers);
for (let index1 = 0; index1 < numbers.length; index1 +=1){
    console.log(numbers[index1]/2);
}


 
  