document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Ação do Botão "Saiba Mais" (Rolar até a seção de Tecnologias)
    const btnSaibaMais = document.getElementById("btn-saiba-mais");
    
    btnSaibaMais.addEventListener("click", function() {
        const secaoTecnologias = document.getElementById("tecnologias");
        secaoTecnologias.scrollIntoView({ behavior: "smooth" });
    });

    // 2. Manipulação do Formulário de Contato/Newsletter
    const form = document.getElementById("form-contato");
    const mensagemSucesso = document.getElementById("mensagem-sucesso");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o recarregamento da página

        // Captura os valores digitados (pronto para enviar para uma API futuramente)
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;

        if (nome && email) {
            // Esconde o formulário e mostra a mensagem de sucesso
            form.style.display = "none";
            mensagemSucesso.classList.remove("hidden");
            
            console.log(`Usuário cadastrado: ${nome} - ${email}`);
        }
    });
});
