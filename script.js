'use strict';
/*
//console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number !';
//console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 69;


document.querySelector('.guess').value = 13;
//console.log(document.querySelector('.guess').value);

*/

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;

//document.querySelector('.number').textContent = '?';

// addEventListener is a special object that takes in event(here->click) & function (expression) to handle the event 
// Whenever you get something from user input -> string
document.querySelector('.check').addEventListener
('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, secretNumber);

    if(score == 0){
        document.querySelector('.message').textContent = 'You Lost the Game !'
        document.querySelector('.number').textContent = secretNumber;
    }else if(!guess){
        document.querySelector('.message').textContent = 'No Number !';
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number !';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.score').textContent = score;
        highScore = Math.max(highScore, score);
        document.querySelector('.highscore').textContent = highScore;
        
        // style manipulation
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

    }else if (guess > secretNumber){
        document.querySelector('.message').textContent = 'Too High !';
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent = 'Too Low !'
        score--;
        document.querySelector('.score').textContent = score;
    }   

    if(score == 0){
        document.querySelector('.message').textContent = 'You Lost the Game !'
        document.querySelector('.number').textContent = secretNumber;
    }
});

document.querySelector('.again').addEventListener
('click', function(){
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = null;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.number').textContent = '?';
});
