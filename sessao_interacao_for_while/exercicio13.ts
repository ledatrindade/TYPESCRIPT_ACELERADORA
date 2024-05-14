/* Faça um programa no qual o usuário
insira valores numéricos positvios até 
digitar -1 e ao final informe quantos números pares
e quantos números impares foram digitados.*/

// Importando o módulo readline-sync para interagir com o usuário no terminal
import * as readlineSync from 'readline-sync';

// Inicializando variáveis para contar números pares e ímpares
let numerosPares = 0;
let numerosImpares = 0;

// Loop para receber valores do usuário até que -1 seja digitado
while (true) {
    // Solicita um número ao usuário e converte para inteiro
    const input = readlineSync.question('Digite um número positivo ou -1 para sair: ');
    const numero = parseInt(input);

    // Verifica se o número é válido
    if (numero === -1) {
        break; // Sai do loop se o usuário digitou -1
    } else if (numero >= 0) {
        // Verifica se o número é par ou ímpar e atualiza as contagens
        if (numero % 2 === 0) {
            numerosPares++;
        } else {
            numerosImpares++;
        }
    } else {
        console.log('Digite um número positivo válido ou -1 para sair.');
    }
}

// Mostra o resultado ao usuário
console.log(`Foram digitados ${numerosPares} números pares e ${numerosImpares} números ímpares.`);