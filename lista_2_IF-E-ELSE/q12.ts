import readline from "readline-sync";

function calculoH(n1: number, n2: number): number {

    let h = (n1 * n1) + (n2 * n2);

    h = (h * h);

    return h;

}

console.log(`CDescubra a hipotenusa de um triângulo.`);
const cUm: number = Number (readline.question("Digite o pimeiro cateto:"));
const cDois: number = Number (readline.question("Digite o Segundo cateto:"));

console.log(`O resultado da hipotenusa quando tem dois catetos ${cUm} e ${cDois} é: `, calculoH(cUm, cDois));