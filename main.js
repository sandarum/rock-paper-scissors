function getComputerChoice(){

    let choice;
    let choiceNumber;

    choiceNumber = Math.floor(Math.random()*3);

    switch(choiceNumber){
        case 0: choice = "Rock";
        break;
        case 1: choice = "Paper";
        break;
        default: choice = "Scissor";
    }
    
    return choice;
}

console.log(getComputerChoice());