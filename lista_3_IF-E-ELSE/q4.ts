import readline from "readline-sync";

function poNeNu(n1: number): string {

    if ( n1 > 0){
        return `POSITIVO`;
    } else if ( n1 < 0) {
        return `NEGATIVO`;
    } else {
        return `NULO`;
    }
}

let numero: number = Number(readline.question("Digite um numero: "));

console.log(poNeNu(numero));