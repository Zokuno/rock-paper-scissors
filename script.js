function getComputerChoice() {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

let playerScore = 0;
let computerScore = 0;

function currentScore(playerScore, computerScore) {
    playerScore = playerScore;
    computerScore = computerScore;
    console.log("Score =" + " " + "Player =" + " " + playerScore + " " + "||" + " " + "Computer =" + " " + computerScore);
} 

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, Paper, or Scissors?").toUpperCase();
    computerSelection = getComputerChoice();
    console.log("You chose" + " " + playerSelection);
    console.log("Opponent chose" + " " + computerSelection);
    let loser = "You Lose!" + " " + computerSelection + " " + "beats" + " " + playerSelection;
    let winner = "You Win!" + " " + playerSelection + " " + "beats" + " " + computerSelection;
    let draw = "Draw! No Winner";
    if (playerSelection === 'ROCK' && computerSelection === 'PAPER' || playerSelection === 'PAPER' && computerSelection === 'SCISSORS' || playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        computerScore++;
        console.log(loser);
    }   else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' || playerSelection === 'PAPER' && computerSelection === 'ROCK' || playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        playerScore++;
        console.log(winner);
    }   else if (playerSelection === 'ROCK' && computerSelection === 'ROCK' || playerSelection === 'PAPER' && computerSelection === 'PAPER' || playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS') { 
        console.log(draw);
    }   else  {
        console.log("No Contest! Please type 'Rock', 'Paper', or 'Scissors'");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
        console.log("Player Score = " + playerScore);
        console.log("Computer Score = " + computerScore);
    }      
}

function finalTally() {
    if (playerScore > computerScore) {
        console.log("You win~!~!~!");
    }   else if (playerScore < computerScore){
        console.log("You lost :(:(:(");
    }   else {
        console.log("Draw?!?!?!?!")
    }
}

console.log(game());
console.log(currentScore());
console.log(finalTally());