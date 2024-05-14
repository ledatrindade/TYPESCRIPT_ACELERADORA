import readline from "readline-sync";

// 6 questão

function aVista (n1: number): number {

    let desconto = n1 * 0.1;

    desconto = n1 - desconto;
  
    return desconto;
}

function quatroParcelas (n1: number): number {

    let acrescimo = n1 * 0.05;

    acrescimo = acrescimo + n1;
  
    return acrescimo;
}

function converterParaNumero(texto: string): number {
    // Substitui vírgula por ponto e converte para número
    return parseFloat(texto.replace(',', '.'));
}



let prec: string =(readline.question("Digite o preco da etiqueta: "));
console.log("Forma de pagamento:\n 1 - Á vista (desconto de 10%) \n 2- Em duas parcelas (sem juros) \n 3 - Em quatro parcelas (acréscimo de 5%)" );
let pag: number = Number(readline.question("Digite a forma de pagamento : "));

let preco = converterParaNumero(prec);

let resultado: number = 0;

if ( pag === 1 ){

   resultado = aVista(preco);
} else if ( pag === 2){

    resultado = preco;
} else if ( pag === 3 ){

    resultado = quatroParcelas(preco);
} else {
    console.log("Forma de pagamento inválida");
}
 
console.log(`Valor a ser pago: ${resultado.toFixed(2)}R$`);

