// Função que exibe a tabuada de um número
function exibirTabuada(numero) {
    // Laço for para multiplicar o número pelos valores de 1 a 10
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Chamada da função para exibir a tabuada de um número, por exemplo, 7
exibirTabuada(10);
