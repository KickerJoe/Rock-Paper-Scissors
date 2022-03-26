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

//function that will play a single round. Compares player's choice to response to computer's choice
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

//This function will play the game 5 times, keeps score, and reports the winner.
function game(){
    console.log("Welcome to Rock Paper Scissors!");
    console.log("Best of Five Games!");

    let playerScore = 0;
    let cpuScore = 0;
    let tie = 0;

    for(let i = 0; i < 5; i++){
        let player = prompt("Please choose Rock, Paper, or Scissors");
        player = player.toLowerCase();  //Accounts for various user inputs
        
        //Loop checks for valid input
        while(!(player === "rock" || player === "paper" || player === "scissors")){
            player = prompt("Incorrect respose. Please choose Rock, Paper, or Scissors");
        }

        //Captures the results as a string and updates respective score
        let result = playRound(player, computerPlay());
        console.log(result);

        if(result.includes("Win")){
            playerScore++;
        }
        else if(result.includes("Lose")){
            cpuScore++;
        }
        else{
            tie++;
        }

        
    }

    console.log("Your score:\t\t\t" + playerScore);
    console.log("Computer's score:\t" + cpuScore);
    if(playerScore > cpuScore){
        console.log("You are the winner!");
    }
    else if(playerScore < cpuScore){
        console.log("I'm sorry, you lost!");
    }
    else{
        console.log("Best of five, ended in a tie!");
    }
}

game();
