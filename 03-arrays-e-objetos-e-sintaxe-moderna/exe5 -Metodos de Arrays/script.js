/* 
- Escreva o código para resolver cada item:  1. map()  
- Crie um novo array contendo apenas os títulos das tarefas.  2. filter()  
- Filtre apenas as tarefas que não estão concluídas (concluida === false).  3. find()  
- Encontre e guarde em uma variável a tarefa que tem o id igual a 102.  4. some()  
- Verifique se existe pelo menos uma tarefa com prioridade "baixa" (o resultado deve ser true ou false). */

const tarefas = [
  { id: 101, titulo: "Criar layout", concluida: true, prioridade: "alta" },
  { id: 102, titulo: "Configurar banco de dados", concluida: false, prioridade: "alta" },
  { id: 103, titulo: "Enviar e-mails de teste", concluida: false, prioridade: "baixa" },
  { id: 104, titulo: "Ajustar CSS dos botões", concluida: true, prioridade: "media" }
];

console.log(`- Tarefas`);

const titulos = tarefas.map(item => item.titulo).join(", ");
console.log(titulos);

console.log(`-----//-----`);

console.log(`- Tarefas nao conluidas`);

const tarefasNaoConcluidas = tarefas.filter(tarefa => tarefa.concluida===false).map(item => item.titulo).join(", ");
console.log(tarefasNaoConcluidas);

console.log(`-----//-----`);

console.log(`- Encontrar tarefa especifica`);

const tarefaAtual = tarefas.find(item => item.id === 102);
console.log(tarefaAtual);

console.log(`-----//-----`);

console.log(`- Existe uma tarefa com prioridade baixa?`);

const prioridadeBaixa = tarefas.some(item => item.prioridade === "baixa");
console.log(prioridadeBaixa);