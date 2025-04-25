document.addEventListener("DOMContentLoaded", function () {
    // Inicialização do AOS (Animate On Scroll)
    AOS.init();

    const header = document.querySelector("header");
    const menu = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");
    const darkmode = document.getElementById("darkmode");
    const darkModeIcon = document.querySelector("#dark-mode-icon");
    const form = document.getElementById("contact-form");

    // Alternar menu responsivo
    menu.addEventListener("click", () => {
        navbar.classList.toggle("active");
        toggleMenuIcon();
    });

    function toggleMenuIcon() {
        if (menu.classList.contains("fa-bars")) {
            menu.classList.remove("fa-bars");
            menu.classList.add("fa-x");
        } else {
            menu.classList.remove("fa-x");
            menu.classList.add("fa-bars");
        }
    }

    // Variável para controle do scroll anterior
    let prevScrollPos = window.pageYOffset;

    window.addEventListener("scroll", () => {
        const currentScrollPos = window.pageYOffset;

        // Mostrar ou esconder o header conforme a direção do scroll
        if (prevScrollPos > currentScrollPos) {
            header.style.top = "0";
        } else {
            header.style.top = "-100px";
        }

        prevScrollPos = currentScrollPos;

        // Adiciona sombra ao header quando a página é rolada
        header.classList.toggle("shadow", window.scrollY > 0);

        // Fechar menu se estiver aberto
        if (navbar.classList.contains("active")) {
            navbar.classList.remove("active");
            toggleMenuIcon();
        }
    });

    // Dark Mode / Light Mode com armazenamento da preferência
    function toggleDarkMode() {
        document.body.classList.toggle("light-mode");
        const isLightMode = document.body.classList.contains("light-mode");
        localStorage.setItem("theme", isLightMode ? "light" : "dark");

        // Alterar o emoji do botão
        darkmode.innerText = isLightMode ? "🌙" : "🌞";
    }

    // Verificar e aplicar o tema salvo ao carregar a página
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        darkmode.innerText = "🌙"; // Define a lua no modo claro
    } else {
        darkmode.innerText = "🌞"; // Define o sol no modo escuro
    }

    // Evento de clique no botão do Dark Mode
    darkmode.addEventListener("click", toggleDarkMode);

    // Formulário de contato
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // Coleta os dados do formulário
            const name = form.querySelector('[name="name"]').value;
            const email = form.querySelector('[name="email"]').value;
            const message = form.querySelector('[name="message"]').value;

            // Verifica se os campos estão preenchidos
            if (!name || !email || !message) {
                alert("Todos os campos são obrigatórios!");
                return;
            }

            // Exibe mensagem de sucesso
            alert("Mensagem enviada com sucesso!");

            // Envia os dados para a API (sua backend)
            fetch('https://envio-de-email-portifolio.onrender.com/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome: name,
                    email: email,
                    mensagem: message
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Email enviado com sucesso!', data);
            })
            .catch((error) => {
                console.error('Erro ao enviar email:', error);
            });

            // Limpa o formulário
            form.reset();
        });
    }

    // Função para exibir ou ocultar detalhes
    function mostrarDetalhes(id) {
        const detalhes = document.getElementById(id);
        detalhes.style.display = detalhes.style.display === "block" ? "none" : "block";
    }
});
