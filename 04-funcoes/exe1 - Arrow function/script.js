/* 📊 Desafio 1: O Otimizador de Métricas do Dashboard (Arrow Functions + Callbacks + Array Methods)
Você recebeu do banco de dados (PostgreSQL) uma lista de faturamentos mensais da empresa
:
const faturamentos = [
  { mes: "Janeiro", receita: 15000, custo: 8000 },
  { mes: "Fevereiro", receita: 18000, custo: 9500 },
  { mes: "Março", receita: 12000, custo: 13000 }, // Prejuízo!
  { mes: "Abril", receita: 22000, custo: 10000 }
];
Seu Objetivo: Crie uma função chamada analisarPerformance que recebe o array de faturamentos e uma função de callback de formatação:
Regra de Negócio: Use métodos de array modernos (filter e map) com Arrow Functions e Retorno Implícito para extrair apenas os meses que geraram lucro (receita maior que o custo)
.
O retorno dessa operação deve ser um novo array contendo objetos estruturados como: { mes: "Nome", lucro: valorLucro }.
Injeção de Comportamento (Callback): A sua função principal deve percorrer os meses lucrativos gerados e chamar a função de callback passada para imprimir cada um de forma personalizada na tela
.
Crie uma função de callback chamada imprimirRelatorio que utilize Template Literals para exibir a frase: "No mês de X, a empresa registrou um lucro líquido de R$ Y." */

const faturamentos = [
  { mes: "Janeiro", receita: 15000, custo: 8000 },
  { mes: "Fevereiro", receita: 18000, custo: 9500 },
  { mes: "Março", receita: 12000, custo: 13000 }, // Prejuízo!
  { mes: "Abril", receita: 22000, custo: 10000 }
];

const imprimirRelatorio = item => 
  console.log(`No mês de ${item.mes}, a empresa registrou um lucro líquido de R$ ${item.lucro}.`);

const analisarPerformance = (listaFaturamentos, callback) => {
  const mesesLucrativos = listaFaturamentos
    .filter(item => item.receita > item.custo)
    .map(item => ({ mes: item.mes, lucro: item.receita - item.custo }));

  mesesLucrativos.forEach(callback);

  return mesesLucrativos;
};

const resultadoDashboard = analisarPerformance(faturamentos, imprimirRelatorio);