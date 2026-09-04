/* 📦 Desafio 4: O Tratador de Respostas de API (Destructuring + Rest)
Você fez uma requisição para a API de faturamento do seu Dashboard
. O back-end retornou um objeto complexo e aninhado contendo a transação do cliente
:
const respostaFaturamento = {
  idTransacao: "tx_948203",
  status: "sucesso",
  data: {
    cliente: {
      nomeCliente: "Ana Silva",
      email: "ana@email.com"
    },
    valores: {
      subtotal: 150.00,
      taxa: 10.00
    },
    historico: ["criado", "processando", "pago"]
  }
};
Seu Objetivo: Crie uma função chamada processarTransacao que recebe esse objeto por parâmetro e realiza as seguintes tarefas usando Destructuring e Rest
:
Extraia as variáveis idTransacao e status diretamente
.
Extraia o nomeCliente e a taxa (que estão aninhados em data.cliente e data.valores, respectivamente)
.
Extraia o primeiro item do array de histórico em uma variável chamada statusInicial
.
Agrupe todo o restante do histórico do array em um novo array chamado proximosPassos usando o operador Rest
.
Retorne um novo objeto simplificado contendo: idTransacao, nomeCliente, taxa, statusInicial e proximosPassos. */

const respostaFaturamento = {
  idTransacao: "tx_948203",
  status: "sucesso",
  data: {
    cliente: { nomeCliente: "Ana Silva", email: "ana@email.com" },
    valores: { subtotal: 150.0, taxa: 10.0 },
    historico: ["criado", "processando", "pago"],
  },
};
function processarTransacao(respostaFaturamento) {
  const { idTransacao, status, data } = respostaFaturamento;
  const { nomeCliente } = data.cliente;
  const { taxa } = data.valores;
  const [statusInicial, ...proximosPassos] = data.historico;
  const resumo = {
    idTransacao,
    nomeCliente,
    taxa,
    statusInicial,
    proximosPassos,
  };
  return resumo;
}
console.log(processarTransacao(respostaFaturamento));