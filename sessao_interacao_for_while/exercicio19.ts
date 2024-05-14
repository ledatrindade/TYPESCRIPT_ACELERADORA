/* Faça um programa que:
- Usuaria insere o número;
- O programa imprime a tabuada de multiplicação do 
número inserido.*/

import readline from "readline-sync";

function tabuada(): void{
    let numero: number = parseInt(readline.question("Digite seu número:"));
    for(let i = 0; i <= 10; i++) {
    let resultado: number = numero * i;        
        console.log(resultado);  
    }
}

tabuada();