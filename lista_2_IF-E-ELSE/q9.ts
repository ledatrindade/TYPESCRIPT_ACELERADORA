import readline from "readline-sync";

// 7 questão

function salario (n1: number): number {
    
    let acrescimo = n1 * 0.05;

    acrescimo = acrescimo + n1;

    let desconto = acrescimo * 0.07;

    desconto = acrescimo - desconto;
  
    return desconto;
}

function converterParaNumero(texto: string): number {
    // Substitui vírgula por ponto e converte para número
    return parseFloat(texto.replace(',', '.'));
}


let s: string = (readline.question("Digite o valor do salario: "));

let sa = converterParaNumero(s);

sa = salario(sa);

console.log(`Valor do sálario com a gratificação de 5% e o desconto de impostos sobre de 7% é de: ${sa.toFixed(2)} R$`);
