const counterDisplay = document.querySelector("h3");
const congrats = document.querySelector("p");

let counter = 0;
let countdown;

function startTimer(initialSeconds) {
  const timerDisplay = document.getElementById("timer");
  let seconds = initialSeconds;
  timerDisplay.textContent = seconds;
  countdown = setInterval(() => {
    seconds--;
    timerDisplay.textContent = seconds;
    if (seconds === 0) {
      clearInterval(countdown);
      alert("c est terminé BRAVO! ton score est de " + counter);
    }
  }, 1000);
}

function restartCountdown(seconds) {
  clearInterval(countdown);
  startTimer(seconds);
}
document.getElementById("playButton").addEventListener("click", function () {
  restartCountdown(60);
});

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusMINUS = Math.random() > 0.5 ? 1 : -1;

  bubble.style.setProperty("--left", Math.random() * 100 * plusMINUS + "%");

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });

  setTimeout(() => {
    bubble.remove();
  }, 7000);
};

setInterval(bubbleMaker, 500);
