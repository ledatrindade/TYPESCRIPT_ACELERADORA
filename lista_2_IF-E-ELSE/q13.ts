import readline from "readline-sync";

function calcularA(base: number, altura: number): number {
    return (base * altura)/2;
}

console.log(`Descubra a área de um triângulo.`);
const base: number = Number (readline.question("Digite o valor da base:"));
const altura: number = Number (readline.question("Digite a altura:"));

console.log(`O resultado da área quando a base tem o valor de ${base} e a altura tem o valor de ${altura} é: `, calcularA(base, altura));