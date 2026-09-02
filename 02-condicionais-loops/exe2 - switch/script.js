/* Desafio: O Processador de Webhooks (switch com Escopo)
No back-end do seu Dashboard, você receberá um evento de pagamento (webhook) do gateway de faturamento
.
case "pago": deve declarar const mensagem = "Sucesso! Acesso liberado." e exibi-la com console.log.
case "recusado": deve declarar const mensagem = "Alerta: Transação negada pelo banco." e exibi-la com console.log.
default: deve declarar const mensagem = "Status desconhecido. Verifique o suporte." e exibi-la com console.log.
const statusPagamento = "pago";

// ESCREVA SEU SWITCH CASE COM ESCOPO ISOLADO ABAIXO:*/

/* versao com escopo isolado 

switch (statusPagamento) {
    case "pago": {
        const mensagem = "Sucesso! Acesso liberado";
        console.log(mensagem);
        break;
    }

    case "recusado": {
        const mensagem = "Alerta: Transação negada pelo banco";
        console.log(mensagem);
        break;
    }

    default: {
        const mensagem = "Status desconhecido. Verifique o suporte.";
        console.log(mensagem);
        break;
    }
}*/

console.log("Versão sem escopo isolado");

let statusPagamento = "recusado";
let mensagem;

switch (statusPagamento) {
    case "pago":
    mensagem = "Sucesso! Acesso liberado"
    console.log(mensagem);
    break;
    case "recusado":
    mensagem = "Alerta: Transação negada pelo banco"
    console.log(mensagem);
    break;
    default:
    mensagem = "Status desconhecido. Verifique o suporte"
    console.log(mensagem);
}