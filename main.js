onload = () =>{
        document.body.classList.remove("container");
};

  // Espera o documento carregar
  document.addEventListener('DOMContentLoaded', function() {
      // Pega a referência para o elemento de áudio
      const musica = document.getElementById('Musica');
      // Pega a referência para o botão
      const botao = document.getElementById('botaoDesmutar');

      // Adiciona um "ouvinte de evento" ao botão
      botao.addEventListener('click', function() {
          // Verifica se a música está mutada
          if (musica.muted) {
              // Se estiver mutada, desmuta
              musica.muted = false;
              // Opcional: Tenta dar play caso não tenha iniciado por algum motivo (embora autoplay resolva)
              musica.play().catch(function(error) {
                  console.log("Erro ao tentar dar play após desmutar:", error);
                  // Geralmente não acontecerá após uma interação do usuário
              });
              // Muda o texto do botão para indicar que o som está ativo
              botao.textContent = 'Desativar Som';
          } else {
              // Se não estiver mutada, muta (opcional, para funcionar como toggle)
              musica.muted = true;
              // Muda o texto do botão
              botao.textContent = 'Ativar Som';
          }
      });

      // Opcional: Você pode querer atualizar o texto do botão se a música já estiver tocando e não mutada
      // (por exemplo, se você remover o 'muted' e testar em um navegador que permite autoplay com som)
      // ou se o estado mudar por outros meios.
      // Um ouvinte para o evento 'volumechange' pode ser útil aqui.
       musica.addEventListener('volumechange', function() {
           if (!musica.muted) {
               botao.textContent = 'Desativar Som';
           } else {
               botao.textContent = 'Ativar Som';
           }
       });
  });