import readline from "readline-sync";

let num: number = Number (readline.question("Digite um numero para vermos se ele e divisivel por 10, por 5 ou por 2: "));

if (num % 10 === 0 && num % 5 === 0 && num % 2 === 0 ) {
    console.log(`O número ${num} é divisível por 10, por 5 e por 2`);
}  else if (num % 5 === 0){
    console.log(`O numero ${num} é divisível por 5`);
} else if (num % 2 === 0){
    console.log(`O numero ${num} é divisível por 2`);
} else {
    console.log(`O numero ${num} não é divisível por nenhum dos números citados`);
}

