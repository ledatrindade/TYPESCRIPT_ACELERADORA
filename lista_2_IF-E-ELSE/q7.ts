import readline from "readline-sync";

// 7 questão

function salario (n1: number): number {
    
    let acrescimo = n1 * 0.25;

    acrescimo = acrescimo + n1;
  
    return acrescimo;
}

function converterParaNumero(texto: string): number {
    // Substitui vírgula por ponto e converte para número
    return parseFloat(texto.replace(',', '.'));
}


let s: string = (readline.question("Digite o valor do salario: "));

let sa = converterParaNumero(s);

sa = salario(sa);

console.log(`Valor do sálario com o aumento de 25% é de: ${sa.toFixed(2)}R$`);
