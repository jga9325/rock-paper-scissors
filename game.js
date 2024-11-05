function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    let lowercaseHumanChoice = humanChoice.toLowerCase();

    if (lowercaseHumanChoice === computerChoice) {
        console.log("You tied!");
        return "tie";
    }

    if (lowercaseHumanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("You won! Rock beats Scissors.")
            return "human";
        }
        if (computerChoice === "paper") {
            console.log("You lost! Paper beats Rock.")
            return "computer";
        }
    } else if (lowercaseHumanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You won! Paper beats Rock.")
            return "human";
        }
        if (computerChoice === "scissors") {
            console.log("You lost! Scissors beats Paper.")
            return "computer";
        }
    } else if (lowercaseHumanChoice === "scissors") {
        if (computerChoice === "paper") {
            console.log("You won! Scissors beats Paper.")
            return "human";
        }
        if (computerChoice === "rock") {
            console.log("You lost! Rock beats Scissors.")
            return "computer";
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log("Human: " + humanChoice);
        console.log("Computer: " + computerChoice);
        let winner = playRound(humanChoice, computerChoice);
        if (winner === "human") {
            humanScore++;
        }
        if (winner === "computer") {
            computerScore++;
        }
    }

    if (humanScore > computerScore) {
        console.log(`You won! The score was ${humanScore} to ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lost. The score was ${humanScore} to ${computerScore}`);
    } else {
        console.log(`You tied! The score was ${humanScore} to ${computerScore}`);
    }
}

playGame();