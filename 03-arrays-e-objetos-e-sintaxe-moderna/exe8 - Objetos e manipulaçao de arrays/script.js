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

function adicionarItem(carrinhoAtual, novoItem) {
  const carrinhoNovo = {
    ...carrinhoAtual, 
    itens: [...carrinhoAtual.itens, novoItem]
  };

  return console.log(carrinhoNovo);
}

const novoItem = {id: 102, nome: 'pc', quantidade: 5, precoUnitario: 1000};

adicionarItem(carrinho, novoItem);

console.log("--------------------");

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

  console.log(carrinhoNovo);
  return carrinhoNovo;
}

const codigoCupom = "DESCONTO10";

aplicarCupom(carrinho, codigoCupom);


console.log("--------------------");

const carrinho2 = {
  usuario: 'Carlos',
  itens: [
    { id: 101, nome: 'Headset', quantidade: 1, precoUnitario: 180 },
    { id: 102, nome: 'pc', quantidade: 5, precoUnitario: 900 }
  ],
  cupom: 'DESCONTO10', 
  
  calcularTotal() {
    return this.itens.reduce((acumulador, itemAtual) => {
      return acumulador + (itemAtual.precoUnitario * itemAtual.quantidade);
    }, 0);
  }
};

const total = carrinho2.calcularTotal();
console.log(`Total da compra: R$ ${total.toFixed(2)}`);