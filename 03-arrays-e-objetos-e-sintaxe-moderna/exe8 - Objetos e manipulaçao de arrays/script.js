/* Exercício 2: Atualização de Estado Imutável (Carrinho de Compras)
Cenário real: Em aplicações modernas (Node, React, Next.js), nunca devemos mutar/alterar o objeto original diretamente. Precisamos criar novas cópias atualizadas usando o operador Spread (...).

Sua missão:Crie uma função adicionarItem(carrinhoAtual, novoItem) que retorne um novo objeto de carrinho mantendo os dados anteriores, mas adicionando o novoItem ao array itens sem alterar o objeto carrinho original (use spread operator).  

Crie uma função aplicarCupom(carrinhoAtual, codigoCupom) que retorne um novo objeto alterando apenas a propriedade cupom e aplicando um desconto de 10% no precoUnitario de todos os itens do carrinho.   

Crie um método/função calcularTotal que utilize Object.values ou reduce para calcular e retornar o preço total da compra. */

const carrinho = {
  usuario: 'Carlos',
  itens: [
    { id: 101, nome: 'Headset', quantidade: 1, precoUnitario: 200 }
  ],
  cupom: null
};

const novoItem = {id: 102, nome: 'pc', quantidade: 5, precoUnitario: 1000};
const codigoCupom = "DESCONTO10";

/* ---------- Funçoes ---------- */

function adicionarItem(carrinhoAtual, novoItem) { 
  const carrinhoNovo = { ...carrinhoAtual, itens: [...carrinhoAtual.itens, novoItem] };  
  return carrinhoNovo; 
}

function aplicarCupom(carrinhoAtual, codigoCupom) {
  const carrinhoNovo = {
    ...carrinhoAtual,
    itens: carrinhoAtual.itens.map(item => {
      return {
        ...item, 
        precoUnitario: item.precoUnitario * 0.90
      };
    }), 
    cupom: codigoCupom
  };
  return carrinhoNovo;
}

function calcularTotal(carrinhoAtual) {
  return carrinhoAtual.itens.reduce((acumulador, itemAtual) => {
    return acumulador + (itemAtual.precoUnitario * itemAtual.quantidade);
  }, 0);
}

/* ---------- Inicio ----------" */

console.log('1. Carrinho Inicial:', carrinho);

console.log("--------------------");

const carrinhoComItem = adicionarItem(carrinho, novoItem); 
console.log('2. Com item adicionado:', carrinhoComItem);

console.log("--------------------");

const carrinhoComCupom = aplicarCupom(carrinhoComItem, codigoCupom); 
console.log('3. Com cupom aplicado:', carrinhoComCupom);

console.log("--------------------");

const total = calcularTotal(carrinhoComCupom); 
console.log(`\nTotal da compra: R$ ${total.toFixed(2)}`);