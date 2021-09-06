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

const rockBtn = document.querySelector("button[value='rock']");
rockBtn.addEventListener('click', (e) => {
    console.log(playRound(e.originalTarget.value, computerPlay()));
});

const paperBtn = document.querySelector("button[value='paper']");
paperBtn.addEventListener('click', (e) => {
    console.log(playRound(e.originalTarget.value, computerPlay()));
});

const scissorsBtn = document.querySelector("button[value='scissors']");
scissorsBtn.addEventListener('click', (e) => {
    console.log(playRound(e.originalTarget.value, computerPlay()));
});