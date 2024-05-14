import readline from "readline-sync";

const nomeCliente: string[] = [];
const quantidadeVetor = 20;
const dvds: number[] = [];

for(let i=0; i< quantidadeVetor; i++){

    let nome = readline.question("Digite o nome do cliente:");
    nomeCliente.push(nome);
    let quant = Number(readline.question("Digite a quantidade de locacoes:"));
    dvds.push(quant);

}

console.log(`-----------------------------\n| Cliente | locações grátis |\n-----------------------------`);
for(let i=0; i< quantidadeVetor; i++){

    let resultado = dvds[i] / 10;

    console.log(`| ${nomeCliente[i]} | ${Math.floor(resultado)} |\n-----------------------------`);

}