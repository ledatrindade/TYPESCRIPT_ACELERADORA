/*O problema:
Implemente o método criaObjeto, que recebe como argumento uma string no formato dd/mm/aaaa, e retorna um objeto, do tipo:
{
    dia: dd,
    mes: mm,
    ano: aaaa
}*/

import readline from "readline-sync";//readline-sync é uma biblioteca, responsavel por testarmos o código no terminal, necessário fazer a instalação antes de rodar.//

function criaObjeto(data: string): { dia: number, mes: number, ano: number} {// Aqui, defino como minha função vai receber os inputs,  no caso em string e como ela vai retornar, no caso number."
 // Aqui, defino que a função vai retornar em number e chamo os metodos para converter string em objeto//
    const dataEntrada: string[] = data.split("/");// aqui a split entende que é uma data pela barra de separação / e retorna uma array, ou seja o numero que quero.
    const dia: number = parseInt(dataEntrada[0]);// Aqui uso o parseInt para que a string da dataENtrada retorne em numero inteiro//  
    const mes: number = parseInt(dataEntrada[1]);
    const ano: number = parseInt(dataEntrada[2]);
    return {dia, mes, ano}; //As const estão dentro dos colchetes para que retorne os valores delas.
 }
   
function retorno(){
    const dataRecebida: string = readline.question("Digite uma data: ");
    const dataUsuario = criaObjeto(dataRecebida);
    console.log(dataUsuario);
}
 retorno();

 module.exports = criaObjeto;