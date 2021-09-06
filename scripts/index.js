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
            message.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
            ++humanWins;
            break;
        case computerSelection === "ROCK" && playerSelection === "SCISSORS":
        case computerSelection === "PAPER" && playerSelection === "ROCK":
        case computerSelection === "SCISSORS" && playerSelection === "PAPER":
            message.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;
            ++computerWins;
            break;
        case playerSelection === computerSelection:
            message.innerText = "It's a DRAW!";
            break;
    }
}

function game() {
    if (humanWins > 4 || computerWins > 4) {
        if (humanWins > computerWins) {
            message.innerText = "Congratulations, You Won!";
        } else {
            message.innerText = "Awww, You Lose!";
        }
        restartGame();
    }
    score.innerText = `Human: ${humanWins} CPU: ${computerWins}`;
}

function restartGame() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.style.display = "none";
    });
    const playAgainBtn = document.createElement('button');
    playAgainBtn.innerText = "Continue?";
    playAgainBtn.addEventListener('click', () => {
        humanWins = 0;
        computerWins = 0;
        message.innerText = "Make a Selection";
        score.innerText = "Human: 0 CPU: 0";
        buttons.forEach((button) => {
            button.style.display = "inline";
        });
        document.querySelector('div').removeChild(playAgainBtn);
    });
    document.querySelector('div').appendChild(playAgainBtn);
}

let humanWins = 0;
let computerWins = 0;
const message = document.querySelector('.message');
const score = document.querySelector('.score');

const selectionBtns = document.querySelectorAll("button");
selectionBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (humanWins < 5 && computerWins < 5) {
            playRound(e.originalTarget.value, computerPlay());
        }
        game();
    });
});