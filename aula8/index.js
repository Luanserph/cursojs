/* Exercicios para const e let

Luan Silva de Carvalho tem 29 anos, pesa 89 Kg
tem 1,75 de altura e seu IMC é = Peso ÷ (Altura × Altura).
*/

const nome = 'Luan';
const sobreNome = 'Silva de Carvalho';
const idade = '29 anos';
const peso = 87;
const altura = 1.75;

let imc = peso/(altura*altura);

//INTERPOLATION STRINGS
console.log(`${nome} ${sobreNome} tem ${idade}, pesa ${peso} Kg tem ${altura} cm de altura e seu IMC é = ${parseFloat(peso/(altura*altura)).toFixed(1)}`)

//convertendo e simplificando PARSE/tofixed
console.log(`%s %s tem %s, pesa %i Kg tem %i cm de altura e seu IMC é = %f`,nome, sobreNome, idade, peso, altura, parseFloat(imc).toFixed(1))

//CONCATENAÇÃO / CONCAT
console.log(nome,sobreNome,'tem',idade+',','pesa',peso,'Kg tem',altura,'de altura e seu IMC é = '+ imc);