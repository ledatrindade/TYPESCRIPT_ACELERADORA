/*Faça um programa que leia dois Numero M e N e mostre na tela apenas 
os números pares entre estes valores. Além disso, diga quantos números 
pares foram apresentados na tela. */

import readline from "readline-sync";

function leiaNumeroPares(): void { // void não retorna nenhum valor, é vazio.
    let numeroN: number =parseInt(readline.question("Digite um número:"));
    let numeroM: number =parseInt(readline.question("Digite novamente um número com outro valor:"));
    let contador: number = 0  // essa variavel vai contar quantos numeros foram encontrados(ou quantidade de dados inseridos.) 
        for( let i = numeroN; i <= numeroM  ; i++){ // Para não esquecer, colocar a condicional if dentro do for, para que possa realizar a coondicional e imprimir.
            if(i % 2 === 0){ // colocando %2 ===0 signfica que não tem resto pra dividir ou seja, o número é par.
            console.log(i); 
            contador++; // utilizamos o contador com incremento ++ sempre que encontramos um número par, para podecer calcular.
        }        
}
    console.log("Foram apresentados " + contador + " números pares entre " + numeroM + " e " + numeroN);
}
leiaNumeroPares();
