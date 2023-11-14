//Conversão de uma string para um numero

//Declaração das varaveis e o acionamento da API para a caixa de dialogo
let num1 = window.prompt("Digite um numero:");
let num2 = window.prompt("Digite um segundo numero:");

//Conversão das variaveis
num1 = parseInt(num1);
num2 = parseInt(num2);

//Declaração de VAR, resultado operação entre as variaveis
const resultado = num1 + num2;

console.log(`o numero resultante é: ${resultado}`);