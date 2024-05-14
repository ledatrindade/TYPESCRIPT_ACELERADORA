/* Faça um programa que:
-Receba 02 números
- mostre o quociente através de subtração.*/

import readline from "readline-sync";

function dividindo(): void {
    let dividendo: number = parseInt(readline.question("Digite um número dividendo:"));
    let divisor: number = parseInt(readline.question("Digite outro número divisor:"));
    let quociente = 0;
    

    while( dividendo >= divisor){
       dividendo -= divisor;
        quociente++
    }
    console.log(`Seu quociente é: ${quociente}`);
}

dividindo();