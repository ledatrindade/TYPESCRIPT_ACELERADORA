import readline from "readline-sync";

function quadrado(n1: number): number {

    return n1 * n1;
    
}

function cubo(n1: number): number {

    return (n1 * n1) * n1;
}

function raizQuadrada (n1: number): number {

    return Math.sqrt(n1);
}

function raizCubica (n1: number): number {

    return Math.cbrt(n1);
}

let n: number = Number(readline.question("Digite o raio do circulo:"));

while(true){

    if(n<=0){
        console.log("número inválido, digite um número maior que zero");
        let n: number = Number(readline.question("Digite o raio do circulo:"));

    } else {
        break;
    }
}

console.log(`${n} ao quadrado é ${quadrado(n).toFixed(2)}.`);
console.log(`A raiz quadrada de ${n} é ${raizQuadrada(n).toFixed(2)}.`);
console.log(`${n} ao cubo é ${cubo(n).toFixed(2)}.`);
console.log(`A raiz cúbica de ${n} é ${raizCubica(n).toFixed(2)}.`);
