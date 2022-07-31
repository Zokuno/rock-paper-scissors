/* // tips: use return mostly, use console.log() to display results/winner of each round. Use prompt() to get input from the user. Might be helpful to change return value to something more useful */
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}
function playRound(playerSelection, computerSelection) {
            
            
            // Plays a single round and takes two parameters and returns a string that declares the winner of the round like so: "You Lose! Paper beats Rock". playerSelection should be case sensitive so any variation can be accepted e.g ROCK Rock rock RoCk etc.
}
function game() {
            // this calls playRound function to play a 5 round game that keeps score and reports a winner or loser at the end. Utilise loops.
}