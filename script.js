/* // tips: use return mostly, use console.log() to display results/winner of each round. Use prompt() to get input from the user. Might be helpful to change return value to something more useful */
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
    if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        return loser;
    }   else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
            return winner;
    }   else if (playerSelection === 'ROCK' && computerSelection === 'ROCK') {
            return draw;
    }    else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        return loser;
    }   else if (playerSelection === 'PAPER' &&        computerSelection === 'ROCK') {
            return winner;
    }   else if (playerSelection === 'PAPER' && computerSelection === 'PAPER') {
            return draw;
    }   else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        return loser;
    }    else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
            return winner;
    }    else if (playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS') {
            return draw;
    }    else {
            return "Please type 'Rock', 'Paper', or 'Scissors'";
        }
}

function game() {
            // this calls playRound function to play a 5 round game that keeps score and reports a winner or loser at the end. Utilise loops.
}

console.log(playRound());