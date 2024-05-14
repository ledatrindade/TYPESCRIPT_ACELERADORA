/* Faça um programa que leia N número e:
- Mostre os 3 maiores número digitados.*/

import readline from "readline-sync";

function maioresNumeros(): void {
    const quantidadeNumeros: number = parseInt(readline.question("Digite um número"));
    let numerosUsuario: number[] = []; 

    for (let contador = 0; contador < quantidadeNumeros; contador++) {
        const numeroInserido: number = parseFloat(readline.question(`Digite um número: ${contador + 1}:`));
        numerosUsuario.push(numeroInserido); //push adiciona um ou mais elementos ao final de um array.Isso garante que cada número digitado seja armazenado na ordem correta dentro do array.
    }

    numerosUsuario.sort((a, b) => b - a); //.sort coloca em ordem descrescente.
    console.log("Os três maiores números digitados são:", numerosUsuario.slice(0, 3));//O slice pega os 3 primeiros elementos do array numerosInseridos (os maiores números) e cria um novo array com eles.
}

maioresNumeros();


     