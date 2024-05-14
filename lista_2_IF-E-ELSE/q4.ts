import readline from "readline-sync";

// 4 questão

function mediaA (n1: number, n2: number, n3: number): number {
    
    let mediaA =( n1 + n2 + n3) / 3;

    return mediaA;
}

console.log("Digite a três notas para lançarmos sua média")
let n: number = Number(readline.question("Digite a primeira nota: "));
let z: number = Number(readline.question("Digite a segunda nota: "));
let a: number = Number(readline.question("Digite a terceira nota: "));

console.log("Mèdia:", mediaA(n, z, a));