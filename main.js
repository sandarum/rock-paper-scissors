
let computerScore = 0;
let playerScore = 0;

const playerScoreDisplay = document.querySelector('#playerScore');
const computerScoreDisplay = document.querySelector('#computerScore');
const resultDisplay = document.querySelector('#result');
const inputDiv = document.querySelector('.inputs');
const buttons = document.querySelectorAll('.btn');
const reset = document.querySelector('#reset');

function updateScore(){
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}

reset.style.display = 'none';

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

function restartGame(){
    inputDiv.style.display = 'block';
    reset.style.display = 'none';
    computerScore = 0;
    playerScore = 0;
    resultDisplay.textContent = `Round Result: `;
    resultDisplay.style.color = 'inherit';
    updateScore();
}

function gameOver(){
    inputDiv.style.display = 'none';
    reset.style.display = 'inline-block';
    reset.addEventListener('click',restartGame);
}


function playRound(playerSelection){

    let result;
    let computerSelection = getComputerChoice();

    if(playerSelection === computerSelection){
        result = "It's a tie";
    }else if(playerSelection === "rock" && computerSelection === "scissor" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissor" && computerSelection === "paper" ){
        result = `You win! ${playerSelection} beats ${computerSelection}`
        playerScore += 1;
    }else if(computerSelection === "rock" && playerSelection === "scissor" || computerSelection === "paper" && playerSelection === "rock" || computerSelection === "scissor" && playerSelection === "paper"){
        result = `You lose! ${computerSelection} beats ${playerSelection}`
        computerScore += 1;
    }
    
    resultDisplay.textContent = `Round Result: ${result}`;
    updateScore();
    if( computerScore === 5 || playerScore === 5){
        computerScore > playerScore ? resultDisplay.textContent = "Computer Win!!!" : resultDisplay.textContent = "You Win!!!";
        resultDisplay.style.color = 'red';
        gameOver();
    }
}

buttons.forEach(button => button.addEventListener('click', () => {
    playRound(button.id);

}));