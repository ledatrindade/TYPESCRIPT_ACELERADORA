import readline from "readline-sync";

let entrada1: number = Number (readline.question("Digite o primeiro valor: "));
let entrada2: number = Number (readline.question("Digite o segundo valor: "));

let soma = entrada1 + entrada2;

if (soma > 50 ){

    console.log(`o resultado da soma deu ${soma}`);

}   else {
    console.log(`programa só mostrará somas a cima de 50`);
}
