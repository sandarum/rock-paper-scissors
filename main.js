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
    }else{
        result = `You lose! ${computerSelection} beats ${playerSelectionLower}`
    }
    return result;
}


