// const peso = 80;
// const altura = 1.89;

const readline = require('readline-sync');

const IMC = (peso, altura) => {
    console.log(`peso: ${peso}, altura: ${altura}`);

    const resultado = peso/((altura)**2)
    return resultado;
}

const BMI_MAX_AND_MIN = {
    'Underweight': {
      minBMI: 0,
      maxBMI: 18.4,
    },
    'Normal Weight': {
      minBMI: 18.5,
      maxBMI: 24.9,
    },
    'Overweight': {
      minBMI: 25,
      maxBMI: 29.9,
    },
    'Obese Class I': {
      minBMI: 30.0,
      maxBMI: 34.9,
    },
    'Obese Class II': {
      minBMI: 35,
      maxBMI: 39.9,
    },
    'Obese Class III': {
      minBMI: 40,
      maxBMI: 100, // Um valor default máximo qualquer, impossível de alcançar no imc.
    },
  };

  function handleBMIResult(bmi) {
    const statuses = Object.keys(BMI_MAX_AND_MIN); // ['Underweight', 'Normal Weight', 'Overweight'...]
  
    const resultFind = statuses.find((status) => {
      const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status]; // acessamos as informações do intervalo da situação iterada
  
      // caso esteja dentro do intervalo, significa que encontramos a situação apropriada
      return bmi >= minBMI && bmi <= maxBMI;
    });
  
    return resultFind;
  }

function main () {
    const peso = readline.questionFloat('What\'s your weight? (kg) ');
    const altura = readline.questionFloat('What\'s your height? (m) ');
    const imc = IMC(peso, altura);
    const bmiResult = handleBMIResult(imc);

    console.log(`imc = ${imc.toFixed(2)}`);
    console.log(`${bmiResult}`);
}

main()