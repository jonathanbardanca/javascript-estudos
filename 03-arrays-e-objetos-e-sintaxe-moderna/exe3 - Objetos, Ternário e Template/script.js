/* 🛒 Desafio 3: O Renderizador de Notificações (Ternário + Template Literals + Falsy)
Você está construindo o cabeçalho do seu Dashboard
. Uma API retorna um objeto representando o perfil do usuário logado:
const usuarioLogado = {
  nome: "Jonathan",
  nickname: "", // O usuário pode não ter definido um apelido
  notificacoesNaoLidas: 0, // Pode ser 0 ou mais
  isPremium: false
};
Seu Objetivo: Crie uma string chamada mensagemPainel usando Template Literals e Ternários para exibir no topo do painel
.
Nome de exibição: Se o usuário tiver um nickname (valor truthy), exiba o apelido
. Se o nickname estiver vazio (valor falsy), use o nome real como padrão
.
Badge Premium: Se o usuário for Premium, inclua o texto "[PREMIUM]" logo após o nome. Se não for, não mostre nada.
Contador de notificações: Se o usuário tiver notificações não lidas, mostre a contagem (ex: "Você tem 5 novas notificações"). Se as notificações forem 0 ou nulas, exiba "Seu painel está atualizado". (Atenção: use o operador correto para que o número 0 não seja engolido de forma errada) */

const usuarioLogado = {
  nome: "Jonathan",
  nickname: "", // O usuário pode não ter definido um apelido
  notificacoesNaoLidas: 10, // Pode ser 0 ou mais
  isPremium: false
};

let mensagemPainel = `Nome: ${usuarioLogado.nickname ? usuarioLogado.nickname : usuarioLogado.nome}${usuarioLogado.isPremium ? "[PREMIUM]" : ""}. | ${usuarioLogado.notificacoesNaoLidas ? `Você tem ${usuarioLogado.notificacoesNaoLidas} novas notificações` : "Seu painel está atualizado"} `;

console.log(mensagemPainel);