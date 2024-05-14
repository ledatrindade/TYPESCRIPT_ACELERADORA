/*Faça um programa no qual o usuário:
* informe o número de médias a serem inseridas;
* Informe a média;
* Informe o nome do aluno:
* Informar a maior media juntamente com o nome do aluno que obteve a maior média.*/

import readline from "readline-sync";

function mediaAluna(): void {
    const quantidadeMedia: number = parseInt(readline.question("Digite a quantidade de médias que você quer:")); 
    let maiorMedia= 0;
    let nome: string = "";

    for (let contador = 0; contador < quantidadeMedia; contador++) { // 

        const nomeAluna: string = readline.question(`Digite o nome da aluna:`); 
        const media:number = parseFloat(readline.question(`Digite a média da ${nomeAluna}:`));
    
        if(media > maiorMedia) {
            maiorMedia = media;
            nome = nomeAluna;           
    }
}

    console.log(`A maior média foi: ${maiorMedia} de ${nome}`);
}

mediaAluna();