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
            return "It's a DRAW!";
    }
}

// Play a 5 round game that keeps score
// Reports a winner or loser at the end and for each round
function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let gameCounter = 0; gameCounter < 5; gameCounter++) {
        let playerSelection = prompt("Type rock, paper, or scissors");
        let result = playRound(playerSelection, computerPlay());
        console.log(result);
        if (result.includes("Win")) {
            ++playerWins;
        } else if (result.includes("Lose")) {
            ++computerWins;
        }
    }
    (playerWins > computerWins) ? console.log("Congratulations, You Won!") : console.log("Awww, You Lose!");
}