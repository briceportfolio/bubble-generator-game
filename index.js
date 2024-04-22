const counterDisplay = document.querySelector("h3");
const congrats = document.querySelector("p");

let counter = 0;
let countdown = 60;
let bubbleInterval;

window.onload = function () {
  alert(
    "NOTICE \n" +
      "1) selectionner votre niveau (ne pas cliquer plusieurs fois)\n" +
      "2) Cliquer sur start pour lancer le chronomètre \n" +
      "3) Cliquer sur les bulles pour marquer des points, les bulles non cliquées en enlèvent un! \n" +
      "4) Après 60s le chronomètre s'arrète, votre score s'affiche, bravo!"
  );
};

const setHardBackground = () => {
  document.body.style.backgroundImage = "url('./fire-5551559_1920.jpg')";
  document.body.style.backgroundSize = "cover";
};
const setEasyBackground = () => {
  document.body.style.backgroundImage = "url('./bg.jpg')";
  document.body.style.backgroundSize = "cover";
};

const setNightmareBackground = () => {
  document.body.style.backgroundImage = "url('./girl-7622617_1920.jpg')";
  document.body.style.backgroundSize = "cover";
};

const setEasyDifficulty = () => {
  bubbleInterval = 1000;
  setEasyBackground();
};
const setHardDifficulty = () => {
  bubbleInterval = 500;
  setHardBackground();
};
const setNightmareDifficulty = () => {
  bubbleInterval = 200;
  setNightmareBackground();
};

document.getElementById("easy").addEventListener("click", setEasyDifficulty);
document.getElementById("hard").addEventListener("click", setHardDifficulty);
document
  .getElementById("nightmare")
  .addEventListener("click", setNightmareDifficulty);

const stopBubbleCreation = () => {
  clearInterval(bubbleInterval);
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
  bubbleInterval = setInterval(bubbleMaker, bubbleInterval);
  document
    .getElementById("playButton")
    .removeEventListener("click", startBubbleCreation);
};

document.getElementById("playButton").addEventListener("click", function () {
  counter = 0;
  counterDisplay.textContent = counter;
  restartCountdown(60);
  startBubbleCreation();
});

const removeBubbleAndDeductPoint = (bubble) => {
  if (!bubble.parentElement) {
    // Vérifier si la bulle a déjà été supprimée pour éviter de déduire un point à plusieurs reprises
    return;
  }
  counter--;
  counterDisplay.textContent = counter;
  bubble.remove();
};

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
    removeBubbleAndDeductPoint(bubble);
  }, 5000);
};
