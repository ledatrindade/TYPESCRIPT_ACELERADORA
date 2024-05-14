import readline from "readline-sync";

// 5 questão

function gramas (n1: number): number {
    
    return n1 * 1000;
}


let n: number = Number(readline.question("Digite seu peso em quilos: "));

 
console.log("Resultado em gramas: " + gramas(n) + " gramas");