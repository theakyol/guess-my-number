'use strict';
/* 
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Currect Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ guess a number!';
  }

  // when player wins
  else if (secretNumber === guess) {
    document.querySelector('.message').textContent = '🎉 Currect Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }

  // when guess is to high
  else if (secretNumber < guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lose the game 😒';
      document.querySelector('.score').textContent = 0;
    }
  }

  // when guess is to low
  else if (secretNumber > guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lose the game 😒';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// again
const again = document
  .querySelector('.again')
  .addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
  });
