import readline from 'readline-sync';

function calcularLucro(precoFabrica: number, percentualLucro: number): number {
    return precoFabrica * (percentualLucro / 100);
}

function calcularImpostos(precoFabrica: number, percentualImpostos: number): number {
    return precoFabrica * (percentualImpostos / 100);
}

function calcularPrecoFinal(precoFabrica: number, lucro: number, impostos: number): number {
    return precoFabrica + lucro + impostos;
}


    let precoFa: number = Number(readline.question("Digite o preço de fábrica do veículo: "));
    let perLucro: number = Number(readline.question("Digite o percentual de lucro do distribuidor sem o porcento (%): "));
    let perImpostos: number = Number(readline.question("Digite o percentual de impostos sem o porcento(%): "));

    let lucro: number = calcularLucro(precoFa, perLucro);
    let impostos: number = calcularImpostos(precoFa, perImpostos);
    

    console.log(`Valor correspondente ao lucro do distribuidor: R$ ${lucro.toFixed(2)}`);
    console.log(`Valor correspondente aos impostos: R$ ${impostos.toFixed(2)}`);
    console.log(`Preço final do veículo: R$ ${calcularPrecoFinal(precoFa, lucro, impostos).toFixed(2)}`);



