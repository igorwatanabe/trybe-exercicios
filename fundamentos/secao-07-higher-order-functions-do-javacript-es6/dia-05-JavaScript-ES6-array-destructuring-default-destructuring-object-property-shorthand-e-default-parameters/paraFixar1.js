const primeNumbers = [17, 23, 37]

const sum = (a, b) => console.log(a + b);

sum(primeNumbers[0], primeNumbers[2]); // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [firstPrime, secondPrime, thirdPrime] = primeNumbers; // a variável primeNumbers armazena o array [17, 23, 37], logo o primeiro número primo será 17 e assim por diante.

sum(firstPrime, thirdPrime); // 54


let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando
console.log(comida, animal, bebida); // arroz gato água



let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];