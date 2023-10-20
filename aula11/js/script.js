const data = new Date();

const horaDoDia = data.getHours();
const minuto = data.getMinutes();
let _resposta = window.prompt('Que horas sao?');
console.log(_resposta);
do {
    if (isNaN(_resposta))
        _resposta = window.prompt('Digite Somente numeros!');
} while (isNaN(_resposta));

if (_resposta >= 0 && _resposta <= 6)
    console.log('Vai dormir! São exatamente ' + horaDoDia +':'+ minuto);
else if (_resposta >= 6 && _resposta < 12)
    console.log('Bom dia!');
else if (_resposta >= 12 && _resposta < 18)
    console.log('Boa tarde!');
else
    console.log('Boa noite!');