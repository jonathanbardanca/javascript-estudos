/* 💻 Desafio 2: Destructuring, Rest e Template Literals (Mão na massa)
Escreva um código em JavaScript que receba as informações de resposta de uma API simulada abaixo:
const respostaAPI = {
  status: 200,
  data: {
    id: 1042,
    nomeItem: "Macbook Pro M3",
    precos: ,
    especificacoes: {
      ram: "16GB",
      ssd: "512GB"
    }
  }
};

Seu objetivo:
Use Destructuring para extrair as seguintes variáveis em uma única linha (ou bloco de desestruturação limpo):
nomeItem
ram e ssd (que estão aninhados dentro de especificacoes)
O primeiro preço do array de precos (salve em uma variável chamada precoOriginal)
Use Template Literals para formatar e exibir no console a seguinte frase exata utilizando as variáveis extraídas:
"O produto Macbook Pro M3 (16GB RAM / 512GB SSD) está custando R$ 12000." */

const respostaAPI = {
  status: 200,
  data: {
    id: 1042,
    nomeItem: "Macbook Pro M3",
    precos: [],
    especificacoes: {
      ram: "16GB",
      ssd: "512GB"
    }
  }
};

const { nomeItem, precos: [precoOriginal],especificacoes: { ram, ssd } } = respostaAPI.data;
console.log(`O produto ${nomeItem} (${ram} RAM / ${ssd} SSD) está custando R$ 12000.`);