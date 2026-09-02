/* 💻 Desafio 2: Clonagem Segura de Objetos com Spread e Condicionais (Mão na massa)
Mutações acidentais em referências de objetos geram bugs catastróficos no gerenciamento de estado do React
.
const estadoOriginal = {
  id: 1,
  titulo: "Aprender JavaScript",
  metadados: {
    autor: "Origamid",
    concluido: false
  }
};
Seu objetivo:
Crie um novo objeto chamado novoEstado que seja uma cópia de estadoOriginal, mas alterando a propriedade concluido para true
.
Regra de Ouro: Você não pode alterar o objeto estadoOriginal diretamente. Use o operador Spread para clonar as propriedades do objeto e do sub-objeto metadados de forma a garantir que as referências na memória sejam diferentes (evitando mutação acidental)
.
Adicione uma verificação condicional rápida usando o operador Ternário para exibir no console se o clone foi bem-sucedido (ou seja, se estadoOriginal.metadados.concluido continua sendo false enquanto novoEstado.metadados.concluido é true). */

const estadoOriginal = {
  id: 1,
  titulo: "Aprender JavaScript",
  metadados: {
    autor: "Origamid",
    concluido: false
  }
};

const novoEstado = { ...estadoOriginal, metadados: { ...estadoOriginal.metadados, concluido: true} };
console.log(!estadoOriginal.metadados.concluido && novoEstado.metadados.concluido ? "sucesso!!!" : "Erro!!!");

console.log(`estadoOriginal: ${estadoOriginal.metadados.concluido}`);
console.log(`novoEstado: ${novoEstado.metadados.concluido}`);