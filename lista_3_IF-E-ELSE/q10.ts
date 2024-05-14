import readline from "readline-sync";

function maior(n1: number, n2: number): string {

    let resultado = n1 * 0.30;

    if ( n2 > resultado ){

        return `O emprestino de ${n2} não poderá ser realizado`;
    } else {
        return `O emprestino de ${n2} poderá ser realizado`;
    }
}

let numero1: number = Number(readline.question("Digite o salario bruto: "));
let numero2: number = Number(readline.question("Digite o valor do prestacao: "));

console.log(maior(numero1, numero2));