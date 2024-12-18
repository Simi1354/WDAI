const customCursor = document.getElementById("custom-cursor");

document.addEventListener("mousemove", (event) => {
  customCursor.style.left = `${event.clientX}px`;
  customCursor.style.top = `${event.clientY}px`;
});

const display_score = document.getElementById("display_score");
const display = document.getElementById("display");
const disp = document.getElementById("disp");
let score = 100;
let lives = 3;
let difficulty = 2.5;
const zombies = [];
let spawnInterval = 2000;
let lastSpawnTime = 0;
let active = false;
let first_click = true;
let last_click = false;

const space = document.createElement("div");
space.className = "displays";

function easy() {
  difficulty = 5;
  active = true;
  document.body.style.cursor = "none";
  customCursor.style.visibility = "visible";
  disp.removeChild(display);
  disp.appendChild(space);
  space.style.visibility = "hidden";
  score = 100;
  spawnInterval = 2000;
  requestAnimationFrame(animate);
}
function medium() {
  difficulty = 10;
  active = true;
  document.body.style.cursor = "none";
  customCursor.style.visibility = "visible";
  disp.removeChild(display);
  disp.appendChild(space);
  space.style.visibility = "hidden";
  score = 50;
  spawnInterval = 1000;
  requestAnimationFrame(animate);
}
function hard() {
  difficulty = 15;
  active = true;
  document.body.style.cursor = "none";
  customCursor.style.visibility = "visible";
  disp.removeChild(display);
  disp.appendChild(space);
  space.style.visibility = "hidden";
  score = 25;
  spawnInterval = 500;
  requestAnimationFrame(animate);
}

function updateHearts() {
  for (let i = 1; i <= 3; i++) {
    const heart = document.getElementById(`heart${i}`);
    if (i <= lives) {
      heart.src = "images/full_heart.png";
    } else {
      heart.src = "images/empty_heart.png";
    }
  }
  if (lives < 1) {
    gameOver();
  }
}

function loseHeart() {
  lives--;
  updateHearts();
}

function gameOver() {
  space.style.visibility = "visible";
  const over = document.createElement("div");
  over.className = "text";
  over.textContent = "GAME OVER!";
  space.appendChild(over);
  const again = document.createElement("button");
  again.textContent = "PLAY AGAIN";
  again.style.width = "570px";
  again.style.fontSize = "40px";
  again.style.paddingTop = "20px";
  again.style.paddingLeft = "70px";
  again.addEventListener("click", () => location.reload());
  space.appendChild(again);
  customCursor.style.visibility = "hidden";
  document.body.style.cursor = "auto";
  last_click = true;
  const audio = new Audio("images/sad-music.mp3");
  audio.loop = true;
  audio.play();
}

function updateZombie(i) {
  if (score > 0) {
    score += 20;
    zombies.splice(i, 1);
  }
  display_score.textContent = `${String(score).padStart(5, "0")}`;
}

function updateBody() {
  if (score > 0 && active && !first_click && !last_click) {
    score -= 5;
    shot = true;
  }
  if (first_click) {
    first_click = !first_click;
  }
  display_score.textContent = `${String(score).padStart(5, "0")}`;
}

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1535;
canvas.height = 400;

class Sprite {
  constructor({ imageSrc }) {
    this.image = new Image();
    this.image.onload = () => {
      this.width = this.image.width / 10;
      this.height = this.image.height;
    };
    this.image.src = imageSrc;
    this.currentFrame = 0;
    this.frameBuffer = 10;
    this.elapsedFrames = 0;
  }
  draw() {
    if (!this.image) return;

    const cropbox = {
      position: {
        x: this.currentFrame * (this.image.width / 10),
        y: 0,
      },
      size: {
        width: this.image.width / 10,
        height: this.image.height,
      },
    };
    c.drawImage(
      this.image,
      cropbox.position.x,
      cropbox.position.y,
      cropbox.size.width,
      cropbox.size.height,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }
  update() {
    this.draw();
    this.updateFrames();
  }
  updateFrames() {
    this.elapsedFrames++;
    if (this.elapsedFrames % this.frameBuffer === 0) {
      this.currentFrame = (this.currentFrame + 1) % 10;
    }
  }
}

class Zombie extends Sprite {
  constructor({ imageSrc }) {
    super({ imageSrc });
    let width1 = Math.floor(Math.random() * 50 + 100);
    this.position = {
      x: 1635,
      y: Math.floor(Math.random() * 130),
    };
    this.size = {
      width: width1,
      height: Math.floor((width1 / 200) * 312),
    };
    this.velocity = Math.floor(Math.random() * (difficulty - 2) + 2);
  }
  update() {
    this.updateFrames();
    this.draw();
    this.position.x -= this.velocity;
  }
  isOutOfScreen() {
    return this.position.x < -this.size.width;
  }
  isClicked(clickX, clickY) {
    return (
      clickX >= this.position.x &&
      clickX <= this.position.x + this.size.width &&
      clickY >= this.position.y &&
      clickY <= this.position.y + this.size.height
    );
  }
}

function spawnZombie() {
  zombies.push(new Zombie({ imageSrc: "images/walkingdead.png" }));
}

function animate(timestamp) {
  c.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = zombies.length - 1; i >= 0; i--) {
    const zombie = zombies[i];
    zombie.update();
    if (zombie.isOutOfScreen()) {
      zombies.splice(i, 1);
      loseHeart();
      if (lives <= 0) {
        return;
      }
    }
  }

  if (timestamp - lastSpawnTime > spawnInterval) {
    spawnZombie();
    lastSpawnTime = timestamp;
  }

  requestAnimationFrame(animate);
}

canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const clickY = e.clientY - rect.top;

  for (let i = zombies.length - 1; i >= 0; i--) {
    if (zombies[i].isClicked(clickX, clickY) && score > 0) {
      updateZombie(i);
      break;
    }
  }
});

document.addEventListener(
  "DOMContentLoaded",
  updateHearts,
  (display_score.textContent = `${String(score).padStart(5, "0")}`)
);
document.body.addEventListener("click", updateBody);
