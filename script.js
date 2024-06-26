const box = document.querySelector('.box');
const boxSize = 30;
let posX = window.innerWidth / 2;
let posY = window.innerHeight / 2;
let velocityX = 3;
let velocityY = 1;

function update() {
  posX += velocityX;
  posY += velocityY;
  if (posX <= 0 || posX >= window.innerWidth - boxSize) {
    velocityX *= -1;
  }
  if (posY <= 0 || posY >= window.innerHeight - boxSize) {
    velocityY *= -1;
  }
  box.style.left = `${posX}px`;
  box.style.top = `${posY}px`;

  requestAnimationFrame(update);
}

update();
