import readline from "readline-sync";

function calcularDiasVividos(diaNascimento: number, mesNascimento: number, anoNascimento: number): number {
    const diasPorAno = 365;
    const diasPorMes = 30;

    const dataAtual = new Date();
    const diaAtual = dataAtual.getDate();
    const mesAtual = dataAtual.getMonth() + 1; // Mês começa em 0
    const anoAtual = dataAtual.getFullYear();

    const diasVividosAno = (anoAtual - anoNascimento) * diasPorAno;
    const diasVividosMes = (mesAtual - mesNascimento) * diasPorMes;
    const diasVividosDia = diaAtual - diaNascimento;

    return diasVividosAno + diasVividosMes + diasVividosDia;
}

    let nome: string = (readline.question("Digite seu nome:"));
    let diaNascimento: number = Number(readline.question("Digite o dia do seu nascimento:"));
    let mesNascimento: number = Number(readline.question("Digite o mês do seu nascimento:"));
    let anoNascimento: number = Number(readline.question("Digite o ano do seu nascimento:"));

    let diasVividos = calcularDiasVividos(diaNascimento, mesNascimento, anoNascimento);

    console.log(`${nome}, você já viveu ${diasVividos} dias.`);




