let vetor = [9, 3, 7, 1, 5, 4, 8, 2, 6, 10, 15, 12, 13, 11, 14]; 

console.log("Vetor inicial:", vetor);

let troca = true; 

while (troca) {

    troca = false;

    for (let i = 0; i < vetor.length - 1; i++) {

        if (vetor[i] > vetor[i + 1]) { 

            [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]];
            troca = true; 

        }
    }
}

console.log("Vetor em ordem crescente:", vetor);
