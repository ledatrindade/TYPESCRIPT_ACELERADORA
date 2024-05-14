import readline from "readline-sync";//readline-sync é uma biblioteca, responsavel por testarmos o código no terminal, necessário fazer a instalação antes de rodar.//

function apuraVotacao(voto: string): string {
    let votos: number = 0; 
    let vencedora: string[] = voto.split(''); //usando o metodo split, ele faz a busca do numero desejado//

    
    for(let i: number = 0; i < vencedora.length; i++) { 
        if(vencedora[i] === String(voto)) { // Esse if é referente a comparação para realizar o calculo)
            votos++;
        }           
    }
        if(votos === 1){
            console.log("Vencedora nº1!");
        }
        else if(votos === 2){
            console.log("Vencedora nº2!");
        }    
        else if (votos === 3) {
        console.log("Vencedora 3");
    }
    else {
        console.log("Deu empate");
    }
    return votos[0];
}

function retorno(){
        const voto: string = readline.question("Digite um texto: ");
        const digiteVoto = apuraVotacao(voto);
        console.log(digiteVoto);
}

retorno();

module.exports = apuraVotacao;