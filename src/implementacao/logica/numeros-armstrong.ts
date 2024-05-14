/*Um número de Armstrong é um número em que é a soma de seus próprios dígitos 
elevados ao número de dígitos é igual ao próprio número. 
Confuso? Vejamos alguns exemplos:
9 é um número de Armstrong, porque 9 = 9 ^ 1 = 9 10 não é um número de Armstrong, 
porque 10 != 1 ^ 2 + 0 ^ 2 = 1 153 é um número de Armstrong, 
porque: 153 = 1 ^ 3 + 5 ^ 3 + 3 ^ 3 = 1 + 125 + 27 = 153 154 
não é um número de Armstrong, porque: 154 != 1 ^ 3 + 5 ^ 3 + 4 ^ 3 = 1 + 125 + 64 = 190
Escreva algum código para determinar se um número é um número Armstrong. 
Pense nos casos de teste:
Retorna mensagem de sucesso quando o numero for Armstrong
Identifica "3" corretamente, respondendo "Este eh um numero de Armstrong!"
Identifica "153" corretamente, respondendo "Este eh um numero de Armstrong!"
Retorna mensagem de aviso quando o numero NAO for de Armstrong
Identifica "10" corretamente, respondendo "Este nao eh um numero de Armstrong!"
Identifica "154" corretamente, respondendo "Este nao eh um numero de Armstrong!"*/

import readline from "readline-sync"; //readline-sync é uma biblioteca, responsavel por testarmos o código no terminal, necessário fazer a instalação antes de rodar.//

function éNumeroArmstrong(numero: number): boolean {
    let soma: number = 0;
    let numeroRecebido: number = numero; // essa variavel se refere ao numero recebido na função énumeroarmstrong.
    const numDigitado: number = Math.floor(Math.log10(numero)) + 1; // A função Math.floor arredonda para baixo numeros reais para inteiros.ex: 9,75 para 9.
                                                                    //A função log10 é como o manualzinho que diz quantas vezes você precisa apertar o botão de dividir por 10.
    while (numeroRecebido > 0) { //usando o while para rodar sobre cada digito do numero.
    const resultado: number = numeroRecebido % 10;
    soma += Math.pow(resultado, numDigitado);
    numeroRecebido = Math.floor(numeroRecebido / 10);
    }
    return numero === soma; // esse return é para devolver se o numero digitado é igual a soma das potencias elevado a 3.
}

function numerosArmstrong(): void {
    const numero: number = Number(readline.question("Digite um número:"));

    if(éNumeroArmstrong(numero)) {
        console.log("Este é um número de Armstrong!");  
    }
    else{
        console.log("Este não é um número Armstrong!");
    }
}
numerosArmstrong();
module.exports = numerosArmstrong;