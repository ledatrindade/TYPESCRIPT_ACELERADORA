/* Faça um programa que leia um número inicial M, 
um valor de incremento I e o número de incrmeentos N e após isso,
mostre N número de I em I começando em M.*/


import readline from "readline-sync";

function leiaIncremento(): void { // void não retorna nenhum valor, é vazio.
    let numeroM: number =parseInt(readline.question("Digite um número:"));
    let numeroI: number =parseInt(readline.question("Digite o número de incrementos:"));
    let numeroN: number =parseInt(readline.question("Digite a quantidade de incrementos:"));
    let contador: number = 0  // essa variavel vai contar quantos numeros foram encontrados(ou quantidade de dados inseridos.) 
    let resultado: number = numeroM; // essa variavel mostra o resultado a partir do dados do numero N
        while (contador < numeroN) { // Enquanto o contador for menor que o número de incrementos N, se chegar em número N ele para de contar.
            console.log(resultado) // Para não esquecer, colocar a condicional if dentro do for, para que possa realizar a coondicional e imprimir.
            resultado + numeroI; // utilizamos o contador + numeroI para que ele receba do usuario a quantidade de incrementos que ele deseja.
            contador++;
        }    
        console.log(`Seu valor foi incrementado ${numeroN} vezes.`); 
    
}
leiaIncremento();