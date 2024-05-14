import readline from "readline-sync";

function multiplo(n1: number, n2: number): string {

    if ( n1 % n2 === 0){

        return `O número o ${n1} é múltiplo de ${n2}`
    } else {
        return `O número o ${n1} não é múltiplo de ${n2}`
    }
}

let numero1: number = Number(readline.question("Digite o primeiro numero: "));
let numero2: number = Number(readline.question("Digite o numero ao qual veremos se o primeiro numero e divisivel: "));

console.log(multiplo(numero1, numero2));