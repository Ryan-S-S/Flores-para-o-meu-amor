onload = () =>{
        document.body.classList.remove("container");
};
document.addEventListener('DOMContentLoaded', function() {
    const musica = document.getElementById('Musica');
    // const botao = document.getElementById('botaoDesmutar'); // Não precisamos mais do botão se ele não for o gatilho

    // Pega a referência para a nova div de controle
    const divControle = document.getElementById('divControleSom');

    // Função que lida com a alternância do mudo
    function toggleMute() {
        if (musica.muted) {
            musica.muted = false;
            musica.play().catch(function(error) {
                console.log("Erro ao tentar dar play após desmutar:", error);
            });
        } else {
            musica.muted = true;
        }
    }

    // Adiciona o ouvinte de clique à div
    divControle.addEventListener('click', toggleMute);
});