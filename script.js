AOS.init();

let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// Adicione um evento de clique ao ícone do menu
menu.addEventListener("click", () => {
  navbar.classList.toggle("active"); // Alternar a classe 'active' na navbar
  toggleMenuIcon();
});
function toggleMenuIcon() {
  if (menu.classList.contains("bx-menu")) {
    menu.classList.remove("bx-menu");
    menu.classList.add("bx-x");
  } else {
    menu.classList.remove("bx-x");
    menu.classList.add("bx-menu");
  }
}

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

window.onscroll = () => {
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
    toggleMenuIcon(); // Certifique-se de que o ícone do menu seja alterado quando o menu for fechado
  }
};

// Dark Mode / light mode (seu código JavaScript atual permanece o mesmo aqui)
let darkmode = document.querySelector("#darkmode");
darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
    header.classList.add("dark-header");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
    header.classList.remove("dark-header");
  }
};
