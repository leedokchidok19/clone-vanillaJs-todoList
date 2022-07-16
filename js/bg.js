const body = document.querySelector('body');

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add('bg__image');
  body.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

export function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();