import readline from "readline-sync";

function divisao (n1: number, n2: number){

    let divisao = 0;

    if(n2===0){
        console.log("divisão não poderá ser realizada, pois seu divisor é 0")
        return undefined;
    }else{
    
    divisao = n1 / n2;
    return divisao
    }
    
} 

function divisao2 (n1: number, n2: number): number{

    let divisao = 0;

    if(n2===0){
        while (true){
         console.log("divisão não poderá ser realizada, pois seu divisor é 0")  
        let n2: number = Number(readline.question("Digite um valor valido para ser o divisor: "));
         if(n2 !== 0){
            divisao = n1 / n2;
            break
         }
        }
         return divisao;
        }else{
    
    divisao = n1 / n2;
    return divisao
    }
}

function reajuste (n1: number): number{

let salario = 0;

    if(n1<=2500.00){

       salario = n1 * 0.2;

       salario = salario + n1;
 
         return salario;
        }else{
            
        salario = n1 * 0.1;

        salario = salario + n1;
      
        return salario;
    }
}

function mediaA (n1: number, n2: number, n3: number, n4: number): string{

    let mediaA = 0;

    mediaA = (n1 + n2 + n3 + n4)/4;

    if(mediaA >= 7) {
        return "APROVADO"

    } else if (mediaA < 7 && mediaA >= 4){
        return "EXAME"
    }
    else {
        return "REPROVADO"
    }


        
   
     
}
    




let n: number = Number(readline.question("Digite um valor para ser o divindendo: "));
let z: number = Number(readline.question("Digite um valor para ser o divisor: "));



const resultado1 = divisao(n, z);


if (resultado1 !== undefined) {
    console.log("O resultado da divisão é:", resultado1);
}

let n2: number = Number(readline.question("Digite um valor para ser o divindendo: "));
let z2: number = Number(readline.question("Digite um valor para ser o divisor: "));



console.log("O resultado da divisão é:", divisao2(n2, z2));

let s: number = Number(readline.question("Digite o valor do seu salario: "));

console.log("Seu salário ficou:", reajuste(s));

let nota1: number = Number(readline.question("Digite a primeira nota: "));
let nota2: number = Number(readline.question("Digite a segunda nota: "));
let nota3: number = Number(readline.question("Digite a terceira nota: "));
let nota4: number = Number(readline.question("Digite a quarta nota: "));

console.log("Seu resultado foi:", mediaA(nota1, nota2, nota3, nota4));



