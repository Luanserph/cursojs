//Operadores aritméticos, de atribuição, conversão, incremento e decremento


let num1 = 10;
let num2 = 5;
let num3 = 2;
const num4 = '10';

const soma = num1 + num2 + num3;
const sub = num1 - num2 - num3;
const div = num1 / num2;
const multi = num1 * num2;
const pot = num1 ** num2;
console.log('=============================================================');
console.log('====== Adição das variaveis ======')
console.log(`${soma}`);
console.log('===== Subtração das variaveis =====')
console.log(`${sub}`);
console.log('===== Multiplicação das variaveis =====')
console.log(`${multi}`);
console.log('===== Divisão das variaveis =====')
console.log(`${div}`);
console.log('===== Potenciação das variaveis =====')
console.log(`${pot}`);
console.log('===== PRÉ Incrementação das variaveis =====')
console.log(`${++num1}`);
console.log('===== PÓS Incrementação das variaveis =====')
console.log(`${num1++}`,`${num1}`);
console.log('===== PRÉ decremento das variaveis =====')
console.log(`${--num1}`);
console.log('===== PÓS decremento das variaveis =====')
console.log(`${num1--}`,`${num1}`);
console.log(typeof parseInt (num4));