//exercicio 1
const substituaX = (nome) => {
    const frase = 'Tryber x aqui!';
    const fraseArray = frase.split(' ');
    for (let index = 0; index < fraseArray.length; index += 1) {
        if (fraseArray[index] === 'x') {
            fraseArray[index] = nome;
        }
    }
    return fraseArray.join(' ');
}

//console.log(substituaX('America'));


//exercicio 2
const minhasSkills = (func) => {
    const skill = ['HTML', 'CSS', 'JavaScript'];
    let resultado = `
        ${func}

        Minhas três principais habilidades são:`;
        for (index = 0; index < skill.length; index += 1){
            resultado = `${resultado}
            - ${skill[index]}`;
        }
    return resultado;
}
console.log(minhasSkills(substituaX('Bebeto')));