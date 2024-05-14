import readline from "readline-sync";

function pol(n1: number): number {

    return n1 * 12;
    
}

function jar(n1: number): number {

   return  n1 / 3;
}

function mil(n1: number): number {

    return n1 / 5280;
}

let n: number = Number(readline.question("Digite o valor da medida em pes:"));

console.log(`O resultado da media ${n} em pes convertida para:`);

console.log(`Polegadas:`, pol(n));
console.log(`Jardas:`, jar(n));
console.log(`Milhas:`, mil(n));

//1 pé = 12 polegadas
//1 jarda = 2 pés
//1 milha = 1760 jardas