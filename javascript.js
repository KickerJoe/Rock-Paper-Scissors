//Rock Paper Scissors Program from Odin Project

//Function that controls the computer
function computerPlay(){
    
    //value will hold the number for the computers choice.
    let value = Math.floor(Math.random()*3 + 1);
    
    if(value === 1){
        return "Rock";
    }
    else if(value == 2){
        return "Paper";
    }
    else{
        return "Scissors";
    }
    
}

console.log(computerPlay());

