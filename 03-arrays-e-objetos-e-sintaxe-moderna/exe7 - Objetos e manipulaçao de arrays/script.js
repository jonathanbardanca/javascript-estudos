/* Exercício 1: Tratar dados vindos de uma API (E-commerce)
Cenário real: Você recebeu uma resposta da API com uma lista de produtos, mas precisa formatar e filtrar essas informações antes de exibi-las na tela. 

Sua missão:Crie uma função que receba essa lista e retorne apenas os produtos disponíveis em estoque (estoque > 0) utilizando manipulação de arrays e objetos (filter).

Extraia apenas as propriedades nome e preco dos produtos em estoque utilizando destructuring e retorne um novo objeto simplificado no formato { nome, precoFormatted }, onde precoFormatted seja o valor em Reais (ex: "R$ 250,00").

Obtenha uma lista com todas as categorias únicas presentes nos produtos (Dica: explore map combinado com Object ou Set)*/

const produtosAPI = [
  { id: 1, nome: 'Teclado Mecânico', preco: 250, estoque: 15, categoria: 'Periféricos' },
  { id: 2, nome: 'Mouse Gamer', preco: 120, estoque: 0, categoria: 'Periféricos' },
  { id: 3, nome: 'Monitor 144Hz', preco: 1100, estoque: 5, categoria: 'Monitores' },
  { id: 4, nome: 'Cadeira Ergonômica', preco: 850, estoque: 2, categoria: 'Móveis' }
];

const produtosDisponiveis = produtosAPI.filter(produto => produto.estoque > 0).map(({ nome, preco }) => ({           // Destructuring de nome e preco
    nome,
    precoFormatted: `R$ + ${preco.toFixed(2).split('.').join(',')}`
  }));

console.log(produtosDisponiveis);

const categoriasUnicas = [...new Set(produtosAPI.map(({ categoria }) => categoria))];

console.log('Categorias Únicas:', categoriasUnicas);