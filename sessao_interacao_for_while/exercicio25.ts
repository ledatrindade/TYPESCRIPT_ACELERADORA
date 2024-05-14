/* Faça um programa que receba e mostre o:
- codigo de cada funcionario;
- genero de cada funcionario;
- horas trabalhadas de cada funcionário;
- salario bruto de cada funcionario;
- salario liquido de cada funcionario.
Finalizando as informações:
- Mostre a média de salarios liquidos dos funcionarios homens e mulheres separadamente.
* Cada funcionario recebe R$ 26,90 por hora trabalhada.
* o salarios dos homens tem 10% de desconto
* O salario das mulheres  tem 6% de desconto.
* finaliza a entrada de dados quando for informado o codigo -11.*/

import readline from "readline-sync"; // Importa o módulo readline-sync do Node.js para entrada de dados

interface Funcionario {
    codigo: number;
    genero: string;
    horasTrabalhadas: number;
    salarioBruto: number;
    salarioLiquido: number;
}

function calcularSalario(horasTrabalhadas: number, genero: string): number {
    const valorHora = 26.9; // Valor por hora trabalhada
    let salarioBruto = horasTrabalhadas * valorHora; // Calcula o salário bruto

    // Aplica desconto de acordo com o gênero
    if (genero.toLowerCase() === 'masculino') {
        salarioBruto -= salarioBruto * 0.1; // 10% de desconto para homens
    } else if (genero.toLowerCase() === 'feminino') {
        salarioBruto -= salarioBruto * 0.06; // 6% de desconto para mulheres
    }

    return salarioBruto;
}

let funcionarios: Funcionario[] = []; // Inicializa um array vazio para armazenar os funcionários

while (true) {
    let codigo: number = parseInt(readline.question("Digite o código do funcionário (-11 para sair): "));
    if (codigo === -11) break; // Encerra a entrada de dados se o código for -11

    let genero: string = readline.question("Digite o gênero do funcionário (masculino/feminino): ");
    let horasTrabalhadas: number = parseFloat(readline.question("Digite as horas trabalhadas do funcionário: "));

    let salarioBruto: number = calcularSalario(horasTrabalhadas, genero); // Calcula o salário bruto
    let salarioLiquido: number = salarioBruto; // O salário líquido inicialmente é igual ao bruto

    let funcionario: Funcionario = { // Cria um objeto para o funcionário
        codigo: codigo,
        genero: genero,
        horasTrabalhadas: horasTrabalhadas,
        salarioBruto: salarioBruto,
        salarioLiquido: salarioLiquido
    };

    funcionarios.push(funcionario); // Adiciona o funcionário ao array de funcionários
}

// Calcula a média de salários líquidos separadamente para homens e mulheres
let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;
let qtdHomens = 0;
let qtdMulheres = 0;

funcionarios.forEach(funcionario => {
    if (funcionario.genero.toLowerCase() === 'masculino') {
        totalSalarioHomens += funcionario.salarioLiquido;
        qtdHomens++;
    } else if (funcionario.genero.toLowerCase() === 'feminino') {
        totalSalarioMulheres += funcionario.salarioLiquido;
        qtdMulheres++;
    }
});

const mediaSalarioHomens = qtdHomens > 0 ? totalSalarioHomens / qtdHomens : 0;
const mediaSalarioMulheres = qtdMulheres > 0 ? totalSalarioMulheres / qtdMulheres : 0;

console.log("=== Funcionários ===");
funcionarios.forEach(funcionario => {
    console.log(`Código: ${funcionario.codigo}`);
    console.log(`Gênero: ${funcionario.genero}`);
    console.log(`Horas trabalhadas: ${funcionario.horasTrabalhadas}`);
    console.log(`Salário bruto: R$ ${funcionario.salarioBruto.toFixed(2)}`);
    console.log(`Salário líquido: R$ ${funcionario.salarioLiquido.toFixed(2)}`);
    console.log("--------------");
});

console.log(`Média de salários líquidos dos homens: R$ ${mediaSalarioHomens.toFixed(2)}`); // tofixed serve para decidir quantas casas decimais um numero real vai ter, aqui terá 2 casas.
console.log(`Média de salários líquidos das mulheres: R$ ${mediaSalarioMulheres.toFixed(2)}`);//
