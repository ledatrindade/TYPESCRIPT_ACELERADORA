/*Faça um programa que:

- Diga se o número é primo.*/

import readline from "readline-sync";

function numerosPrimos(): void {
let numero: number = Number(parseInt(readline.question("Digite um número:")));    
let divisor: number = 0;

    for(let i = 1; i <= numero; i++){  
        if(numero % i ==0){
            divisor++;}
        }
        if(divisor == 2){
            console.log(`${numero} é primo`);
        }
        else{
            return;
        }
    }
numerosPrimos();