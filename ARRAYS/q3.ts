import readline from "readline-sync"
// questão 3
let vetor: number [] = [];
const tamanhoVetor = 8;
let vetorPositivo: number [] = [];
let vetorNegativo: number [] = [];

for (let i = 0; i < tamanhoVetor; i++) {
    const valor = Number(readline.question(`Digite o valor ${i + 1} do vetor:`));
    vetor.push(valor);
}

for (let i = 0; i < tamanhoVetor; i++) {

    if (vetor[i] > 0){

        vetorPositivo.push(vetor[i]);

    } else {

        vetorNegativo.push(vetor[i]);
    }

}


console.log("Vetor com os números positivos: " + vetorPositivo.join(", ") + "\nVetor com os números Negativos: " + vetorNegativo.join(", "));