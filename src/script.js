//pegar os botoes no JS para verificar quando o usuario clicar em cima deles
const botoes = document.querySelectorAll(".botao");

//quando clicar no botao mostrar as informaçoes do personagem
const personagens = document.querySelectorAll(".personagem");


botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();
        desselecionarPersonagem();

        //colocar a classe selecionado no botao selecionado 
        botao.classList.add("selecionado");

       //colocar a classe selecionado no personagem selecionado
        personagens[indice].classList.add("selecionado");
    });
});

function desselecionarPersonagem() {
    //verifcar se ja existe um botao selecionado, se sim, remover a seleçao dele
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    //verifcar se ja existe um personagem selecionado, se sim, remover a seleçao dele
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

