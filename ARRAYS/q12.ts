import readline from "readline-sync";

const vetor: number [] = [1, 2, 3, 4, 5, 11, 12, 13, 14, 15, 26, 27, 28, 29, 30, 41, 42, 43, 44, 45];
const tamanhoVetor = 20;


console.log("\nDigite um número positivo para vermos se ele está no vetor.\n> Para sair do programa digite um número negativo.");

while(true){

    const resposta = Number (readline.question(`Digite um numero: `));


   if ( resposta > 0 ){

        let encontrado = false;

        for(let i = 0; i < tamanhoVetor; i++){

        

            if( resposta === vetor[i] ){

            console.log("O valor está presente no vetor");

            encontrado = true; 
            break; 
         }


        }

        if (!encontrado) {

            console.log("O valor não está presente no vetor");

        }


    
    } else {

        console.log("Encerrando o programa");
        
        break;
    }
    
}
