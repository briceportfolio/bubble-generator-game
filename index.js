const counterDisplay = document.querySelector("h3");
const congrats = document.querySelector("p");

let counter = 0;
console.log(counter);
let countdown;

window.onload = function () {
  alert(
    "NOTICE \n" +
      "1) Cliquer sur start pour lancer le chronometre \n" +
      "2) Cliquer sur les bulles pour marquer des points \n" +
      "3) Après 60s le chronomètre s'arrète, votre score s'affiche, bravo!"
  );
};

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
  restartCounterDisplay(0);
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
