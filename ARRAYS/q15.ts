import readline from 'readline-sync';

let modeloCarro: string [] = [];
let consumo: number [] = [];//quantos quilômetros cada um deles fazem com um litro de combustível
let tamanhoVetor = 10;

for(let i=0; i< tamanhoVetor; i++){

    let carro = readline.question("Digite o nome do carro:");
    modeloCarro.push(carro);
    let quant = Number(readline.question("Digite quantos quilometros ele faz com um litro de combustivel:"));
    consumo.push(quant);

 }

//a. O modelo de carro mais econômico.

let economico = Math.max(...consumo);

let num = consumo.indexOf(economico);

console.log(`\n>O modelo do carro mais econômico é ${modeloCarro[num]}`);

console.log(`\n>Quantos litros de combustível cada um dos carros cadastrados consomem para percorrer uma distância de 1.000 quilômetros.\n`); 

for(let i=0; i< tamanhoVetor; i++){

    let litros = 1000 / consumo[i]   ;
 
    console.log(`${[i + 1]}. O modelo do carro:${modeloCarro[i]} | litros em 1.ooo quilômetros:${litros.toFixed(2)}\n `);

 }
