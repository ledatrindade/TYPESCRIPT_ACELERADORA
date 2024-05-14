import readlineSync from 'readline-sync';

function calcularHoraEmMinutos(hora: number, minutos: number): number {
    return hora * 60 + minutos;
}

function calcularTotalMinutos(hora: number, minutos: number): number {
    return minutos + calcularHoraEmMinutos(hora, minutos);
}

function calcularMinutosEmSegundos(totalMinutos: number): number {
    return totalMinutos * 60;
}


    let hora: number = Number(readlineSync.question("Digite a hora: "));
    let minutos: number = Number(readlineSync.question("Digite os minutos: "));

    
   

    console.log(`a) A hora digitada convertida em minutos: ${calcularHoraEmMinutos(hora, minutos)}`);
    console.log(`b) O total dos minutos: ${calcularTotalMinutos(hora, minutos)}`);
    console.log(`c) O total dos minutos convertidos em segundos: ${calcularMinutosEmSegundos(calcularTotalMinutos(hora, minutos))}`);