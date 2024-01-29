'use strict';


// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
//
//
// const targetNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(targetNumber);
// document.querySelector('.number').textContent = targetNumber;
// document.querySelector('.score').textContent = 20;
// var guess = document.querySelector('.guess').value;
// document.querySelector('.guess').value = guess;
//
//
// while (score > 0 && guess !== targetNumber) {
//     /!*
//         guess = parseInt(prompt('Enter your guess:'));
//     *!/
//
//     if (guess > targetNumber) {
//         document.querySelector('.message').textContent = 'Too High!📈';
//         document.querySelector('.score').textContent = '' + --score;
//     } else if (guess < targetNumber) {
//         document.querySelector('.message').textContent = 'Too Low!📉';
//         document.querySelector('.score').textContent = '' + --score;
//     } else {
//         document.querySelector('.message').textContent = 'Correct Number!';
//
//     }
// }
var highscore = document.querySelector('.highscore').textContent
let score = document.querySelector('.score').textContent;
var targetNumber = Math.trunc(Math.random() * 20) + 1;
console.log(targetNumber);


document.querySelector('.check').addEventListener('click', checkGuess);
document.querySelector('.guess').addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        checkGuess();
    }
});

document.querySelector('.again').addEventListener('click', againGame);
document.querySelector('.guess').addEventListener("keyup", function (e) {
    if (e.keyCode === 32) {
        againGame();
    }
});

function againGame() {
    targetNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(targetNumber);
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 20;
    score = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').style.height = '15rem';

}


function checkGuess() {

    const guessValue = Number(document.querySelector('.guess').value);
    const message = document.querySelector('.message');
    const scoreDisplay = document.querySelector('.score');
    const body = document.querySelector('body');
    const numberDisplay = document.querySelector('.number');
    const element = document.querySelector('.number');

    if (!guessValue) {
        message.textContent = 'No Number!';
    } else if (guessValue > 20 || guessValue < 1) {
        message.textContent = 'Number must be between 1 and 20!';
    } else if (guessValue !== targetNumber) {
        if (score > 1) {
            message.textContent = (guessValue > targetNumber) ? 'Too High!📈' : 'Too Low!📉';
            scoreDisplay.textContent = `${--score}`;
        } else {
            message.textContent = 'You lost the game!';
            scoreDisplay.textContent = `${--score}`;
            body.style.backgroundColor = 'red';
            numberDisplay.textContent = targetNumber;

        }
    } else {
        message.textContent = 'Correct Number!';
        body.style.backgroundColor = '#60b347';
        increaseWidth(element);
        numberDisplay.textContent = targetNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
}

function increaseWidth(element) {
    const pageWidth = document.documentElement.clientWidth - 39;
    let currentWidth = parseInt(window.getComputedStyle(element).width, 10);

    if (currentWidth < pageWidth) {
        element.style.width = (currentWidth + 100) + 'px';
        setTimeout(() => increaseWidth(element), 200);
    } else {
        // The width has reached the maximum (page width)
        // Perform any actions or call functions as needed
        againGame();
    }
}

// function increaseHeight(element) {
//     let currentWidth = parseInt(window.getComputedStyle(element).height, 10);
//
//     if (currentWidth < 1500) {
//         element.style.height = (currentWidth + 100) + 'px';
//         setTimeout(() => increaseHeight(element), 200);
//     } else {
//         againGame()
//     }
// }








