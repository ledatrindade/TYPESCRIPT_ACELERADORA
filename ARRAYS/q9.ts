import readline from "readline-sync"

let nome: string [] = [];
let pontos: number [] = [];
let preco: number [] = [];
const tamanhoVetor = 3;


for (let i = 0; i < tamanhoVetor; i++) {
    const nom = readline.question(`Digite o nome do candidato: `);
    nome.push(nom);
    
    const pon = Number (readline.question(`Digite a quantidade de pontos: `));
    pontos.push(pon);

}
console.log("\nListas doscantidade que obtiveram mais de 70 pontos:");
for(let i = 0; i < tamanhoVetor; i++){

    if ( pontos[i] > 70){
        console.log(`${nome[i]} | ${pontos[i]} Pontos`);
    }

}