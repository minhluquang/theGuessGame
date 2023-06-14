'use strict';
/*
document.querySelector('.message').textContent = '🙂 Correct Number!';
document.querySelector('.number').textContent = 23;
document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.score').textContent = score;

const displayMessage = message => {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //If guess not input
    if (!guess) {
        // document.querySelector('.message').textContent = '💔 No Number!';
        displayMessage('💔 No Number!');

        //If guess not in a range 1 -> 20
    } else if (guess < 0 || guess > 20) {
        document.querySelector('.message').textContent =
            '😢 Number must be in range 1 to 20!';
    }

    //Guess true
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🙂 Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.check').disabled = true;
        if (highScore < score) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    //Guess not true
    else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
            displayMessage(
                guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
            );
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent =
                '😢 You lost the game!';
            score = 0;
            document.querySelector('.score').textContent = score;
        }
    }
    /*
    //Guess is high
    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent =
                '😢 You lost the game!';
            score = 0;
            document.querySelector('.score').textContent = score;
        }

        //Guess is low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent =
                '😢 You lost the game!';
            score = 0;
            document.querySelector('.score').textContent = score;
        }
    }*/
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
