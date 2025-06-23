const startBtn = document.getElementById('startMovie');
const welcomeScreen = document.getElementById('welcomeScreen');
const movieContainer = document.getElementById('movieContainer');
const videoFrame = document.getElementById('videoFrame');

startBtn.addEventListener('click', () => {
  welcomeScreen.style.display = 'none';
  movieContainer.style.display = 'block';
});

function showEpisode(num) {
  let videoURL = '';
  switch (num) {
    case 1:
      videoURL = 'https://drive.google.com/file/d/1h4e-i51XdRcSzjofBCWYzkxrHrrKHfQN/preview';
      break;
    case 3:
      videoURL = 'https://drive.google.com/file/d/1SdraGBaqdi16RFb0ovfWf6Y77xEsZVa9/preview';
      break;
  }
  videoFrame.src = videoURL;
}
