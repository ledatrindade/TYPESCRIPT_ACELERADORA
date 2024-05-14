import readline from "readline-sync";

let maior = 0;
let menor = 0;
let meio = 0; 

console.log("Digites três nmeros para serem colocado em ordem crescente");

for (let i = 0; i < 3; i++){

let numeros: number = Number (readline.question("Digite um numero:"));

if (i === 0) {
    menor = numeros;
    maior = numeros;
} else {
    if (numeros < menor) {
        meio = menor
        menor = numeros;
    } else if (numeros > maior) {
        meio = maior;
        maior = numeros;
    } else {
        meio = numeros;
    }
} 



}

console.log("O menor valor é:" + menor + "\nO valor entre o menor e o maior é:" + meio + "\nO maior valor é:" + maior);





