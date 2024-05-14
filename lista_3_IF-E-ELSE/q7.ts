import readline from "readline-sync";

function multiplo(n1: number): string {

    if ( n1 % 3 === 0){

        return `O número o ${n1} é múltiplo de 3`
    } else {
        return `O número o ${n1} não é múltiplo de 3`
    }
}

let numero: number = Number(readline.question("Digite um numero: "));

console.log(multiplo(numero));