import readline from "readline-sync";
function calcularAreaCirculo(raio: number): number {
    const pi: number = Math.PI;
    return pi * (raio * raio);
}


    let raio: number = Number(readline.question("Digite o raio do circulo:"));

    let area: number = calcularAreaCirculo(raio);

    console.log(`A área do círculo com raio ${raio} é ${area.toFixed(2)}.`);



