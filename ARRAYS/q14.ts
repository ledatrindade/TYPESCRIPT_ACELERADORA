import readline from "readline-sync";

const vetor: number [] = [];
const tamanhoVetor = 10;


for(let i=0; i< tamanhoVetor; i++){
let quant = Number(readline.question("Digite um valor:"));
vetor.push(quant);
}

const contagem: { [key: number]: number } = {};


for (const elemento of vetor) {
  
    if (contagem[elemento]) {
        contagem[elemento]++;
    } else {
 
        contagem[elemento] = 1;
    }
}

console.log("\nElementos repetidos e suas contagens:");
for (const elemento in contagem) {
    if (contagem[elemento] > 1) {
        console.log(`${elemento}: ${contagem[elemento]} vezes`);
    }
}

//estudar mais sobre 0bjetos no ts