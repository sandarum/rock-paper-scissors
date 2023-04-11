
let computerScore = 0;
let playerScore = 0;

function getComputerChoice(){

    let choice;
    let choiceNumber;

    choiceNumber = Math.floor(Math.random()*3);

    switch(choiceNumber){
        case 0: choice = "rock";
        break;
        case 1: choice = "paper";
        break;
        default: choice = "scissor";
    }
    
    return choice;
}

function playRound(playerSelection, computerSelection){

    let result;
    let playerSelectionLower;
    
    playerSelectionLower = playerSelection.toLowerCase();

    if(playerSelectionLower === computerSelection){
        result = "It's a tie";
    }else if(playerSelectionLower === "rock" && computerSelection === "scissor" || playerSelectionLower === "paper" && computerSelection === "rock" || playerSelectionLower === "scissor" && computerSelection === "paper" ){
        result = `You win! ${playerSelectionLower} beats ${computerSelection}`
        playerScore += 1;
    }else{
        result = `You lose! ${computerSelection} beats ${playerSelectionLower}`
        computerScore += 1;
    }
    return result;
}

function game(){
    for(let index = 0; index < 5; index++){
        let playerSelection = prompt("Play...");
        let computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
    }
    if(playerScore < computerScore){
        console.log("Computer wins!!!");
    }
    else if(playerScore > computerScore){
        console.log("You win!!!");
    }else{
        console.log("It's a tie");
    }

}

game();
