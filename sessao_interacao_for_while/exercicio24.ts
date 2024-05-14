/* Escrever um programa que:
- leia 05 valores em uma variavel;
- conte quantos destes valores são negativos.
- mostre no console esta informação.*/

import readline from "readline-sync";

function negativos(): void {
    let numeros: number[] = [];
    let numerosNegativos: number = 0;    

    for( let i = 0; i <= 5; i++){
        let numero: number = parseInt(readline.question("Digite um número positivo e negativo:"));
        numeros.push(numero);

        if(numeros[i] < 0){ // confirma se os numeros recebidos na variavel numeros, são negativos
            numerosNegativos++;
        }        
    }
    console.log(`Foram digitados ${numerosNegativos} números negativos.`);
}

negativos();