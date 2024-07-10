const cat = document.getElementById('cat');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');
let score = 0;
let timeLeft = 10;

cat.addEventListener('click', () => {
  score++;
  scoreEl.textContent = `Score: ${score}`;
});

const timer = setInterval(() => {
  timeLeft--;
  timerEl.textContent = `Time Left: ${timeLeft}`;
  if (timeLeft === 0) {
    clearInterval(timer);
    alert(`Game Over! Your score is: ${score}`);
  }
}, 500); // Update timer every second (1000 milliseconds)