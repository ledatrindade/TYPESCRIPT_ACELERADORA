/*Fazer uma função que retorne o nome da aluna com menor nota*/

const alunas = [
    { nome: "Ashley", prova: { p1: 5.6, p2: 6.7, p3: 9 } },
    { nome: "Sabrina", prova: { p1: 6.3, p2: 7.5, p3: 10 } },
    { nome: "Samantha", prova: { p1: 8, p2: 9.2, p3: 7 } },
    { nome: "Andreia", prova: { p1: 9, p2: 8, p3: 10 } },
    { nome: "Raquel", prova: { p1: 10, p2: 9.7, p3: 5 } },
    { nome: "Amanda", prova: { p1: 2, p2: 4.6, p3: 9.9 } },
    { nome: "Pietra", prova: { p1: 8.3, p2: 3.1, p3: 9.8 } },
    { nome: "Jaqueline", prova: { p1: 3.4, p2: 7.2, p3: 6.8 } },
    { nome: "Alessandra", prova: { p1: 1.4, p2: 2.7, p3: 6.9 } },
    { nome: "Jane Kelly", prova: { p1: 7, p2: 5.5, p3: 9.1 } },
];

    const menorMedia = alunas.reduce((parametroValorAtual, parametroMaiorValor) => { //utiliza-se o reduce quando se tem um array de valores e você quer somar todas eles, sem precisar utilizar o for ou while.
        const mediaAtual = (parametroValorAtual.prova.p1 + parametroValorAtual.prova.p2 + parametroValorAtual.prova.p3) /3;
        const mediasolicitada = (parametroMaiorValor.prova.p1 + parametroMaiorValor.prova.p2 + parametroMaiorValor.prova.p3) /3;
           return parametroMaiorValor < parametroValorAtual ? parametroValorAtual : parametroMaiorValor
    });
    console.log(menorMedia.nome);
        