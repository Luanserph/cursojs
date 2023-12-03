//IEE 754-2008
let num1 = 0.7;//Number
let num2 = 0.1;//Number

/*
num1 = ((num1 * 100) + (num2 * 100)) / 100;//0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100;//0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100;//1
*/
num1 = Number(num1.toFixed(2));


console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));