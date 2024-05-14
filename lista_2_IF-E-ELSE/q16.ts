import readline from "readline-sync";

function elevado(numero: number, potencia: number): number {

    let n = numero;
    for(let i = 1; i < potencia; i++){

        numero = numero * n;
        
    }
    return numero;
}

console.log(`Digite o primeiro numero para ser a base e o segundo para ser a potencia.`);
const n1: number = Number (readline.question("Digite o rpimeiro numero:"));
const n2: number = Number (readline.question("Digite o segundo numero:"));

console.log(`O resultado do nuemro ${n1} elevado a ${n2} é:`, elevado(n1, n2));