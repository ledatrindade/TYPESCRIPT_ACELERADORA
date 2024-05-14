import readline from "readline-sync";

// 1 questão

function subtracao (n1: number, n2: number): number {
    
    return n1 - n2;
}

console.log("Digite dois números para a subtração")
let n: number = Number(readline.question("Digite o primeiro valor: "));
let z: number = Number(readline.question("Digite o segundo valor: "));

console.log("Resultado da subtração:", subtracao(n, z));


