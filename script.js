const startBtn = document.getElementById('startMovie');
const welcomeScreen = document.getElementById('welcomeScreen');
const movieContainer = document.getElementById('movieContainer');
const player = document.getElementById('moviePlayer');
const playButton = document.getElementById('playButton');

startBtn.addEventListener('click', () => {
  welcomeScreen.style.display = 'none';
  movieContainer.style.display = 'block';
});

playButton.addEventListener('click', () => {
  if (player.paused) {
    player.play();
    playButton.textContent = '⏸️ Pausar';
  } else {
    player.pause();
    playButton.textContent = '▶️ Reproducir';
  }
});
