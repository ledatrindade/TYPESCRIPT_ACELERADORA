import readline from "readline-sync"
// questão 5
let vetor1: number [] = [];
let vetor2: number [] = [];
const tamanhoVetor = 5;
let vetorAtualizado: number [] = [];

for (let i = 0; i < tamanhoVetor; i++) {
    const valor = Number(readline.question(`Digite o valor ${i + 1} do primeiro vetor:`));
    vetor1.push(valor);
}
for (let i = 0; i < tamanhoVetor; i++) {
    const valor = Number(readline.question(`Digite o valor ${i + 1} do segundo vetor:`));
    vetor2.push(valor);
}

const tamanhoVetorTotal = 10;

for (let i = 0; i < tamanhoVetorTotal; i++) {

    if (i % 2 === 0){

        vetorAtualizado.push(vetor1[Math.floor(i / 2)]);

    } else {

        vetorAtualizado.push(vetor2[Math.floor(i / 2)]);
    }

}


console.log("Vetor 1 e vetor 2 intrelaçados: " + vetorAtualizado.join(", "));