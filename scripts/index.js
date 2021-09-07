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
    score.innerText = `Human: ${humanWins} CPU: ${computerWins}`;
    if (humanWins > 4 || computerWins > 4) {
        if (humanWins > computerWins) {
            audio.item(1).play();
            message.innerText = "Congratulations, You Won!";
        } else {
            audio.item(0).play();
            message.innerText = "Awww, You Lose!";
        }
        restartGame();
    }
}

function restartGame() {
    const buttons = document.querySelectorAll('input');
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
const audio = document.querySelectorAll('audio');

const selectionBtns = document.querySelectorAll("input");
selectionBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (humanWins < 5 && computerWins < 5) {
            playRound(e.originalTarget.value, computerPlay());
        }
        game();
    });
});