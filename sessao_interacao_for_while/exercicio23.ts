/* Faça um programa que calcule a raiz quadrada de um número
com a seguinte regra:

-subtraia os números impares consecutivos a partir de 1 até
que chegue a zero.
- calcule o número de vezes que foi feita a subtração e dê a raiz quadrada.
 Exemplo: Raiz quadrada de 16 → 16⏟− 1 = 15
1
→15⏟− 3 = 12
2
→12⏟− 5 = 7
3
→7⏟− 7 = 0
4
A raiz de 16 é 4.*/

import readline from "readline-sync";

function raizQuadrada(): void {
    let numero: number = parseInt(readline.question("Digite um número:"));
    let numeroImpar = 1; // contador para números ímpares
    let resultado = 0; // vou usar zero para calcular a raiz a partir do zero.

    while( numero > 0){
        numero -= numeroImpar;// Subtrai o número ímpar do número digitado
        numeroImpar += 2;
        resultado++;   
    }

    console.log(`Sua raiz quadrada é ${resultado}`);

}
raizQuadrada();