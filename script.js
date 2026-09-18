let timer;
let timeLeft = 25 * 60; // 25 minutes in seconds

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startBtn.addEventListener('click', () => {
    if (!timer) {
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                timer = null;
                alert('¡Tiempo de enfoque terminado!');
            }
        }, 1000);
    }
});

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
    timeLeft = 25 * 60;
    updateDisplay();
});
