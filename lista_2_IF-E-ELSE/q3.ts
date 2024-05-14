import readline from "readline-sync";

// 3 questão

function soma (n1: number, n2: number): number {
    
    return n1 + n2;
}

console.log("Digite dois números para a soma")
let n: number = Number(readline.question("Digite o primeiro valor: "));
let z: number = Number(readline.question("Digite o segundo valor: "));

console.log("Resultado da soma:", soma(n, z));