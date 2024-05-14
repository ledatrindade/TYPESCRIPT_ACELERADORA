import readline from "readline-sync"

let nome: string [] = [];
let custo: number [] = [];
let preco: number [] = [];
const tamanhoVetor = 50;


for (let i = 0; i < tamanhoVetor; i++) {
    const nom = readline.question(`Digite o nome do produto: `);
    nome.push(nom);
    
    const cust = readline.question(`Digite o custo do produto: `);
    const custFormatado = cust.replace(',', '.'); 
    const preCust = parseFloat(custFormatado); 
    custo.push(preCust);
  
    const pre = readline.question(`Digite o valor a ser vendido: `);
    const preFormatado = pre.replace(',', '.'); 
    const preUni = parseFloat(preFormatado); 
    preco.push(preUni);
}

let lucroPorcentagem: number[] = [];

for (let i = 0; i < tamanhoVetor; i++) {
    const lucro = preco[i] - custo[i]; 
    const lucroPercentual = (lucro / custo[i]) * 100; 
    lucroPorcentagem.push(lucroPercentual); 
}

console.log("Produtos classificados por faixa de lucro");

for (let i = 0; i < tamanhoVetor; i++) {
    if (lucroPorcentagem[i] < 10) {
        console.log(`${nome[i]}: Lucro menor que 10%`);
    } else if (lucroPorcentagem[i] >= 10 && lucroPorcentagem[i] <= 30) {
        console.log(`${nome[i]}: Lucro entre 10% e 30%`);
    } else {
        console.log(`${nome[i]}: Lucro maior que 30%`);
    }
}