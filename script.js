let score = 0;
let time = 30;
let gameInterval;
let spawnInterval;

const gameArea = document.getElementById("game");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("startBtn");

startBtn.onclick = startGame;

function startGame() {
  score = 0;
  time = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = time;
  startBtn.disabled = true;

  gameInterval = setInterval(() => {
    time--;
    timeDisplay.textContent = time;
    if (time <= 0) endGame();
  }, 1000);

  spawnInterval = setInterval(spawnPlen, 600);
}

function spawnPlen() {
  const plen = document.createElement("div");
  plen.classList.add("plen");

  plen.style.top = `${Math.random() * 70 + 5}%`;
  plen.style.left = `${Math.random() * 90 + 5}%`;

  plen.onclick = () => {
    score++;
    scoreDisplay.textContent = score;
    plen.remove();
  };

  gameArea.appendChild(plen);

  setTimeout(() => plen.remove(), 2000);
}

function endGame() {
  clearInterval(gameInterval);
  clearInterval(spawnInterval);
  document.querySelectorAll('.plen').forEach(p => p.remove());
  alert("Plen Over! Final Score: " + score);
  startBtn.disabled = false;
}
