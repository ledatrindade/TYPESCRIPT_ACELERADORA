/*Faça um programa que leia um número N e mostre na tela todos os
numeros entre estes valores.*/

import readline from "readline-sync";

function leiaNumero(): void { // void não retorna nenhum valor, é vazio.
    let numeroN: number =parseInt(readline.question("Digite um número:"));
        for( let i = 0; i <= numeroN; i++){  //aqui o for mostra na tela até o "M" conseguir chegar no número "N".
            console.log(i);
        }
} 

leiaNumero();