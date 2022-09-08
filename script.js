// Generates either Rock, Paper, or Scissors at random
function getComputerChoice() {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

let playerScore = 0;
let computerScore = 0;


// Takes player text as input and compares to computerSelection to play a single round of Rock, Paper, Scisscors. Adds +1 to either playerScore or computerScore depending on who wins the round
function playRound(playerSelection, computerSelection) {
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

let rockBtn = document.querySelector(".btn1");
let paperBtn = document.querySelector(".btn2");
let scissorsBtn = document.querySelector(".btn3");
let p1Display = document.querySelector(".p1Display");
let p2Display = document.querySelector(".p2Display");

rockBtn.addEventListener("click", () => {
    const playerSelection = "ROCK";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection); 
    }
)

paperBtn.addEventListener("click", () => {
    const playerSelection = "PAPER";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection); 
    }
)

scissorsBtn.addEventListener("click", () => {
    const playerSelection = "SCISSORS";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection); 
    }
)

// Runs playRound 5 times and shows the score at the end of the round in console
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
        console.log("Score =" + " " + "Player =" + " " + playerScore + " " + "||" + " " + "Computer =" + " " + computerScore);
    }      
}

// Decides who wins by comparing playerScore to computerScore
function finalTally() {
    if (playerScore > computerScore) {
        console.log("You win!");
    }   else if (playerScore < computerScore){
        console.log("You lost :(");
    }   else {
        console.log("Draw")
    }
}



// console.log(game());

// console.log(finalTally());

// console.log(clickSelection());

// console.log(playRound());