/* Faça um programa no qual o usuário insira valores
númericos positivos  até digitar -1 e ao final o
diga o somátorio dos valores digitados.*/

import readline from "readline-sync";
let soma = 0;
while(true) {
    let N: number = Number(readline.question("Digite o valor de N:"));

    if(0 <= N)
        soma++;
   else {
    console.log(`O resultado da soma é: ${soma}`);
    break;
}
}