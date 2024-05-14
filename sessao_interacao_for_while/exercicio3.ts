/*Faça um programa que leia um número N e mostre na tela todos os
numeros entre estes valores(o usuario deve informar uma valor para
M menor que o valor de N).*/

import readline from "readline-sync";

function leiaNumero(): void { // void não retorna nenhum valor, é vazio.
    let numeroN: number =parseInt(readline.question("Digite um número:"));
    let numeroM: number =parseInt(readline.question("Digite um número menor que o anterior:"));
        if(numeroN < numeroM){ //aqui a condicação comprova que N maior que M.
            console.log("M deve ser menor que N. Digte novamente:");
            return;
        }
        for( let i = numeroM + 1; i <numeroN; i++){  //aqui o for mostra na tela até o "M" conseguir chegar no número "N".
              console.log(i); 
        }
}
leiaNumero();

        


