import readline from "readline-sync"; //readline-sync é uma biblioteca, responsavel por testarmos o código no terminal, necessário fazer a instalação antes de rodar.//

function fizzBuzz(): void {
    let numero: number = Number(readline.question("Digite um numero:"));
  
  if (numero % 3 === 0 && numero% 5 ===0) {
      console.log("FizzBuzz");
  } 
  
  else if (numero % 5 === 0) {
      console.log("Buzz");
  
  } else if (numero % 3 === 0) {
      console.log("Fizz");
  
  } else {
      console.log (String(numero));
  }
  }
  fizzBuzz();
  
module.exports = fizzBuzz;
