//? ---- INSTRUÇÕES:
//* 1. Receber 3 notas
//* 2. calcular media
//* 3. imprimir aprovado/recuperação/reprovado
//TODO conceitos: --- if/else, number, variáveis

function calcMedia(nota1, nota2, nota3) {
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        return "Digite apenas números";
    }

    if (
        nota1 < 0 ||
        nota2 < 0 ||
        nota3 < 0 ||
        nota1 > 10 ||
        nota2 > 10 ||
        nota3 > 10
    ) {
        return "Notas inválidas";
    }

    const media = (nota1 + nota2 + nota3) / 3;

    if (media >= 6) {
        return `Aluno aprovado, a média foi: ${media.toFixed(2)}`;
    } else if (media >= 5) {
        return `Aluno em recuperação, a média foi: ${media.toFixed(2)}`;
    } else {
        return `Aluno reprovado, a média foi: ${media.toFixed(2)}`;
    }
}

let nota1 = 3.6;
let nota2 = 4.8;
let nota3 = 8.4;

const resultado = calcMedia(nota1, nota2, nota3);

console.log(resultado);
