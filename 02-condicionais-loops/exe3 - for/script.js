/* Crie um array chamado estoqueProdutos contendo objetos de produtos (cada produto deve ter nome e quantidade).
Escreva um loop for clássico para percorrer todo o array de produtos
.
Dentro do loop, use if/else para avaliar a quantidade:
Se a quantidade for 0, exiba no console: "PRODUTO X: ESGOTADO!"
Se a quantidade for menor ou igual a 5 (e maior que 0), exiba: "PRODUTO X: Estoque crítico (apenas Y unidades restante)."
Caso contrário, exiba apenas o nome do produto e a quantidade normal. */

/* console.log(`---------- Versao com for ----------`);

const estoqueProdutos = [
    {produto: "banana", quantidade: 5},
    {produto: "uva", quantidade: 10},
    {produto: "laranja", quantidade: 0}
];

for (let i = 0; i < estoqueProdutos.length; i++) {
    if (estoqueProdutos[i].quantidade === 0) {
        console.log(`Produto: ${estoqueProdutos[i].produto}: ESGOTADO!`);
    } else if (estoqueProdutos[i].quantidade <= 5 && estoqueProdutos[i].quantidade > 0) {
        console.log(`Produto: ${estoqueProdutos[i].produto}: Estoque crítico (apenas ${estoqueProdutos[i].quantidade} unidades restantes)`);
    } else {
        console.log(`Produto: ${estoqueProdutos[i].produto}: Estoque ${estoqueProdutos[i].quantidade} unidades restantes`);
    }
} */

 console.log(`---------- Versao com forEach ----------`);

 const estoqueProdutos = [
    {produto: "banana", quantidade: 5},
    {produto: "uva", quantidade: 10},
    {produto: "laranja", quantidade: 0}
];

estoqueProdutos.forEach(item => {
    if (item.quantidade === 0) {
        console.log(`PRODUTO ${item.produto}: ESGOTADO!`);
    } else if (item.quantidade <= 5 && item.quantidade > 0) {
        console.log(`PRODUTO ${item.produto}: Estoque crítico (apenas ${item.quantidade} unidades restantes)`);
    } else {
        console.log(`PRODUTO ${item.produto}: Estoque ${item.quantidade} unidades restantes`);
    }
});