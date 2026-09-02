/* Desafio 2: Simulador de Processamento Assíncrono (while + switch)
Imagine que você está simulando a leitura de uma fila de mensagens de uma API.
Crie uma variável let filaAtiva = true; e uma variável let mensagensProcessadas = 0;.
Crie um loop while que roda enquanto filaAtiva for verdadeira
.
A cada rodada do loop, adicione 1 a mensagensProcessadas.
Dentro do loop, coloque um switch avaliando o número de mensagensProcessadas:
case 3: Exiba "Alerta: Processamento na metade.".
case 5: Declare uma variável constante let mensagemSucesso = "Fila limpa com sucesso!" (isolando o escopo deste case com chaves {})
. Exiba-a no console e mude filaAtiva para false para encerrar o loop.
default: Exiba "Processando mensagem número X...". */

let filaAtiva = true;
let mensagensProcessadas = 0;

while (filaAtiva) {
  mensagensProcessadas++;

  switch (mensagensProcessadas) {
    case 3:
      console.log("Alerta: Processamento na metade.");
      break;

    case 5: {
      const mensagemSucesso = "Fila limpa com sucesso!";
      console.log(mensagemSucesso);
      filaAtiva = false;
      break;
    }

    default:
      console.log(`Processando mensagem número ${mensagensProcessadas}...`);
      break;
  }
}