import readline from "readline-sync";

const vetor: number [] = [20, 19, 18, 17, 16, 15, 14, 13, 12, 10, 11, 9, 8, 7, 5, 6, 3, 4, 2, 3];

console.log("Vetor inicial:", vetor);

for (let i = 0; i < vetor.length - 1; i++) {

    let menor = i;

    for (let j = i + 1; j < vetor.length; j++) {
        if (vetor[j] < vetor[menor]) {
            menor = j;
        }
    }

    if (menor !== i) {
        let aux = vetor[i];
        vetor[i] = vetor[menor];
        vetor[menor] = aux;
    }
}

console.log("Vetor em ordem crescente:", vetor);