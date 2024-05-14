import readline, { question } from "readline-sync";

let valor: number = Number(readline.question("Digite o valor unitario do produto: "));
let quantidade: number = Number(readline.question("Digite a quantidade vendida do produto: "));

let soma = valor * quantidade;

if ( soma > 100 ){

    console.log("Bonificação de 10% para o ventedor");
} else {
    console.log("Sem bonificação");
}


