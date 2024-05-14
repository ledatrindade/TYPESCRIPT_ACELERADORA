import readline from "readline-sync";

let num: number = Number (readline.question("Digite um numero para vermos se ele esta entre 20 e 90: "));

if (num <= 90 && num >= 20) {
    console.log(`O número ${num} está entre 20 e 90`);
}  else {
    console.log(`O numero ${num} não está entre 20 e 90`);
}
