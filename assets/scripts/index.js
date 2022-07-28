const githubButton = document.querySelector('#github-button');
const linkedinButton = document.querySelector('#linkedin-button');
const rightButton = document.querySelector('#right-button');
const leftButton = document.querySelector('#left-button');
const panel = document.querySelector('#panel');
const sceneEl = document.querySelector('a-scene');

const video = document.querySelector('#video');
video.pause();

githubButton.addEventListener('click', () => {
  window.open('https://github.com/annelivia', '_blank');
});

linkedinButton.addEventListener('click', () => {
  window.open('https://www.linkedin.com/in/annelivia/', '_blank');
});

let currentItem = 4;

panel.setAttribute('visible', true);

const showPortfolioItem = (item) => {
  // vai deixar visivel o item atual e invisivel o restante
  for (let i = 0; i <= 5; i++) {
    document.querySelector('#item' + i).setAttribute('visible', i === item);
  }

  // é o vídeo
  if (item === 0) {
    document.querySelector('#anchor-video').setAttribute('visible', true);
    video.play();
  } else {
    document.querySelector('#anchor-video').setAttribute('visible', false);
    video.pause();
  }
};

leftButton.addEventListener('click', () => {
  console.log(currentItem)
  currentItem -= 1;
  if (currentItem < 0) currentItem = 5;
  showPortfolioItem(currentItem);
});

rightButton.addEventListener('click', () => {
  currentItem += 1;
  if (currentItem > 5) currentItem = 0;
  console.log(currentItem)
  showPortfolioItem(currentItem);
});

// arReady event triggered when ready
sceneEl.addEventListener("arReady", (event) => {
  console.log("MindAR is ready")
});
// arError event triggered when something went wrong. Mostly browser compatbility issue
sceneEl.addEventListener("arError", (event) => {
   console.log("MindAR failed to start")
});