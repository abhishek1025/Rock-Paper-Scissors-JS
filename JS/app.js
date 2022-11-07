let playerScore = 0;
let compScore = 0;
let totalRound = 0;

const options = ["rock", "paper", "scissors"]

const showGameBtn = document.querySelector("#showGameBtn");
const banner = document.querySelector("header")
const gameUI = document.querySelector(".gameUI")

gameUI.style.display = "none";


//rock paper game btns
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

//display the selection of com and player btns
const playerChoiceEL = document.querySelector(".player-choice")
const computerChoiceEL = document.querySelector(".comp-choice")

//player and computer score elemets
const playerScoreEl = document.querySelector(".player-score")
const compScoreEl = document.querySelector(".comp-score")

playerScoreEl.innerHTML = `You : ${playerScore}`;
compScoreEl.innerHTML = `Computer : ${compScore}`;

//getting the element to displat round result
const eachRoundResult = document.querySelector(".round-result");



//getting the elements of pop-up messages
const popUpMsgSection = document.querySelector(".pop-up-msg");
const finalScore = document.querySelector("#finalScore");

popUpMsgSection.style.display = "none";




//Hiding the home section and displaying the game UI
showGameBtn.addEventListener('click', () => {
    gameUI.style.display = "block";
    banner.style.display = "none";
})

//Adding functionality to the btns
rock.addEventListener("click", () => {
    playerChoiceEL.innerHTML = `<img src="img/rock.png" alt="Rock">`;
    const computerChoice = getComputerSelection();
    playRound("rock", computerChoice);
})

paper.addEventListener("click", () => {
    playerChoiceEL.innerHTML = `<img src="img/paper.png" alt="paper">`;
    const computerChoice = getComputerSelection();
    playRound("paper", computerChoice);
})
scissors.addEventListener("click", () => {
    playerChoiceEL.innerHTML = `<img src="img/scissors.png" alt="scissors">`;
    const computerChoice = getComputerSelection();
    playRound("scissors", computerChoice);
})




// geting the computer choice
function getComputerSelection() {
    let index = Math.floor(Math.random() * 3);

    if (options[index] === "rock") {
        computerChoiceEL.innerHTML = `<img src="img/rock.png" alt="Rock">`;
        return options[index]
    }
    else if (options[index] === "paper") {
        computerChoiceEL.innerHTML = `<img src="img/paper.png" alt="paper">`;
        return options[index]
    }
    else if (options[index] === "scissors") {
        computerChoiceEL.innerHTML = `<img src="img/scissors.png" alt="scissors">`;
        return options[index]
    }

}


//playing
function playRound(playerChoice, computerChoice) {

    eachRoundResult.style.visibility = "visible";

    //Condition when comp wins
    if (computerChoice === "scissors" && playerChoice === "paper" ||
        computerChoice === "paper" && playerChoice === "rock" ||
        computerChoice === "rock" && playerChoice === "scissors") {

        compScore++;
        compScoreEl.innerHTML = `Computer : ${compScore}`;

        eachRoundResult.innerHTML = "Computer Wins";
    }
    //condition when player wins
    else if (computerChoice === "paper" && playerChoice === "scissors" ||
        computerChoice === "rock" && playerChoice === "paper" ||
        computerChoice === "scissors" && playerChoice === "rock") {

        playerScore++;
        playerScoreEl.innerHTML = `You : ${playerScore}`;

        eachRoundResult.innerHTML = "Player Wins";


    }
    //Draw
    else if (computerChoice === "scissors" && playerChoice === "scissors" || computerChoice === "paper" && playerChoice === "paper" || computerChoice === "rock" && playerChoice === "rock") {
        eachRoundResult.innerHTML = "Draw";
    }

    totalRound++;

    if (totalRound == 5) {
        setTimeout(reset, 1000);
    }

}


function reset() {

    finalScore.innerHTML = `(You) ${playerScore} - ${compScore} (Computer)`;

    playerScore = 0;
    compScore = 0;
    totalRound = 0;

    compScoreEl.innerHTML = `Computer : ${compScore}`;
    playerScoreEl.innerHTML = `You : ${playerScore}`;

    computerChoiceEL.innerHTML = "";
    playerChoiceEL.innerHTML = "";

    popUpMsgSection.style.display = "block";


}

document.querySelector("#playAgain").addEventListener('click', () => {
    popUpMsgSection.style.display = "none";
})




