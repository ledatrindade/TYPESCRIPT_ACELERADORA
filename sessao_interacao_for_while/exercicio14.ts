/*Faça um programa no qual o usuário insira valores númericos positivos
até digitar -1 e ao final informe entre os números digitados quantos
são:
a) multiplos de 2 a 5
b multiplos de 2 e 3.*/

import * as readlineSync from 'readline-sync';

function multiplos() {
    let multiplos2e5 = [];
    let multiplos2e3 = [];  

// Loop para receber valores do usuário até que -1 seja digitado
while (true) {
    // Solicita um número ao usuário e converte para inteiro
    const input = readlineSync.question('Digite um número positivo ou -1 para sair: ');
    const numero = parseInt(input);

    // Verifica se o número é válido ou sai do programa.
    if (numero === -1) {
        break; // Sai do loop se o usuário digitou -1
    }

    if (numero % 2 === 0 && numero % 5 === 0) { // aqui ele confirma se o numero é multiplo de 2 e 5
       multiplos2e5.push(numero);
    } if(numero % 2 === 0 && numero % 3 === 0) { // aqui ele confirma se o numero é multiplo de 2 e 
        multiplos2e3.push(numero);
    } 
     
}

// Mostra o resultado ao usuário
console.log(`Os números digitados múltiplos de 2 e 5 são: ${multiplos2e5} \n e os números digitados múltiplos de 2 e 3 são: ${multiplos2e3}. `);
}

multiplos();