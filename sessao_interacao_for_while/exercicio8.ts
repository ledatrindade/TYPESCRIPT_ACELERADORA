/*"Faça um programa que leia N numeros.
O usuario deverá informar:
*quantidade de números que será informada:
* depois o maior número informado;
* depois o menor numero informado.*/


import readline from "readline-sync";

function leiaNumeros(): void { 
    const quantidadeNumeros: number = parseInt(readline.question("Digite a quantidade de números que você quer:")); 

    // Inicializa as variáveis com o primeiro número inserido pelo usuário
    let numeroMenor: number = parseFloat(readline.question("Digite um número:")); // Lê o primeiro número.
    let numeroMaior: number = numeroMenor; // lê o segundo número.

    for (let contador = 1; contador < quantidadeNumeros; contador++) { // Let contador começa com 1,pois o 1º valor já foi inserido pelo usuario na variavel quantidadeDeNUmeros.
        const numeroInserido: number = parseFloat(readline.question(`Digite o número ${contador + 1}:`)); // Lê o próximo número e adiciona +1 até o número escolhido para ser liddo.

        if (numeroInserido > numeroMaior) { // Compara o número atual com o maior número registrado até agora.
            numeroMaior = numeroInserido; // Atualiza o maior número se o número atual for maior.
        }

        if (numeroInserido < numeroMenor) { // Compara o número atual com o menor número registrado até agora.
            numeroMenor = numeroInserido; // Atualiza o menor número se o número atual for menor.
        }
    }

    console.log(`O maior número digitado foi: ${numeroMaior}`); 
    console.log(`O menor número digitado foi: ${numeroMenor}`); 
}

leiaNumeros(); 



