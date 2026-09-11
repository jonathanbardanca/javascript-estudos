/* 1. - Usando o array mercado, verifique se a fruta "uva" está na lista (retorna true ou false).  
2. - Usando o array produtos, confira se todos os itens têm estoque maior que 0 (retorna true ou false).  
3. findIndex() - Usando o array produtos, encontre a posição (índice) do item cujo nome é "mouse".  
4. - Usando o array produtos, calcule o valor total do estoque da loja (ou seja, a soma de preco * estoque de cada produto).  
5. - Crie um código para ordenar o array produtos do mais barato para o mais caro com base na propriedade preco. */

const mercado = ["banana", "maça", "uva", "melancia", "pera"];

const produtos = [
    { id: 1, nome: "notebook", preco: 2000, estoque: 5},
    { id: 2, nome: "teclado", preco: 300, estoque: 3},
    { id: 3, nome: "mouse", preco: 150, estoque: 10},
    { id: 4, nome: "fone", preco: 700, estoque: 2}
];

console.log(`----- Tem a fruta uva? -----`);

const uva = mercado.includes("uva");
console.log(uva);

console.log(`----- Todos os itens tem estoque maior que 0? -----`);

const estoque = produtos.every(item => item.estoque > 0);
console.log(estoque);

console.log(`----- Posicao do item que contem produto mouse -----`);

const itemMouse = produtos.findIndex(item => item.nome === "mouse");
console.log(itemMouse);

console.log(`----- valor total do estoque da loja -----`);

const valorEstoque = produtos.reduce((acumulador, item) => {
    return acumulador + (item.preco * item.estoque);
}, 0);
console.log(valorEstoque);

console.log(`----- produtos do mais barato para o mais caro -----`);

const ordemPreco = produtos.sort((a, b) => a.preco - b.preco);
console.log(ordemPreco);