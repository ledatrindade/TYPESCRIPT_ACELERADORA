import readline from "readline-sync";

const sobrenome: string = (readline.question("Digite seu sobrenome:"));
const nome: string = (readline.question("Digite seu nome:"));

console.log(`Sr(a). ${nome} ${sobrenome}, é uma honra contar com sua presença!`);