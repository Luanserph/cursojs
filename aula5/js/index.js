//COMENTARIO 1, tudo aqui será de certa forma exclusiva do javascript, tenha em mente que essa posição do script no final do body é uma boa pratica, pois nao irá retardar o carregamento de sua pagina.

//COMENTARIO 2, o ambiente do navegador é diferente do ambiente do node, algumas funções nao serão carregadas da mesma maneiera, ou muitas das vezes nem existem no node, da maneira que existe no navegador, EX. ALERT.

//COMENTARIO 3, precisamos nos alertar tambem, no caminho em que nossos arquivos se encontram,' o src="" ', precisa esta correto para que nosso script funcione. Se atente ao caminho.

console.log("Teste do comando.");
console.log("Comando só será exibido no console do navegador.")