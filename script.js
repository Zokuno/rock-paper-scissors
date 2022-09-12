// Generates either Rock, Paper, or Scissors at random
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function computerChoiceEmoji() {
    if (getComputerChoice === "Rock") {
        p2GameDisplay.textContent = rockEmoji;
    }   else if (getComputerChoice === "Paper") {
        p2GameDisplay.textContent = paperEmoji;
    }   else if (getComputerChoice === "Scissors") {
        p2GameDisplay.textContent = scissorsEmoji;
    }   else {
        p2GameDisplay = "❔";
    }
}

let playerScore = 0;
let computerScore = 0;


// Takes player text as input and compares to computerSelection to play a single round of Rock, Paper, Scisscors. Adds +1 to either playerScore or computerScore depending on who wins the round
function playRound(playerSelection, computerSelection) {
    let p1Selection = "You chose" + " " + playerSelection;
    let p2Selection = "Opponent chose" + " " + computerSelection;
    let loser = "You Lose!" + " " + computerSelection + " " + "beats" + " " + playerSelection + "!";
    let winner = "You Win!" + " " + playerSelection + " " + "beats" + " " + computerSelection + "!";
    let draw = "Draw! No Winner";
    p1Choice.textContent = p1Selection;
    p2Choice.textContent = p2Selection;
    if (playerSelection === 'Rock' && computerSelection === 'Paper' || playerSelection === 'Paper' && computerSelection === 'Scissors' || playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerScore++;
        gameOutcome.textContent = loser;
    }   else if (playerSelection === 'Rock' && computerSelection === 'Scissors' || playerSelection === 'Paper' && computerSelection === 'Rock' || playerSelection ===       'Scissors' && computerSelection === 'Paper') {
        playerScore++;
        gameOutcome.textContent = winner;
    }   else if (playerSelection === 'Rock' && computerSelection === 'Rock' || playerSelection === 'Paper' && computerSelection === 'Paper' || playerSelection === 'Scissors' && computerSelection === 'Scissors') { 
        gameOutcome.textContent = draw;
    }   else  {
        console.log("No Contest! Please click 'Rock', 'Paper', or 'Scissors'");
    }
    p1Display.textContent = playerScore;
    p2Display.textContent = computerScore;
}

let rockEmoji = "🗿";
let paperEmoji = "🧻";
let scissorsEmoji = "✂️";
let p1Choice = document.querySelector(".p1Choice");
let p2Choice = document.querySelector(".p2Choice");
let gameOutcome = document.querySelector(".gameOutcome");
let rockBtn = document.querySelector(".btn1");
let paperBtn = document.querySelector(".btn2");
let scissorsBtn = document.querySelector(".btn3");
let p1Display = document.querySelector(".p1Display");
let p2Display = document.querySelector(".p2Display");
let resetBtn = document.querySelector(".resetBtn");
let p1GameDisplay = document.querySelector(".p1GameDisplay");
let p2GameDisplay = document.querySelector(".p2GameDisplay");

rockBtn.addEventListener("click", () => {
    const playerSelection = "Rock";
    p1GameDisplay.textContent = rockEmoji;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection); 
}
)

paperBtn.addEventListener("click", () => {
    const playerSelection = "Paper";
    p1GameDisplay.textContent = paperEmoji;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection); 
}
)

scissorsBtn.addEventListener("click", () => {
    const playerSelection = "Scissors";
    p1GameDisplay.textContent = scissorsEmoji;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection); 
}
)

resetBtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Choice.textContent = "";
    p2Choice.textContent = "";
    gameOutcome.textContent = "";
    p1GameDisplay.textContent = "❔";
    p2GameDisplay.textContent = "❔";
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