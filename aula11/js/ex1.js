let nome = prompt("Digite o nome do aluno: ");
let sobrenome = prompt("Digite o sobrenome do aluno: ");


    if
        (nome && sobrenome != null) {
        window.prompt("Digite somento LETRAS:");
    }

let num1 = prompt("Digite a media do primeiro bimestre: ");
let num2 = prompt("Digite a media do segundo bimestre: ");
let num3 = prompt("Digite a media do terceiro bimestre: ");
let num0 = prompt("Digite a media do quarto bimestre: ");


num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);
num0 = Number(num0);

let media = num1 + num2 + num3 + num0;

media = Number(media);

let resultado = media / 4;

resultado = Number(resultado);

console.log(`A media do aluno: ${nome} ${sobrenome}, é : ${resultado}
notas por bimestre:\n 1° bimestre ${num1}\n2° bimestre ${num2}\n3° bimestre ${num3}\n4° bimestre ${num0}`);
if (resultado < 6) console.log("Reprovado");
else
    console.log("Aprovado");