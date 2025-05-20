// Função para alternar o modo escuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Atualizar texto do botão
    const button = document.getElementById('darkModeToggle');
    if (document.body.classList.contains('dark-mode')) {
        button.textContent = 'Alternar Modo Claro';
    } else {
        button.textContent = 'Alternar Modo Escuro';
    }
    
    // Salvar preferência no localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Verificar preferência salva ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    const button = document.getElementById('darkModeToggle');
    
    if (darkMode) {
        document.body.classList.add('dark-mode');
        button.textContent = 'Alternar Modo Claro';
    }
    
    // Adicionar evento de clique ao botão
    button.addEventListener('click', toggleDarkMode);
});

// Função para rolar suavemente para as seções
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Ajuste para a navbar sticky
                behavior: 'smooth'
            });
        }
    });
});
