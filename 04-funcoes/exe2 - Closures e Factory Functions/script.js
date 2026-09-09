/* 🔒 Desafio 2: O Criador de Tokens de Autenticação (Closures + Fábrica de Funções)
Em sistemas seguros Node.js, você precisa assinar e validar tokens de usuário
. Para evitar misturar as chaves secretas de ambientes diferentes (Desenvolvimento, Homologação e Produção), as chaves devem ser mantidas privadas
.
Seu Objetivo: Escreva uma função fábrica chamada gerarAssinadorToken que aceita um único parâmetro: chaveSecreta:
Essa função deve conter uma variável interna chamada totalDeTokensGerados = 0 (privada)
.
Ela deve retornar um objeto contendo duas funções (closures):
assinarToken(dadosUsuario): recebe um objeto de usuário, incrementa o contador privado totalDeTokensGerados e retorna uma string simulando o token assinado usando Template Literals no formato: "TOKEN_GERADO_COM_A_CHAVE_[chaveSecreta]_PARA_[dadosUsuario.nomeCompleto]"
.
obterRelatorioSeguranca(): retorna uma string informando a chave secreta atual usada e o total de tokens criados por aquele assinador até o momento.
No final do seu script, crie duas instâncias de assinadores diferentes (um com a chave "DEV_KEY" e outro com a chave "PROD_KEY"), assine alguns tokens em cada uma e exiba o relatório de segurança de cada assinador para provar que os estados internos de cada closure estão perfeitamente isolados na memória */

function gerarAssinadorToken(chaveSecreta) {
  let totalDeTokensGerados = 0;

  return {
    assinarToken(dadosUsuario) {
      totalDeTokensGerados++;
      return `TOKEN_GERADO_COM_A_CHAVE_${chaveSecreta}_PARA_${dadosUsuario.nomeCompleto}`;
    },

    obterRelatorioSeguranca() {
      return `Chave Secreta: ${chaveSecreta} | Total de Tokens: ${totalDeTokensGerados}`;
    }
  };
}

const assinadorDev = gerarAssinadorToken("DEV_KEY");
const assinadorProd = gerarAssinadorToken("PROD_KEY");


console.log(assinadorDev.assinarToken({ nomeCompleto: "Jonathan Silva" }));
console.log(assinadorDev.assinarToken({ nomeCompleto: "Maria Souza" }));

console.log(assinadorProd.assinarToken({ nomeCompleto: "Admin Sistema" }));

console.log(assinadorDev.obterRelatorioSeguranca());

console.log(assinadorProd.obterRelatorioSeguranca());