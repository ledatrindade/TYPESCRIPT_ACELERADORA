/* Faça um programa no qual o usuários insira valores númericos
positivos até digitar -1 e ao final diga quantos númetos foram digitados.*/

import readline from "readline-sync";

let soma = 0;

while (true) {
    let N: number = Number(readline.question("Digite o valor de N:"));

    if(0 <= N)
        soma++;
   else {
    console.log("A quantidade de entradas digitadas foi:.");
    break;
}
}