import readline from "readline-sync";

// 2 questão

function multiplicacao (n1: number, n2: number, n3: number): number {
    
    return n1 * n2 * n3;
}

console.log("Digite três números para a multiplicação")
let n: number = Number(readline.question("Digite o primeiro valor: "));
let z: number = Number(readline.question("Digite o segundo valor: "));
let a: number = Number(readline.question("Digite o terceiro valor: "));

console.log("Resultado da subtração:", multiplicacao(n, z, a));
