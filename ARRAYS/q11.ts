import readline from "readline-sync";

const gabDaProva: string[] = [];
const tamanhoVetor = 8;
const tamanhoVetorAluno = 10;

console.log("Corrigir provas de múltipla escolha.\n");

for (let i = 0; i < tamanhoVetor; i++) {
    const resposta = readline.question(`Digite o gabarito da questão ${i + 1}: `);
    gabDaProva.push(resposta);
}

console.log("\nNúmero e prova dos alunos:\n");

for (let j = 0; j < tamanhoVetorAluno; j++) {
    const aluno: number[] = [];
    const provaAluno: string[] = [];
    let nota = 0;

    const numAluno = Number(readline.question(`Digite o número do aluno: `));
    aluno.push(numAluno);

 
    for (let i = 0; i < tamanhoVetor; i++) {
        const respostaAluno = readline.question(`Digite a resposta do aluno ${numAluno} na questão ${i + 1}: `);
        provaAluno.push(respostaAluno);

        if (gabDaProva[i] === provaAluno[i]) {
            nota++;
        }
    }

    console.log(`------------------------\n| Número do Aluno: ${aluno[0]} | Nota: ${nota} |\n------------------------`);
}
