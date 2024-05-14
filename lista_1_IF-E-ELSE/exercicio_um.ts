function somar (n1: number, n2: number, n3: number): number {

let soma;

soma = n1 + n2 + n3;

return soma;
} 

function divisao (n1: number, n2: number): number {

    let divisao;
    
    divisao = n1 / n2;
    
    return divisao;
} 


function anoDNascimento (n1: number): void {

        let idade = -1 ;
        
        for(let i = n1; i <= 2024; i++) {

            idade++;
   
        }

        if (idade>=18){

            console.log(`IDADE: ${idade} - Maior de idade`);
        } else {

            console.log(`IDADE: ${idade} - Menor de idade`);
        }
    }


function mediaA (n1: number, n2: number): number {

        let nota = 0;
        
        nota = (n1 + n2)/2;

        return nota;
    }



console.log("A soma é:", somar(3, 2 , 2))

console.log("A divisão é:", divisao(9, 3));

anoDNascimento(2004);

console.log("A nota é:", mediaA(8, 7));