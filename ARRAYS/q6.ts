import readline from "readline-sync"

// questão 6 = Elabore um algoritmo que leia uma série de 50 notas e
//uma média necessária para aprovação, calcule e mostre
//quantas notas estão em um intervalo de valores que vai de
//10% abaixo da média até 10% acima dela

let notas: number [] = [];
const tamanhoVetor = 50;

for (let i = 0; i < tamanhoVetor; i++) {
    const nota = Number(readline.question(`Digite a ${i + 1} nota:`));
    notas.push(nota);
}

const media = Number(readline.question(`Digite a media para aprovacao:`));

    let limiteInferior = media - (media * 0.1);
    let limiteSuperior = media + (media * 0.1);
    
    let notasNoIntervalo = 0;

    for (let nota of notas) {
        if (nota >= limiteInferior && nota <= limiteSuperior) {
            notasNoIntervalo++;
        }
    }

    console.log(`A quantidade de notas que esta em um intervalo de valores que vai de 10% abaixo(${limiteInferior}) da média ${media} até 10% acima(${limiteSuperior}) dela: ${notasNoIntervalo}`);