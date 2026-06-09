// Selecionando os elementos que vamos interagir
const botao = document.getElementById('meuBotao');
const mensagem = document.getElementById('mensagem');

// Adicionando o evento de clique ao botão
botao.addEventListener('click', () => {
    // Altera a classe da mensagem para que ela apareça na tela
    mensagem.className = 'mostrando';
    
    // Desabilita o botão após o clique para um visual mais limpo
    botao.textContent = 'Prontinho!';
    botao.style.backgroundColor = '#10b981';
    botao.style.cursor = 'default';
    botao.style.transform = 'none';
});
