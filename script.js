const startBtn = document.getElementById('startMovie');
const welcomeScreen = document.getElementById('welcomeScreen');
const movieContainer = document.getElementById('movieContainer');
const videoFrame = document.getElementById('videoFrame');

startBtn.addEventListener('click', () => {
  welcomeScreen.style.display = 'none';
  movieContainer.style.display = 'block';
});

function showEpisode(num) {
  const urls = {
    1: 'https://drive.google.com/file/d/1h4e-i51XdRcSzjofBCWYzkxrHrrKHfQN/preview',
    2: 'https://drive.google.com/file/d/1t0k1AZBzc75PkOGmd_bf7VEhcrsxAe0p/preview'
  };

  videoFrame.src = urls[num];
}
