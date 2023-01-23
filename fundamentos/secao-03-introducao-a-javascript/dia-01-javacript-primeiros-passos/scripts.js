const myName = "Igor";
const birthCity = 'Presidente Prudente';
let birthYear = 1997;
birthYear = 2030;


console.log(myName, birthCity, birthYear);
console.log(birthYear);


// area e perimetro retangulo
const base = 5;
const height = 8;
const area = base * height;
const perimeter = base * 2 + height * 2;

console.log(area, perimeter);


const notaCandidato = 90;
if (notaCandidato >= 80) {
    console.log('Parabens, voce faz parte do grupo de pessoas aprovadas!');
} else if (notaCandidato < 80 && notaCandidato >= 60) {
    console.log('Voce esta na nossa lista de espera');
} else {
    console.log('Infelizmente, voce reprovou.');
}
/* 
  1. Hora de fazermos em conjunto! 🏄‍♀️
   Agora vamos ter alguns minutos para construir um algoritmo com a seguinte descrição:
   Crie dois valores num1 e num2.
   Se os valores forem iguais some os dois
   Caso contrário multiplique num1 por num2.
   Por ultimo exiba o valor final no console.
*/

// 2.Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.

let num1 = 20;
let num2 = 20;

if (num1 === num2) {
    console.log (num1 + num2);
} else {
    console.log(num1 * num2);
}


const num1 = 10;
const num2 = 20;

if (num1 > num2) {
    console.log (num1);
} else {
    console.log(num2);
}

// Current Hour
const currentHour = 13;
let message = "";
if (currentHour >= 22) {
    message = 'Não deveríamos comer nada, é hora de dormir';
} else if(currentHour >=18 && currentHour < 22) {
    message = 'Rango da noite, vamos jantar :D';
} else if(currentHour >=14 && currentHour < 18) {
    message = 'Vamos fazer um bolo pro café da tarde?';
} else if(currentHour >=11 && currentHour < 14) {
    message = 'Hora do almoço!!!';
} else if (currentHour >=4 && currentHour < 11) {
    message = 'Hmmm, cheiro de café recém-passado';
} else {
    message = 'Dormindo zzz';
}
console.log(message);

// switch -- case
let processoSeletivo = 'aprovada';

switch(processoSeletivo) {
    case "aprovada":
        console.log ('Parabéns, você foi aprovada(o)!');
        break;
    case "lista":
        console.log('Você está na nossa lista de espera');
        break;
    case 'reprovada':
        console.log('Você foi reprovada(o)');
        break;
    default:
        console.log ('Informação incorreta');
        break;
}