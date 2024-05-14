import readline from "readline-sync"
// questão 2
let vetor: number [] = [];
const tamanhoVetor = 30;
let vetorAtualizado: number [] = [];

for (let i = 0; i < tamanhoVetor; i++) {
    const valor = Number(readline.question(`Digite o valor ${i + 1} do vetor na posicao ${i}:`));
    vetor.push(valor);
}


for (let i = 0; i < tamanhoVetor; i++) {

    if (i % 2 === 0){

        vetorAtualizado.push(vetor[i] * 2);

    } else {

        vetorAtualizado.push(vetor[i] * 3);
    }

}


console.log("Vetor com os pares em dobro e os ímpares em triplo: " + vetorAtualizado.join(", "));