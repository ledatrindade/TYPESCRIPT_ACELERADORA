/* Faça um algoritmo que leia uma quantidade não
determinada de numeros positivos.
- Calcule a quantidade de números pares e impares;
- calcule média de valores pares.
- calcule média geral dos números lidos.
- Encerre o programa com o número 0.*/

import readline from "readline-sync";

function calculeMedia(): void {;

let numeros: number[] = [];
let numeroPar: number[] = [];
let numeroImpar: number[] = [];
let resultadoNumPar = 0;
let resultadoNumImpar = 0;

//Aqui cria condicional para receber entradas diferentes.
while(true){
    let numeroEntrada: number = Number(readline.question("Digite o valor de entrada:"));
    numeros.push(numeroEntrada);

        if(numeroEntrada === 0){ 
            break;
        }

            if(numeroEntrada % 2 === 0){
            numeroPar.push(numeroEntrada); 
            resultadoNumPar++;
                   
        }
            else {
            numeroImpar.push(numeroEntrada); 
            resultadoNumImpar++;
       }
    }
// cria-se o método para calcular a média dos pares.
const somaPares = numeroPar.reduce((total, valor) => total + valor, 0); // o reduce cria um unico valor para a array.
const mediaPar = somaPares / numeroPar.length;

 // cria-se o método para calcular a média de todos os números.
const somaGeral = numeros.reduce((total, valor) => total + valor, 0);
const mediaGeral = somaGeral / numeros.length;

    console.log(`Foram digitados ${resultadoNumPar} números pares e ${resultadoNumImpar} números impares.`);
    console.log(`A média dos valores pares é ${mediaPar}.`);
    console.log(`A média de todos os valores é ${mediaGeral}.`);
    console.log(`O programa foi encerrado com o número 0.`);
}

calculeMedia();