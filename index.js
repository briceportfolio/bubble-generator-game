const counterDisplay = document.querySelector("h3");
const congrats = document.querySelector("p");

let counter = 0;
let countdown = 60;
let bubbleInterval;

window.onload = function () {
  alert(
    "NOTICE \n" +
      "1) Cliquer sur start pour lancer le chronomètre \n" +
      "2) Cliquer sur les bulles pour marquer des points \n" +
      "3) Après 60s le chronomètre s'arrète, ton score s'affiche, bravo!"
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
      alert("C'est terminé BRAVO! Ton score est de " + counter);
      stopBubbleCreation();
    }
  }, 1000);
}

function restartCountdown(seconds) {
  clearInterval(countdown);

  startTimer(seconds);
}
const startBubbleCreation = () => {
  bubbleInterval = setInterval(bubbleMaker, 500);
  document
    .getElementById("playButton")
    .removeEventListener("click", startBubbleCreation);
};

const stopBubbleCreation = () => {
  clearInterval(bubbleInterval);
};

document.getElementById("playButton").addEventListener("click", function () {
  counter = 0;
  counterDisplay.textContent = counter;
  restartCountdown(60);
  startBubbleCreation();
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
  }, 5000);
};
