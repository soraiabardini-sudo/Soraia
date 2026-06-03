// Aguarda o HTML carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona os elementos da página
    const botao = document.getElementById("botaoInterativo");
    const mensagem = document.getElementById("mensagemOculta");

    // Adiciona um evento de clique ao botão
    botao.addEventListener("click", () => {
        // Alterna a visibilidade da mensagem (mostra se estiver oculta, esconde se estiver visível)
        mensagem.classList.toggle("hidden");
        
        // Altera o texto do botão dinamicamente para interatividade extra
        if (mensagem.classList.contains("hidden")) {
            botao.textContent = "Clique Aqui";
        } else {
            botao.textContent = "Esconder Mensagem";
        }
    });
});