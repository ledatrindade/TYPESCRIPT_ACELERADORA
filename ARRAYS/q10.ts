import readline from "readline-sync"

let num: number [] = [];
const tamanhoVetor = 10;


for (let i = 0; i < tamanhoVetor; i++) {
    
    const pon = Number (readline.question(`Digite o ${i + 1} numero: `));
    num.push(pon);

}

let certificador = Math.max(...num);

if (50 > certificador) {
    console.log("\nNão existi nenhum número que atenda a esta condição.");
} else {
    console.log("\nListas dos números maiores que 50:");
}

for(let i = 0; i < tamanhoVetor; i++){

    if ( num[i] > 50){
        console.log(`número: ${num[i]} | Posição: ${i} `);
    }

}

