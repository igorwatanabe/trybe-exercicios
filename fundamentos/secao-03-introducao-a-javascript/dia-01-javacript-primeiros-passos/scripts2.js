const a = 10;
const b = 5;
const c = 25;

//adicao
console.log(a + b);

//subtracao
console.log(a - b);

//multiplicacao
console.log(a * b);

//divisao
console.log(a / b);

//modulo
console.log(a % b);

// retornando o maior numero
if (a > b) {
    console.log(a);
} else {
    console.log(b);
}

// retornando o maior entre 3 numeros
if (a > b && a > c) {
    console.log(a);
} else if(b > a && b > c) {
    console.log(b);
}else{
    console.log(c);
}

// positivo negativo ou zero
const d = 0;
if (d > 0) {
    console.log('Positivo');
} else if(d < 0) {
    console.log('Negativo');
} else {
    console.log('Zero');
}

//angulos internos de um triangulo
const x = 50;
const y = 30;
const z = 100;

if (x + y + z === 180) {
    console.log(true);
} else {
    console.log(false);
}

//xadrez
const peca = 'QuEen'.toLowerCase();

switch(peca) {
    case "king":
        console.log ('Uma casa em qualquer direção');
        break;
    case "queen":
        console.log('Quantas casa quiser em qualquer direção');
        break;
    case 'bishop':
        console.log('Diagonal');
        break;
    case 'horse':
        console.log('Em L');
        break;
    case 'castle':
        console.log('frente ou lados');
        break;
    default:
        console.log ('Peça inexistente');
        break;
}

// convertendo nota em porcentagem

const porcentagem = 110;

if (porcentagem >=90 && porcentagem < 100) {
    console.log('A');
}else if (porcentagem >=80 && porcentagem < 90) {
    console.log('B');
}else if (porcentagem >=70 && porcentagem < 80) {
    console.log('C');
}else if (porcentagem >=60 && porcentagem < 70) {
    console.log('D');
}else if (porcentagem >=50 && porcentagem < 60) {
    console.log('E');
}else if (porcentagem < 50) {
    console.log('F');
}else {
    console.log('erro');
}

// Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.

const numero1 = 50;
const numero2 = 50;
const numero3 = 50;

if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 ===0) {
    console.log(true);
}else {
    console.log(false);
}

//Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
if (numero1 % 2 !== 0 || numero2 % 2 !== 0 || numero3 % 2 !==0) {
    console.log(true);
}else {
    console.log(false);
}

//Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.

const custoProduto = -100 * 1000;
const valorVenda = 150 * 1000;
let valorCustoTotal;
let impostoSobreOCusto = (custoProduto * 0.20);

 if (custoProduto > 0 && valorVenda > 0){
    valorCustoTotal = custoProduto + impostoSobreOCusto;
    lucro = valorVenda - valorCustoTotal
    console.log(lucro);
 } else if (custoProduto < 0 || valorVenda < 0){
    console.log('erro')
 }

 // Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido.

 const salarioBruto = 3000;
 let salarioDescontadoINSS;
 let salarioDescontadoIR;

 if (salarioBruto <= 1556.94) {
    salarioDescontadoINSS = salarioBruto - salarioBruto * 0.08;
 } else if (salarioBruto > 1556.95 && salarioBruto <= 2594.92) {
    salarioDescontadoINSS = salarioBruto - salarioBruto * 0.09;
 } else if (salarioBruto > 2594.93 && salarioBruto <= 5189.82) {
    salarioDescontadoINSS = salarioBruto - salarioBruto * 0.11;
 } else {
    salarioDescontadoINSS = salarioBruto - 570.88;
 }

 if (salarioDescontadoINSS <= 1903.98) {
    salarioDescontadoIR = 0;
 } else if (salarioDescontadoINSS > 1903.99 && salarioDescontadoINSS <= 2826.65) {
    salarioDescontadoIR = (salarioDescontadoINSS * 0.075) - 142.80 ;
 } else if (salarioDescontadoINSS > 2826.66 && salarioDescontadoINSS <= 3751.05) {
    salarioDescontadoIR = (salarioDescontadoINSS * 0.15) - 354.80;
} else if (salarioDescontadoINSS > 3751.06 && salarioDescontadoINSS <= 4664.68) {
    salarioDescontadoIR = (salarioDescontadoINSS * 0.225) - 636.13;
 } else {
    salarioDescontadoIR = (salarioDescontadoINSS * 0.275) - 869.36;
 }

 let salarioLiquido =salarioDescontadoINSS - salarioDescontadoIR;
 console.log (salarioLiquido);