//Rock Paper Scissors Program from Odin Project

//Function that picks the computer's choice
function computerPlay() {

    //value will hold the number for the computers choice.
    let value = Math.floor(Math.random() * 3 + 1);

    if (value === 1) {
        return "rock";
    }
    else if (value == 2) {
        return "paper";
    }
    else {
        return "scissors";
    }

}

//function that will play a single round. Compares player's choice to response to computer's choice
function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();

    if (playerChoice === "rock" && computerSelection === "rock") {
        return "Tie!";
    }
    else if (playerChoice === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    }
    else if (playerChoice === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
    }
    else if (playerChoice === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
    }
    else if (playerChoice === "paper" && computerSelection === "paper") {
        return "Tie!";
    }
    else if (playerChoice === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
    }
    else if (playerChoice === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
    }
    else if (playerChoice === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper";
    }
    else {
        return "Tie!";
    }
}

function updateScore(res) {
    if (res.includes("Win")) {
        playerScore++;
    }
    else if (res.includes("Lose")) {
        cpuScore++;
    }
    else {
        tie++;
    }
}

function score() {
    console.log("Your score:\t\t\t" + playerScore);
    console.log("Computer's score:\t" + cpuScore);
}

let playerScore = 0;
let cpuScore = 0;
let tie = 0;
let count = 0;
let result = "";

const scoreboard = document.querySelector('.scoreboard');

const roundResults = document.createElement('h1');
roundResults.setAttribute('id', "roundResults");
roundResults.textContent = "";
scoreboard.appendChild(roundResults);

const player = document.createElement('p');
player.setAttribute('id', 'playerScore');
player.textContent = 'Your Score: ' + playerScore;
scoreboard.appendChild(player);

const comp = document.createElement('p');
comp.setAttribute('id', "computerScore");
comp.textContent = "Computer's Score: " + cpuScore;
scoreboard.appendChild(comp);

const winner = document.createElement('h1');
winner.setAttribute('id', "winner");
winner.textContent = "";

const playAgain = document.createElement('button');
playAgain.setAttribute('id','resume');
playAgain.textContent = "Play Again?";





console.log("Welcome to Rock Paper Scissors!");
console.log("Please choose Rock, Paper, or Scissors");
//Creates a nodelist of buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        count++;
        result = playRound(button.id, computerPlay());
        console.log(result);
        updateScore(result);
        score();
        roundResults.textContent = result;
        player.textContent = 'Your Score: ' + playerScore;
        scoreboard.appendChild(player);
        comp.textContent = "Computer's Score: " + cpuScore;
        scoreboard.appendChild(comp);
        gameOver(count);
    });
});



function gameOver(num) {
    if (num === 5){
        if (playerScore > cpuScore) {
            winner.textContent = "You Win Best of Five!";
        }
        else if (cpuScore > playerScore) {
            winner.textContent = "The Computer Wins Best of Five!";
        }
        else {
            winner.textContent = "The Best of Five Results in a Tie!";
        }
        scoreboard.appendChild(winner);
        document.getElementsByClassName("btn").disabled = true;
        scoreboard.appendChild(playAgain);
        const resumeBtn = document.querySelector('#resume');
        resumeBtn.addEventListener('click', () => {
        count = 0;
        playerScore = 0;
        cpuScore = 0;
        scoreboard.removeChild(winner);
        document.getElementsByClassName("btn").disabled = false;
        scoreboard.removeChild(playAgain);
        });
        }
}