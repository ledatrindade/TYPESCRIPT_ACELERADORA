/* Faça um programa que gera uma tabela de conversão de polegadas para centimetros, de 1 a 20.
Considere que 1 pol = 2,54cm.*/

import readline from "readline-sync";

function converteMedida() {

    const polegada = 2.54;
        for(let i = 0; i <= 20; i++){
        let resultado: number = polegada * i;   
        console.log(resultado);
}
}
converteMedida();