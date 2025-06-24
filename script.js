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
    case 4:
      videoURL = 'https://drive.google.com/file/d/1hnwdrVDhh28nHRp3jxS0OEJAOzktLE9e/preview';
      break;
    case 5:
      videoURL = 'https://drive.google.com/file/d/1aZTpzauVcHlpI2C_-TaoJudlI4nrwt0o/preview';
      break;
  }
  videoFrame.src = videoURL;
}
