/*Faça um programa que leia dois Numero M e N e mostre na tela apenas os números impares 
entre estes valores. */

import readline from "readline-sync";

function leiaNumeroImpares(): void { // void não retorna nenhum valor, é vazio.
    let numeroN: number =parseInt(readline.question("Digite um número:"));
    let numeroM: number =parseInt(readline.question("Digite novamente um número com outro valor:"));
       
        for( let i = numeroN; i <= numeroM  ; i++){ // Para não esquecer, colocar a condicional if dentro do for, para que possa realizar a coondicional e imprimir.
            if(i %2 != 0){ // i %2 se lê i é = resto impar e diferente de 0.
            console.log(i); 
        }
}
}
leiaNumeroImpares();

 