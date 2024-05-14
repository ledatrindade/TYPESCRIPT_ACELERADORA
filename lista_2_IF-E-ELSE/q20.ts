import readlineSync from 'readline-sync';

function calcularSalarioReceber(numHorasTrabalhadas: number, valorSalarioMinimo: number): number {
    
    const valorHoraTrabalhada = valorSalarioMinimo;
    const salarioBruto = numHorasTrabalhadas * valorHoraTrabalhada;
    const imposto = salarioBruto * 0.03;
    const salarioReceber = salarioBruto - imposto;
    return salarioReceber;

}


    let numHorasTrabalhadas: number = Number(readlineSync.question("Digite o número de horas trabalhadas: "));
    let valorSalarioMinimo: number = Number(readlineSync.question("Digite o valor do salário mínimo: "));

    let salarioReceber: number = calcularSalarioReceber(numHorasTrabalhadas, valorSalarioMinimo);

    console.log(`O salário a receber é R$ ${salarioReceber.toFixed(2)}`);

