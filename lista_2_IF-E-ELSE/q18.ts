import readline from "readline-sync";

function idade(n1: number, n2: number): Number {

    let idade = -1 ;
        
    for(let i = n1; i <= n2; i++) {

        idade++;

    }
    return idade;

}

function idadeEm2050(n1: number): Number {

    let idade = -1 ;
        
    for(let i = n1; i <= 2050; i++) {

        idade++;

    }
    return idade;
    
}

let anoDeNas: number = Number (readline.question("Qual o ano do seu nascimento:"));
let anoAtual: number = Number (readline.question("Qual o ano atual:"));

console.log(`Sua idade no ano atual de ${anoAtual} é de ` + idade(anoDeNas, anoAtual) + " e a sua idade em 2025 será",idadeEm2050(anoDeNas));