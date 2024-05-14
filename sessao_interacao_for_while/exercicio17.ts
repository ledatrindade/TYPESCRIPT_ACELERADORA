/* Faça um programa que:
*leia o nomealuna;
*leia a media aluna;
* encerre o programa ao digitar "fim";
após o encerramento, informe:
* a média digitada de todos os alunos;
* a quantidade de alunos que informaram a média.*/

import readline from "readline-sync";

function mediaAluna(): void {
    // aqui ele cria variaveis para receber a soma e a quantidade de alunos.
    let qtdAlunos: number = 0;
    let medias: number[] = [];

    // aqui no while ele recebe e confirma as informações de nome e media das alunas.
    while(true) {
        let nomeAluna: string = readline.question("Digite o nome da aluna: ");
            if(nomeAluna.toLowerCase() === "fim") { //tolowercase transforma letras mausculas em minusculas.
                break; 
            }    
        const mediaEstudante: number = parseFloat(readline.question(`Digite a média da aluna ${nomeAluna}: `));{
           medias.push(mediaEstudante); // push só funciona em arrays.
            qtdAlunos++;          
    }       
    
}   
    console.log(`As médias das alunas foram ${medias.join(", ")}`); //.join funciona para separação dentro da função.
    console.log(`A quantidade de alunas que participaram foi ${qtdAlunos}`); 
}
mediaAluna();