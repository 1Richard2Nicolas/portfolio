/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/
// Comentado: Este trecho carrega uma configuração externa (particles.json) em ambientes locais como MAMP/WAMP.

/* Otherwise just put the config content (json): */
// Se não usar um arquivo externo, a configuração pode ser colocada diretamente no código.

particlesJS('particles-js', // ID do elemento onde o efeito de partículas será aplicado
  
  {
    "particles": { // Configuração das partículas
      "number": { // Número de partículas
        "value": 80, // Define a quantidade inicial de partículas
        "density": { // Configuração de densidade
          "enable": true, // Ativa a densidade das partículas
          "value_area": 800 // Área onde as partículas se distribuem
        }
      },
      "color": { 
        "value": "#ffffff" // Cor das partículas (branco)
      },
      "shape": { // Configuração do formato das partículas
        "type": "circle", // Define as partículas como círculos
        "stroke": { // Configuração de contorno
          "width": 0, // Largura do contorno (0 = sem contorno)
          "color": "#000000" // Cor do contorno (preto)
        },
        "polygon": { // Configuração para partículas com forma de polígono
          "nb_sides": 5 // Número de lados do polígono (não utilizado com círculos)
        },
        "image": { // Configuração para partículas com imagem (não usada neste exemplo)
          "src": "img/github.svg", // Caminho para a imagem
          "width": 100, // Largura da imagem
          "height": 100 // Altura da imagem
        }
      },
      "opacity": { // Configuração de opacidade
        "value": 0.5, // Opacidade inicial das partículas
        "random": false, // Define se a opacidade será aleatória
        "anim": { // Animação de opacidade
          "enable": false, // Desativa animação de opacidade
          "speed": 1, // Velocidade da animação
          "opacity_min": 0.1, // Valor mínimo de opacidade
          "sync": false // Define se todas as partículas terão a mesma opacidade ao mesmo tempo
        }
      },
      "size": { // Configuração do tamanho das partículas
        "value": 5, // Tamanho inicial
        "random": true, // Tamanhos aleatórios ativados
        "anim": { // Animação de tamanho
          "enable": false, // Desativa animação de tamanho
          "speed": 40, // Velocidade da animação
          "size_min": 0.1, // Tamanho mínimo durante a animação
          "sync": false // Desativa sincronização entre partículas
        }
      },
      "line_linked": { // Configuração de linhas conectando partículas
        "enable": true, // Ativa as linhas
        "distance": 150, // Distância entre partículas para conectar as linhas
        "color": "#ffffff", // Cor das linhas (branco)
        "opacity": 0.4, // Opacidade das linhas
        "width": 1 // Espessura das linhas
      },
      "move": { // Configuração de movimento das partículas
        "enable": true, // Ativa o movimento
        "speed": 6, // Velocidade das partículas
        "direction": "none", // Direção (none = aleatória)
        "random": false, // Movimento aleatório desativado
        "straight": false, // Define se as partículas se movem em linha reta
        "out_mode": "out", // Partículas que saem da tela reaparecem do outro lado
        "attract": { // Configuração de atração entre partículas
          "enable": false, // Desativa a atração
          "rotateX": 600, // Intensidade do movimento no eixo X
          "rotateY": 1200 // Intensidade do movimento no eixo Y
        }
      }
    },
    "interactivity": { // Configuração de interatividade com o usuário
      "detect_on": "window", // Detecta interações na janela inteira
      "events": { 
        "onhover": { // Evento ao passar o mouse
          "enable": true, // Ativa o evento
          "mode": "repulse" // As partículas se afastam do mouse
        },
        "onclick": { // Evento ao clicar
          "enable": true, // Ativa o evento
          "mode": "push" // Adiciona novas partículas ao clicar
        },
        "resize": true // Ajusta as partículas ao redimensionar a janela
      },
      "modes": { // Modos de interatividade
        "grab": { // Modo de "agarrar" as partículas
          "distance": 400, // Distância máxima para agarrar partículas
          "line_linked": {
            "opacity": 1 // Opacidade das linhas ao agarrar
          }
        },
        "bubble": { // Modo "bolha"
          "distance": 400, // Distância para ativar bolhas
          "size": 40, // Tamanho das bolhas
          "duration": 2, // Duração do efeito
          "opacity": 8, // Opacidade das bolhas
          "speed": 3 // Velocidade da animação
        },
        "repulse": { // Modo de repulsão
          "distance": 200 // Distância para afastar partículas
        },
        "push": { // Adiciona novas partículas
          "particles_nb": 4 // Número de partículas adicionadas
        },
        "remove": { // Remove partículas
          "particles_nb": 2 // Número de partículas removidas
        }
      }
    },
    "retina_detect": true, // Ativa detecção para telas retina
    "config_demo": { // Configuração de demonstração (não afeta o visual final)
      "hide_card": false, // Não esconde o cartão de demonstração
      "background_color": "#b61924", // Cor de fundo da demonstração
      "background_image": "", // Sem imagem de fundo
      "background_position": "50% 50%", // Posição central do fundo
      "background_repeat": "no-repeat", // Sem repetição do fundo
      "background_size": "cover" // Fundo cobre toda a área
    }
  }

);