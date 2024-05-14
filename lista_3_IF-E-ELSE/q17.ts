import readline from "readline-sync";

function quadrado(n1: number): number {

    return n1 * n1;
    
}

function raizQuadrada (n1: number): number {

    return Math.sqrt(n1);
}

console.log("Digite dois números diferentes, para acharmos o quadrado do menor e a raiz quadrada do maior.");
let num1: number = Number (readline.question("Dgite o primeiro numero:"));
let num2: number = Number (readline.question("Dgite o segundo numero:"));


if ( num1 < num2 ){
    console.log(`O quadrado do número ${num1} é: ${quadrado(num1)}\nA raiz quadrada de ${num2} é: ${raizQuadrada(num2)}`);
} else if ( num1 > num2 ){
    console.log(`O quadrado do número ${num2} é: ${quadrado(num2)}\nA raiz quadrada de ${num1} é: ${raizQuadrada(num1)}`);
} else {
 console.log("Os números devem ser diferentes, respostas inválidas");
}

