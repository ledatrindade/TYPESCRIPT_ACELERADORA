import readline from "readline-sync";

console.log(`digite um número e iremos informa se o número: \nEstá entre 500 e 100\nÉ igual a 400\nÉ igual a 200\nÉ igual a 5`);
let num: number = Number (readline.question("Digite um numero: "));

if (num <= 1000 && num >= 500) { 
    console.log(`O número ${num} está entre 500 e 100`);
} else if (num === 400) { 
    console.log(`O número ${num} é igual a 400`);
} else if (num === 200) { 
    console.log(`O número ${num} é igual a 200`);
} else if (num === 5) { 
    console.log(`O número ${num} é igual a 5`);
}  else {
    console.log(`O numero ${num} não está entre todos os pontos listados`);
}