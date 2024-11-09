const customCursor = document.getElementById("custom-cursor");

document.addEventListener("mousemove", (event) => {
  customCursor.style.left = `${event.clientX}px`;
  customCursor.style.top = `${event.clientY}px`;
});

const display_score = document.getElementById("display_score");
let score = 100;

let lives = 3;

function updateHearts() {
  for (let i = 1; i <= 3; i++) {
    const heart = document.getElementById(`heart${i}`);
    if (i <= lives) {
      heart.src = "images/full_heart.png";
    } else {
      heart.src = "images/empty_heart.png";
    }
  }
}

function loseHeart() {
  if (lives > 0) {
    lives--;
    updateHearts();
  }
  if (lives < 1) {
    gameOver();
  }
}

function gameOver() {}

let shot = false;
function updateZombie() {
  if (score > 0) {
    score += 20;
  }
  document.body.removeChild(zombie);
  display_score.textContent = `${String(score).padStart(5, "0")}`;
}

function updateBody() {
  if (score > 0) {
    score -= 5;
    shot = true;
  }
  display_score.textContent = `${String(score).padStart(5, "0")}`;
}

let difficulty = 5;

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1535;
canvas.height = 400;

class Zombie {
  constructor() {
    let width1 = Math.random() * 50 + 50;
    this.position = {
      x: 1635,
      y: Math.random() * 200,
    };
    this.size = {
      width: width1,
      height: (width1 / 200) * 312,
    };
    this.velocity = Math.random() * (difficulty - 3) + 3;
  }
  draw() {
    c.fillStyle = "white";
    c.fillRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }
  update() {
    this.draw();
    this.position.x -= this.velocity;
  }
}

class Sprite {
  constructor({ imageSrc }) {
    this.image = new Image();
    this.image.src = imageSrc;
  }

  draw() {
    if (!this.image) return;
    c.drawImage(this.image, -40, -580);
  }
  update() {
    this.draw();
  }
}

const background = new Sprite({
  imageSrc: "images/board-bg.jpg",
});

const zombie = new Zombie();
function animate() {
  window.requestAnimationFrame(animate);
  background.update();
  zombie.update();
}

// animate();
// const zombie = document.getElementById(`zombie1`);

// zombie.addEventListener("click", updateZombie);
document.addEventListener(
  "DOMContentLoaded",
  updateHearts,
  (display_score.textContent = `${String(score).padStart(5, "0")}`)
);
document.body.addEventListener("click", updateBody);
