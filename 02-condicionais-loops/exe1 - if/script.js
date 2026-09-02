/*Você está desenvolvendo o sistema de cálculo de frete e desconto de uma loja virtual. Escreva uma estrutura condicional utilizando if, else if e else para calcular o valorFinal de uma compra baseado nas seguintes regras:
Se o usuário for da categoria "VIP", ele ganha 20% de desconto no valor total do carrinho, e o frete sempre será grátis (R$ 0), não importando o valor do carrinho.
Se o usuário for "Comum":
Para compras a partir de R$ 150, o frete é grátis (R$ 0).
Para compras abaixo de R$ 150, o frete custa R$ 15. */


/* console.log(`---------- Versao 1 ----------`);
const usuarios = [
{ id: 1, nome: "Bruno", vip: "sim", carrinho: [] },
{ id: 2, nome: "Gabriel", vip: "nao", carrinho: [] },
{ id: 3, nome: "Ana", vip: "nao", carrinho: [] }
];

let frete = 15;

let totalPedido;

usuarios[2].carrinho.push({ produto: "Mouse", preco: 100 });

let itensCarrinho = `Itens do carrinho: ${usuarios[2].carrinho.map(item => item.produto).join(", ")}`;
console.log(itensCarrinho);



let totalCarrinho = usuarios[2].carrinho.reduce((acumulador, item) => acumulador + item.preco, 0);
console.log(`Valor do carrinho: ${totalCarrinho}`); 

if (usuarios[2].vip === "sim") { 
    totalPedido = totalCarrinho * 0.8; 
    console.log("Você é VIP");             
    console.log("Valor do frete: Grátis");
} else if (totalCarrinho <= 150) { 
    totalPedido = totalCarrinho + 15; 
    console.log("Você não é VIP");
    console.log("Valor do frete: 15");
} else { 
    totalPedido = totalCarrinho;
    console.log("Você não é VIP");
    console.log("Valor do frete: Grátis");
} 

console.log(`Valor total do pedido: R$${totalPedido}`); */

console.log(`---------- Versao 2 ----------`);

const usuarios = [
    { id: 1, nome: "Bruno", vip: true, carrinho: [] },
    { id: 2, nome: "Gabriel", vip: false, carrinho: [] },
    { id: 3, nome: "Ana", vip: false, carrinho: [] }
];

const VALOR_FRETE_PADRAO = 15;
const usuarioAtivo = usuarios[2];

usuarioAtivo.carrinho.push({ produto: "Mouse", preco: 100 });

const nomesItens = usuarioAtivo.carrinho.map(item => item.produto).join(", ");
console.log(`Itens do carrinho: ${nomesItens}`);

const totalCarrinho = usuarioAtivo.carrinho.reduce((acumulador, item) => acumulador + item.preco, 0);
console.log(`Valor do carrinho: R$ ${totalCarrinho.toFixed(2)}`); 


let descontoVIP = 0;
let freteAplicado = 0;

if (usuarioAtivo.vip) {
    descontoVIP = totalCarrinho * 0.2;
    console.log("Você é VIP! Ganhou 20% de desconto e frete grátis.");
} else if (totalCarrinho < 150) {
    freteAplicado = VALOR_FRETE_PADRAO;
    console.log(`Você não é VIP. Frete padrão de R$ ${VALOR_FRETE_PADRAO} aplicado.`);
} else {
    console.log("Você não é VIP, mas sua compra passou de R$ 150. Frete grátis!");
}

const totalPedido = totalCarrinho - descontoVIP + freteAplicado;
console.log(`Valor total do pedido: R$ ${totalPedido.toFixed(2)}`);