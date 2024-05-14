/*Faça um programa que leia um número não determinado de pares de valores[M,N]:
*Todos inteiros e positivos;
*Um par de cada vez;
*Calcule e mostre a soma de todos os números inteiro de M até N.
* A entrada do usuario encerra quando M for maior ou igual a N.*/

import readline from "readline-sync";

function somaNumeros(M: number, N: number): number { // função para definir os parametros de soma.
   let soma = 0; 
   for(let i = M; i <= N; i++) {
    soma += i;                                                           
    }
    return soma;
}
    let pares: [number, number][] = [];// definindo o loop dos pares para soma.

    while(true){ //condicional para confirmar se numero M é menor que numero N.
        let numeroM: number = parseInt(readline.question("Digite um número:"));
        let numeroN: number = parseInt(readline.question("Digite outro número:"));
        if(numeroM >= numeroN){
            break;
        }
        pares.push([numeroM, numeroN]);//push adiciona um ou mais elementos ao final de um array.Isso garante que cada número digitado seja armazenado na ordem correta dentro do array.
    
    pares.forEach((par, index) => {
            const soma = somaNumeros(par[0], par[1]);
            console.log(`A soma de todos os números de ${par[0]} até ${par[1]} é ${soma}.`);
        });
            console.log("Programa encerrado.");
        }
    

