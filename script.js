// Exibe no console a largura da tela e verifica se é um dispositivo móvel
console.log("Largura da tela: ", window.innerWidth);
console.log("É móvel? ", isMobile());

// Função para verificar se o dispositivo é móvel
function isMobile() {
  return window.innerWidth < 768; // Retorna true se a largura da tela for menor que 768 pixels
}

// Inicializa o ícone do menu e a barra de navegação
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section"); // Seleciona todas as seções
let navLinks = document.querySelectorAll("header nav a"); // Seleciona todos os links de navegação

// Função que gerencia o comportamento ao rolar a página
function handleScroll() {
  if (!isMobile()) { // Só executa para dispositivos não móveis
    sections.forEach((sec) => {
      let top = window.scrollY; // Distância rolada da página
      let offset = sec.offsetTop - 150; // Posição da seção menos um offset
      let height = sec.offsetHeight; // Altura da seção
      let id = sec.getAttribute("id"); // ID da seção

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active"); // Remove a classe ativa de todos os links
          document
            .querySelector("header nav a[href*=" + id + " ]") // Encontra o link correspondente ao ID
            .classList.add("active"); // Adiciona a classe ativa ao link atual
        });
      }
    });
  }
}

// Adiciona a função de scroll ao evento onscroll
window.onscroll = handleScroll;

// Adiciona um comportamento ao clicar no ícone do menu
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x"); // Alterna o ícone de menu para um ícone de "fechar"
  navbar.classList.toggle("active"); // Alterna a visibilidade da barra de navegação
};

// Inicializa o ParticlesJS para dispositivos não móveis
if (!isMobile()) {
  particlesJS.load("particles-container", "particlesjs-config.json"); // Carrega o efeito de partículas
}

// Inicializa o ScrollReveal para dispositivos não móveis
if (!isMobile()) {
  window.revelar = ScrollReveal({ reset: true }); // Configura o ScrollReveal com o reset ativado

  // Lista de elementos que terão o efeito ScrollReveal
  const elementos = [
    ".efeito-img-topo", ".efeito-education", ".efeito-services", ".efeito-project",
    ".efeitoprojeto1", ".efeitoprojeto2", ".efeitoprojeto3",
    ".efeito-arvore1", ".efeito-arvore2", ".efeito-arvore3",
    ".efeito-arvore4", ".efeito-arvore5", ".efeito-arvore6", ".efeito-arvore7",
    ".efeito-serv1", ".efeito-serv2", ".efeito-serv3", ".efeito-serv4",
    ".efeitocontato"
  ];

  // Aplica o efeito ScrollReveal em cada elemento da lista
  elementos.forEach(selector => {
    window.revelar.reveal(selector, {
      duration: 2000, // Duração da animação em milissegundos
      distance: "90px", // Distância do movimento
      delay: 50, // Atraso antes de iniciar a animação
    });
  });
}

// Adiciona um evento ao redimensionar a janela
window.addEventListener('resize', () => {
  if (isMobile()) {
    // Se for um dispositivo móvel, reconfigura ou ajusta as animações
    particlesJS("particles-container", {}); // Reconfigura o ParticlesJS
    ScrollReveal().destroy(); // Destrói instâncias existentes do ScrollReveal

    // Garante que os elementos sejam visíveis em dispositivos móveis
    document.querySelectorAll('.efeito-img-topo, .efeito-education, .efeito-services, .efeito-project, .efeitoprojeto1, .efeitoprojeto2, .efeitoprojeto3, .efeito-arvore1, .efeito-arvore2, .efeito-arvore3, .efeito-arvore4, .efeito-arvore5, .efeito-arvore6, .efeito-arvore7, .efeito-serv1, .efeito-serv2, .efeito-serv3, .efeito-serv4, .efeitocontato').forEach(el => {
      el.style.visibility = 'visible'; // Torna os elementos visíveis
    });
  } else {
    // Para dispositivos não móveis, define a visibilidade dos elementos como oculta
    document.querySelectorAll('.efeito-img-topo, .efeito-education, .efeito-services, .efeito-project, .efeitoprojeto1, .efeitoprojeto2, .efeitoprojeto3, .efeito-arvore1, .efeito-arvore2, .efeito-arvore3, .efeito-arvore4, .efeito-arvore5, .efeito-arvore6, .efeito-arvore7, .efeito-serv1, .efeito-serv2, .efeito-serv3, .efeito-serv4, .efeitocontato').forEach(el => {
      el.style.visibility = 'hidden'; // Esconde os elementos para aplicar as animações
    });
  }
});