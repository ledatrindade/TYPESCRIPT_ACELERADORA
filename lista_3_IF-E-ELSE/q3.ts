import readline from "readline-sync";

function imparPar(n1: number): string {

    if ( n1 % 2 === 0){

        return `O número o ${n1} é PAR`
    } else {
        return `O número o ${n1} é ÌMPAR`
    }
}

let numero: number = Number(readline.question("Digite um numero: "));

console.log(imparPar(numero));



