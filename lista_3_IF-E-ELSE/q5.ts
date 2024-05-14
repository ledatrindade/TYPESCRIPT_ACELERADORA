import readline from "readline-sync";

function addConta(n1: number, n2: number): number {

let re = n1 + n2;

    if ( re > 20){

        re = re + 8;

        return re;
    } else {
        re = re - 5;

        return re;
    } 
}

let numero1: number = Number(readline.question("Digite o primeiro numero: "));
let numero2: number = Number(readline.question("Digite o segundo numero: "));

console.log(addConta(numero1, numero2));