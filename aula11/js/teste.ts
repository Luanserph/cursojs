type Mensagem = {
    greeting: string;
    message: string;
    time: string | number;
}

let pergunta: string = window.prompt('Que horas sao?') as string;
let resposta: number;

do {
    if (pergunta != null) {
        pergunta = window.prompt('Digite Somente numeros!') as string;
    }
}
while (pergunta != null || pergunta != undefined);

resposta = parseInt(pergunta);

let greeting: string | null = null;

if (resposta >= 0 && resposta <= 6)
    greeting = 'Vai dormir!'
else if (resposta >= 6 && resposta < 12)
    greeting = 'Bom dia!'
else if (resposta >= 12 && resposta < 18)
    greeting = 'Boa tarde!'
else
    greeting = 'Boa noite!'



setInterval(() => {
    if (greeting != null) {
        const data = new Date();

        let mensagem: Mensagem = {
            greeting: greeting,
            message: ' São exatamente ',
            time: data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds()
        };

        console.log(mensagem.greeting + mensagem.message + mensagem.time)
    }
}, 500)

