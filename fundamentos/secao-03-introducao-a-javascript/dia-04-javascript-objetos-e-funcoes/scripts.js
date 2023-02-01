let conta = {
    agencia: '0000',
    banco: {
      cod: '012',
      id: 4,
      nome: 'TrybeBank',
    },
  };
  
  let infoDoBanco = 'banco';
  console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
  console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
  console.log(conta.agencia); // 0000
  console.log(conta['agencia']); // 0000
  
  console.log(conta.banco.cod); // 012
  console.log(conta['banco']['id']); // 4





  let moradores = [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ];
  
  let primeiroMorador = moradores[0];
  console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
  console.log(primeiroMorador['andar']); // 10
  
  let ultimoMorador = moradores[moradores.length - 1];
  console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
  console.log(ultimoMorador.nome); // Zoey






let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2, silver: 3
    }
} 
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

 player.bestInWorld = [2006, 2007, 2008, 2009, 2010, 2018];

 console.log('A jogadora ' + player['name'] + ' ' +  player['lastName'] + ' foi eleita a melhor do mundo por 6 vezes.');

 console.log('A jogadora possui ' + player.medals.golden +' medalhas de ouro e ' + player.medals.silver +  ' medalhas de prata.');







 let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let key in names){
    console.log('Olá ' + names[key]);
  }



  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for(let key in car){
    console.log(key + ' : ' + car[key]);
  }

  //soma
  function operadores(a,b){
    return a + b;
  }
  console.log(operadores(2 ,3))

  //subtracao
  function operadores(a,b){
    return a - b;
  }
  console.log(operadores(2 ,3))

  //multiplicacao
  function operadores(a,b){
    return a * b;
  }
  console.log(operadores(2 ,3))

  //divisao
  function operadores(a,b){
    return a / b;
  }
  console.log(operadores(2 ,3))

  //modulo
  function operadores(a,b){
    return a % b;
  }
  console.log(operadores(2 ,3))

  //Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.
  function maiorNumero(num1, num2){
    if(num1 > num2){
        return num1;
    } else {
        return num2;
    }
  }  
  console.log(maiorNumero(2,5));

  //Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.
  function maiorNumero(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    } else if(num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
  }  
  console.log(maiorNumero(2,5,10));

  //Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

  function positivoNegativo(num){
    if (num > 0){
        return 'Positivo';
    } else {
        return 'Negativo';
    }
  }
  console.log(positivoNegativo(-50));

  //Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

//Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

//Um ângulo será considerado inválido se não tiver um valor positivo.
 function triangulo(angulo1, angulo2, angulo3) {
    if(angulo1 + angulo2 + angulo3 === 180){
        return 'triangulo';
    } else {
        return 'Nao é um triangulo'
    }
 }
console.log(triangulo(100,30,49));