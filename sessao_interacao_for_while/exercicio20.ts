/* Faça um programa que:
- Receba vários números;
- Encerre quando receber 0;
- Indique quantos números quadrados inteiros foram lidos;*/

import readline from "readline-sync";

function numerosQuadrados(): void {
    let numero: number[] = [];   
    let soma = 0; 

    while(true){
        let numeroInserido: number = Number(readline.question("Digite um número ou 0 para encerrar:"));
        numero.push(numeroInserido);


        if(numeroInserido <= 0) 
        break;     

        // a partir daqui crio outra condicional para exibir o resultado.
        let resultado = Math.sqrt(numeroInserido); // o metodo sqrt retira a raiz quadrada dos numeros.        
        if (resultado === Math.floor(resultado)) {    // o math floor, vê se os numeros são inteiros.     
         soma++;   
    }
           
}
    console.log(`${soma} números perfeitos foram inseridos.`);

}
numerosQuadrados();

    

