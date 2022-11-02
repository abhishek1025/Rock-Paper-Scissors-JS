
alert("Game rules: You have 5 rounds to play")

const options = ["rock", "paper", "scissors"]
// geting the computer choice
function getComputerSelection() {
    let index = Math.floor(Math.random() * 3);
    return options[index];
}

//getting player's choice
function getPlayerSelection() {

    return prompt("Enter your Choice: ").toLowerCase();
}


//playing
function playRound() {
    const computerChoice = getComputerSelection();
    const playerChoice = getPlayerSelection();

    if (computerChoice === "scissors" && playerChoice === "paper" || computerChoice === "paper" && playerChoice === "rock" || computerChoice === "rock" && playerChoice === "scissors") {
        return 0;
    }
    else if (computerChoice === "paper" && playerChoice === "scissors" || computerChoice === "rock" && playerChoice === "paper" || computerChoice === "scissors" && playerChoice === "paper") {
        return 1;
    }
    else if (computerChoice === "scissors" && playerChoice === "scissors" || computerChoice === "paper" && playerChoice === "paper" || computerChoice === "rock" && playerChoice === "rock") {
        return 2;
    }
    else {
        return 3;
    }


}


function game() {

    let playerScore = 0;
    let compScore = 0;
    let draw = 0

    for (let i = 0; i < 3; i++) {

        let result = playRound();

        if (result === 0) {
            compScore++;
            alert("Comp wins")
        } else if (result === 1) {
            alert("Player wins")
            playerScore++;
        }
        else if (result == 2) {
            alert("Draw")
            draw++;
        }
        else {

            break;
        }

    }

    if (playerScore > compScore) {
        document.write(`Player wins by ${playerScore} - ${compScore} <br>`);
    }
    else if (compScore > playerScore) {
        document.write(`Computer wins by ${compScore} - ${playerScore} <br>`);
    }

    document.write(`Draw ${draw} games <hr>`);
    restart()

}

function restart() {

    const askUser = prompt("Want to play again? y/n: ").toLowerCase();

    if (askUser === "y") {
        game()
    }

}

game()


