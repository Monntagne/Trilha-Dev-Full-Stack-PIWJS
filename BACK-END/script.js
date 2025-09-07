// Diminui a velocidade do vídeo e permite abrir/fechar os menus ao clicar
const video = document.getElementById("meuVideo");
video.playbackRate = 0.4; 

const menus = document.querySelectorAll(".menu-suspenso");

menus.forEach(menu => {
    const botao = menu.querySelector(".botao-menu");
    botao.addEventListener("click", () => {
        menu.classList.toggle("ativo");
    });
});

// Permite que o usuário envie comentários clicando no botão ou apertando Enter
const botao = document.getElementById('botao-comentario');
const campo = document.getElementById('campo-comentario');
const lista = document.getElementById('lista-comentarios');

function adicionarComentario() {
    const texto = campo.value.trim();
    if(texto !== '') {
        const p = document.createElement('p');
        p.textContent = texto;
        lista.appendChild(p);
        campo.value = '';
    }
}

botao.addEventListener('click', adicionarComentario);

campo.addEventListener('keydown', (event) => {
    if(event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        adicionarComentario();
    }
});

// Barra de progresso que calcula itens riscados
const todosItens = document.querySelectorAll('li');
const barra = document.getElementById('barra-progresso');

function atualizarBarra() {
    const total = todosItens.length;
    const concluido = document.querySelectorAll('li.concluido').length;
    const porcentagem = (concluido / total) * 100;
    barra.style.width = `${porcentagem}%`;
}

// Inicializa a barra
atualizarBarra();

// Adiciona clique em cada <li> para riscar e atualizar a barra
todosItens.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('concluido');
        atualizarBarra();
    });
});
