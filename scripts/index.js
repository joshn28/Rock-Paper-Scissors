// Make computer randomly select Rock, Paper or Scissors
function computerPlay() {
    let move = Math.floor(Math.random() * 3);
    if (move == 0) {
        return "Rock";
    } else if (move == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// Plays a single round of Rock Paper Scissors
// Get the input from the player and the computer
// Return the string that declares the winner of the round or draw
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    switch(true) {
        case playerSelection === "ROCK" && computerSelection === "SCISSORS":
        case playerSelection === "PAPER" && computerSelection === "ROCK":
        case playerSelection === "SCISSORS" && computerSelection === "PAPER":
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        case computerSelection === "ROCK" && playerSelection === "SCISSORS":
        case computerSelection === "PAPER" && playerSelection === "ROCK":
        case computerSelection === "SCISSORS" && playerSelection === "PAPER":
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        case playerSelection === computerSelection:
            return "DRAW! Continue?";
    }
}