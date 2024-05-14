/* Construa um programa que:
- Calcule em quantos anos Zé será maior que Chico.
Sabendo que Chico tem 1.50m e cresce 2 cm por ano.
Zé tem 1.10 e cresce 3cm por ano.
Imprima no console a lógica.*/

import readline from "readline-sync";

function medidas(): void {
    let chico: number = 1.50;
    let ze: number = 1.10;
    let ano = 0;
    while(chico >= ze){
        ze += 0.03
        chico += 0.02;
        ano++;
    }
    console.log(`Zé será maior que Chico em ${ano} anos.`);
}
medidas();