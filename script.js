function getComputerChoice() {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
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
        return loser;
    }   else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' || playerSelection === 'PAPER' && computerSelection === 'ROCK' || playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        return winner;
    }   else if (playerSelection === 'ROCK' && computerSelection === 'ROCK' || playerSelection === 'PAPER' && computerSelection === 'PAPER' || playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS') { 
        return draw
    }   else  {
        return "Please type 'Rock', 'Paper', or 'Scissors'";
    }
}
function game() {
    for (let i = 0; i < 5; i++) {
        i = playRound();
    }      
}

// console.log(playRound());
console.log(game());