"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage("⛔ guess a number!");
  } else if (secretNumber === guess) {
    displayMessage("🎉 Currect Number");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("you lose the game 😒");
      document.querySelector(".score").textContent = 0;
    }
  }
});

const again = document
  .querySelector(".again")
  .addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector(".score").textContent = score;
    displayMessage("Start guessing...");
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector("body").style.backgroundColor = "#222";
  });
