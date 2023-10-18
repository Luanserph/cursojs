// Tipos de dados primitivos

let nome1 = "Luan"; //String
let nome2 = 'Luan'; //String
let nome3 = `Luan`; //String e TEMPLATE STRING
let num1 = 10; //number
let num2 = 12.8; //number flutuante = Float
let nomeAluno; //UNDEFINED --> Variavel indefinida, nao aponta para nenhum lugar na memoria
const sobrenomeAluno = null; //nao aponta local algum na memoria, porém ela pode ser alterada, mas naquele momento ela é nula.
const aprovado = false; //Atribuição logica, boleana ou boolean

console.log(typeof aprovado);

let a = 2;
const b = a;

console.log(a, b);

a = 3;

console.log(a, b)