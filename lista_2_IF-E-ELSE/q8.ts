import readline from "readline-sync";

// 8 questão

function salario (n1: number, por: number): number {
    
    let acrescimo = n1 * (por / 100);

    acrescimo = acrescimo + n1;
  
    return acrescimo;
}

function converterParaNumero(texto: string): number {
    // Substitui vírgula por ponto e converte para número
    return parseFloat(texto.replace(',', '.'));
}


let s: string = (readline.question("Digite o valor do salario: "));
let p: number = Number(readline.question("Digite o percentual de aumento sem o porcento(%): "));

let sa = converterParaNumero(s);

sa = salario(sa, p);

console.log(`Valor do sálario com o aumento de ${p}% é de: ${sa.toFixed(2)} R$`);
