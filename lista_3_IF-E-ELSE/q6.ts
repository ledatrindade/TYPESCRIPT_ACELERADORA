import readline from "readline-sync";

function calcular(n1: number): number {

    if ( n1 >= 0){

        return Math.sqrt(n1);
       
    } else {
        return n1 * n1;
    }
}

let numero: number = Number(readline.question("Digite um numero: "));

console.log(calcular(numero));