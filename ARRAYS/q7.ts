import readline from "readline-sync"

// receba o código, o preço e quantidade vendida, armazenando-os em seus respectivos vetores.
// apenas um vendedor e comercializa dez tipos de objetos. 
//O vendedor recebe um salário de R$ 400,00 acrescido de --> 5% do valor total de suas vendas. <--
//O --> valor unitário dos objetos <-- deve ser informado e armazenado em --> um vetor; <--
// a --> quantidade vendida de cada peça <-- deve ficar em --> outro vetor, mas na mesma posição. <--
// --> código do produto deve ficar em um terceiro vetor <-- , sempre --> respeitando as posições. <--

// a. Um relatório contendo o código, a quantidade o valor
//unitário, e o valor total vendido para cada objeto. Ao
//final deverá ser mostrado o valor geral das vendas e o
//valor da comissão que será paga ao vendedor.

let codigo: number [] = [];
let preco: number [] = [];
let quantidade: number [] = [];
const tamanhoVetor = 10;
let valorGeral = 0;
let comissao = 0;

for (let i = 0; i < tamanhoVetor; i++) {
    const cod = Number(readline.question(`Digite o ${i + 1} codigo: `));
    codigo.push(cod);
    
    const pre = readline.question(`Digite o valor unitario: `);
    const preFormatado = pre.replace(',', '.'); // substitui ',' por '.'
    const preUni = parseFloat(preFormatado); // converte para número 
    preco.push(preUni);

    const quan = Number(readline.question(`Digite a quantidade: `));
    quantidade.push(quan);
}

console.log("+---------+------------+---------------+-------------+\n| Código | Quantidade | Valor Unitário | Valor Total |\n+---------+------------+---------------+-------------+");

for(let i = 0; i < tamanhoVetor; i++){

    let valorTotal = quantidade[i] * preco[i];

    console.log(`|  ${codigo[i]}  |    ${quantidade[i]}    |     ${preco[i].toFixed(2)} R$     |     ${valorTotal.toFixed(2)} R$     |\n+----------------------------------------------------+`);

    valorGeral = valorGeral + valorTotal;

}


comissao = (valorGeral * 0.05);

console.log("O valor geral das vendas foi de: " + valorGeral + " R$");
console.log("O valor da comissão ao vendedor foi de: " + comissao.toFixed(2) + " R$\n");

// b. O código e o valor do objeto mais vendido (não se
// preocupe com empates).

let objetoMaisVendido = Math.max(...quantidade);
let num = quantidade.indexOf(objetoMaisVendido);

console.log("Sobre o objeto mais vendido");
console.log("Código: " + codigo[num]);
console.log("Valor Unitário: " + preco[num].toFixed(2));