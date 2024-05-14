import readline from "readline-sync";

function maior(n1: number, n2: number): string {

    if ( n1 > n2 ){

        return `O número ${n1} é maior que o ${n2}`
    } else {
        return `O número o ${n1} é menor que o ${n2}`
    }
}

let numero1: number = Number(readline.question("Digite o primeiro numero: "));
let numero2: number = Number(readline.question("Digite o segundo numero: "));

console.log(maior(numero1, numero2));