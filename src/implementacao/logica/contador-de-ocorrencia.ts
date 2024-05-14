import readline from "readline-sync";//readline-sync é uma biblioteca, responsavel por testarmos o código no terminal, necessário fazer a instalação antes de rodar.//

 function contadorDeOcorrencia(texto: string, letra: string):number { // aqui a função recebe duas entradas dentro dos parenteses que serão string e fora dos parentese o retorno em number.//
    let busca: number = 0;
    const buscaLetra : string[] = texto.split('');// usando o metodo split, ele faz a busca de cada letra desejada//

    for(let i: number = 0; i< buscaLetra.length; i++){ 
        if(buscaLetra[i] === letra){ //Nesse incremento confirma se a letra é realmente a digitada)
            busca++;
        }
    }   
    return busca;
}   
    // Abaixo, o código constroi outra função que mostra para a usuária, o input de texto, da letra buscada e quantas vezes ela foi inserida//
    function retorno() {
    
    let texto: string = readline.question("Digite um texto: ");
    let letra: string = readline.question("Digite a letra: ");
    const qtdLetras = contadorDeOcorrencia(texto, letra);
    console.log(`A letra ${letra} aparece ${qtdLetras} vezes no texto ${texto}.`);
    }
    retorno()

module.exports = contadorDeOcorrencia;
