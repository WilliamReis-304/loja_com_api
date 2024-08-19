// Saldo inicial fictício
let saldo = 1000;

// Função para realizar a operação selecionada
const realizarOperacao = () => {
    const operacao = document.getElementById("operacao").value;
    const valorInput = document.getElementById("valor");
    const resultado = document.getElementById("resultado");
    let valor = parseFloat(valorInput.value);

    // Limpar a mensagem de resultado
    resultado.innerText = "";

    // Consultar saldo
    if (operacao === "saldo") {
        resultado.innerText = `Seu saldo atual é: R$ ${saldo.toFixed(2)}`;
        return;
    }

    // Verificar se o valor é válido para saque e depósito
    if (isNaN(valor) || valor <= 0) {
        resultado.innerText = "Por favor, insira um valor válido.";
        return;
    }

    // Sacar dinheiro
    if (operacao === "sacar") {
        if (valor > saldo) {
            resultado.innerText = "Saldo insuficiente para realizar o saque.";
        } else {
            saldo -= valor;
            resultado.innerText = `Saque de R$ ${valor.toFixed(2)} realizado com sucesso. Seu saldo atual é: R$ ${saldo.toFixed(2)}`;
        }
    }

    // Depositar dinheiro
    if (operacao === "depositar") {
        saldo += valor;
        resultado.innerText = `Depósito de R$ ${valor.toFixed(2)} realizado com sucesso. Seu saldo atual é: R$ ${saldo.toFixed(2)}`;
    }

    // Limpar o campo de valor após a operação
    valorInput.value = "";
};
