// A função que cria os confetes é modificada para receber apenas a posição X, pois eles sempre cairão do topo.
function criarConfete(x) {
    const confete = document.createElement('div');
    confete.classList.add('confete');
    document.body.appendChild(confete);
    
    // Define a posição inicial do confete no topo da tela, com uma posição X aleatória
    // quando a função for chamada pelo setInterval (confetes automáticos).
    // Para os confetes do mouse, a posição X será a do cursor.
    confete.style.left = `${x}px`;
    confete.style.top = '0px'; // Sempre começa do topo da tela

    // Define uma cor aleatória para o confete
    const coresCarnaval = ['var(--amarelo)', 'var(--vermelho)', 'var(--verde)', 'var(--azul)', 'var(--roxo)'];
    const corAleatoria = coresCarnaval[Math.floor(Math.random() * coresCarnaval.length)];
    confete.style.backgroundColor = corAleatoria;

    // Define um tamanho aleatório para o confete
    const tamanhoAleatorio = Math.floor(Math.random() * 10) + 5; // Tamanho entre 5px e 15px
    confete.style.width = `${tamanhoAleatorio}px`;
    confete.style.height = `${tamanhoAleatorio}px`;

    // Remove o confete do DOM após a animação
    setTimeout(() => {
        confete.remove();
    }, 3000); // Remove depois de 3 segundos (tempo da animação)
}

// 1. Confetes caindo periodicamente a cada 1 segundo
setInterval(() => {
    // A posição X do confete é aleatória para que caiam em diferentes pontos da tela
    const xAleatorio = Math.random() * window.innerWidth;
    criarConfete(xAleatorio);
}, 1000);

// 2. Confetes extras ao mover o mouse
document.addEventListener('mousemove', (e) => {
    // Cria um confete na posição X do cursor, mas o confete inicia a queda do topo
    criarConfete(e.clientX);
});
