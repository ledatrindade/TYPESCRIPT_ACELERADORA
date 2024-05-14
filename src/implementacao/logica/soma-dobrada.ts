import readline from "readline-sync";//readline-sync é uma biblioteca, responsavel por testarmos o código no terminal, necessário fazer a instalação antes de rodar.//

function somaDobrada(): void{
    let numero1: number = Number(readline.question("Digite um numero:"));
    let numero2: number = Number(readline.question("Digite um numero:"));
    let resultado;
        if (numero1 === numero2) {
         resultado = (numero1 + numero2)*2;
         console.log(resultado);
    } else if (numero1 < 1 || numero2 < 1) {
        resultado = (numero1 - 1);
        console.log(resultado);0
}
    else{
        console.log(numero1 + numero2);
    }
}

somaDobrada();

module.exports = somaDobrada;