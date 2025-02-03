function somaNumeros(n) {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
        soma += i;
    }
    return soma;
}

// Exemplo de uso
const numero = parseInt(prompt("Digite um número: "));
if (!isNaN(numero) && numero > 0) {
    console.log(`A soma de 1 até ${numero} é: ${somaNumeros(numero)}`);
} else {
    console.log("Por favor, digite um número inteiro positivo.");
}