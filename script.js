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
    case 7:
      videoURL = 'https://drive.google.com/file/d/1UlaVK8PKngSdl1T_8I3L8XzODvLXS6sJ/preview';
      break;
    case 8:
      videoURL = 'https://drive.google.com/file/d/1DEcAbbVYvdiN58mhA2zOWTmMigAkBshN/preview';
      break;
  }
  videoFrame.src = videoURL;
}
