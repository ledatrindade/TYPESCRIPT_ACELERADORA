/* Escreva um programa que:
- Receba dados de salário;
- Calcule média de salarios;
- Receba número de filhos;
- Calcule media de filhos;
- Mostre maior salário recebido;
- calcule percentual de pessoas com salarios até R$ 100,00;
- Finalize o programa ao receber um número negativo*/

import readline from "readline-sync";

function recebeDados(): void {
    
    let salario: number[] = [];
    let pessoas = 0;
    let percentual = 0;
    let mediaSalario = 0;
    let mediaFilhos = 0;
    

    while(true){        
        let salarioInserido: number = parseFloat(readline.question("Digite o salário:"));
        if(salarioInserido < 0){
            break;
        }
        let filhos: number = parseInt(readline.question("Digite o número de filhos:"));
        salario.push(salarioInserido);

        mediaSalario += salarioInserido;
        mediaFilhos += filhos;
        pessoas++;

        if(salarioInserido < 100){
            percentual++;
        }
    }

    let resultadoSalario = mediaSalario / pessoas;
    let resultadoFilhos = mediaFilhos / pessoas;
    let resultadoPercentual = (percentual / pessoas) * 100;

    let maior: number = Math.max(...salario);    
    
    console.log(`A média de salários é ${resultadoSalario}.`);
    console.log(`A média de filhos por pessoa é ${resultadoFilhos}`);
    console.log(`O maior salário é ${maior}`);
    console.log(`O percentual de pessoas que recebem até R$ 100,00 é ${resultadoPercentual}`)
}

recebeDados();