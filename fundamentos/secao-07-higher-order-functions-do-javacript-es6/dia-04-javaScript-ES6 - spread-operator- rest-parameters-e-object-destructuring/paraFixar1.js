// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maça', 'melao'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['chocolate', 'mel', 'leite'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  const fruitSaladaWithAdditional = [...fruit, ...additional];
  return fruitSaladaWithAdditional;
};

console.log(fruitSalad(specialFruit, additionalItens));