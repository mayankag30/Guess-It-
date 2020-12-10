'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number😁😁';

// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess').value);

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('No Number added or selected😯😯');

    // When Player Wins
  } else if (guess === secretNum) {
    displayMessage('Correct Number😁😁');

    // Displaying the correct Number
    document.querySelector('.number').textContent = secretNum;

    // Manipulating the CSS

    // 1) Changing the background-color
    document.querySelector('body').style.backgroundColor = '#60b347';
    // 2) Making the number wider
    document.querySelector('.number').style.width = '30rem';

    // HIGHSCORE SETUP
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When The Guess is Wrong from secret Number
  } else if (guess != secretNum) {
    if (score > 1) {
      displayMessage(
        guess > secretNum
          ? 'Number is HIGH😌..Go LOW!'
          : 'Number is LOW😌..Go HIGH!'
      );

      score--;
      document.querySelector('.score').textContent = score;

      // When the score becomes zero
    } else {
      displayMessage('You Lost the GAME!😥');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// 'Again' functionality
document.querySelector('.again').addEventListener('click', function () {
  secretNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;

  displayMessage('Start Guessing...');

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
