/* Desaﬁo 3
JS Adv.
Você vai simular um sistema de automação de luzes de uma casa usando JavaScript.
Objetivo:

Crie uma classe CentralDeLuzes que siga o padrão Singleton, ou seja, só pode existir uma
instância dessa central.

Essa central será responsável por ligar e desligar as luzes de diferentes cômodos da casa
ao clicar em botões da interface.

Requisitos:
 Implemente a classe CentralDeLuzes com os métodos:
 ligar(comodo)
 desligar(comodo)
 Garanta que só exista uma instância da central, independente de quantas vezes
for instanciada.

No HTML, crie botões com as propriedades data-comodo="quarto", data-comodo="sala"
etc.

Adicione event listeners nos botões. Quando o botão for clicado:
Deve chamar ligar() ou desligar() da central e mostrar na tela: "Luz do [cômodo] ligada" ou
"desligada"
Use CentralDeLuzes.getInstance() para controlar o acesso à instância
Use document.querySelectorAll() + addEventListener() para escutar os botões
Faça a luz "acender" mudando a cor do fundo de uma div representando o cômodo.
Guarde esse desaﬁo no repositório de sempre na pasta: automacao-luzes */

class CentralDeLuzes {
  constructor() {
    if (CentralDeLuzes.instance) {
      return CentralDeLuzes.instance;
    }

    this.estado = {};
    CentralDeLuzes.instance = this;
  }

  static getInstance() {
    if (!CentralDeLuzes.instance) {
      CentralDeLuzes.instance = new CentralDeLuzes();
    }
    return CentralDeLuzes.instance;
  }

  ligar(comodo) {
    this.estado[comodo] = true;
    this.atualizarInterface(comodo, true);
  }

  desligar(comodo) {
    this.estado[comodo] = false;
    this.atualizarInterface(comodo, false);
  }

  atualizarInterface(comodo, ligado) {
    const divComodo = document.getElementById(comodo);
 

    if (ligado) {
      divComodo.classList.add("luz-acesa");
      document.body.classList.add("fundo");
    } else {
      divComodo.classList.remove("luz-acesa");
      document.body.classList.remove("fundo");
    }

    
  }
}

document.querySelectorAll("button[data-comodo]").forEach((botao) => {
  botao.addEventListener("click", () => {
    const comodo = botao.getAttribute("data-comodo");
    const central = CentralDeLuzes.getInstance();

    const ligado = central.estado[comodo];
    if (ligado) {
      central.desligar(comodo);
    } else {
      central.ligar(comodo);
    }
  });
});
