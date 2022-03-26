//Rock Paper Scissors Program from Odin Project

//Function that controls the computer
function computerPlay(){
    
    //value will hold the number for the computers choice.
    let value = Math.floor(Math.random()*3 + 1);
    
    if(value === 1){
        return "rock";
    }
    else if(value == 2){
        return "paper";
    }
    else{
        return "scissors";
    }
    
}

function playRound(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();

    if(playerChoice === "rock" && computerSelection === "rock"){
        return "Tie!";
    }
    else if(playerChoice === "rock" && computerSelection === "paper"){
        return "You Lose! Paper beats Rock";
    }
    else if(playerChoice === "rock" && computerSelection === "scissors"){
        return "You Win! Rock beats Scissors";
    }
    else if(playerChoice === "paper" && computerSelection === "rock"){
        return "You Win! Paper beats Rock";
    }
    else if(playerChoice === "paper" && computerSelection === "paper"){
        return "Tie!";
    }
    else if(playerChoice === "paper" && computerSelection === "scissors"){
        return "You Lose! Scissors beats Paper";
    }
    else if(playerChoice === "scissors" && computerSelection === "rock"){
        return "You Lose! Rock beats Scissors";
    }
    else if(playerChoice === "scissors" && computerSelection === "paper"){
        return "You Win! Scissors beats Paper";
    }
    else{
        return "Tie!";
    }
}

