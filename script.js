const rockButton = document.querySelector("#Rock");
const paperButton = document.querySelector("#Paper");
const scissorsButton = document.querySelector("#Scissors");
const playerScoreDisplay = document.querySelector("#playerScore");
const computerScoreDisplay = document.querySelector("#computerScore");
const playerChoiceDisplay = document.querySelector("#playerChoice");
const computerChoiceDisplay = document.querySelector("#computerChoice");
const roundResultDisplay = document.querySelector("#roundResult");

function getComputerChoice() {
  const random = Math.random();

  if (random <= 0.33) {
    // console.log("Computer : Rock");
    computerChoiceDisplay.textContent = "Computer : Rock";
    return "Rock";
  } else if (random <= 0.66) {
    // console.log("Computer : Paper");
    computerChoiceDisplay.textContent = "Computer : Paper";
    return "Paper";
  } else {
    // console.log("Computer : Scissors");
    computerChoiceDisplay.textContent = "Computer : Scissors";
    return "Scissors";
  }
}

function handleChoice(choice) {
  playerChoiceDisplay.textContent = "You played: " + choice;
  const computerChoice = getComputerChoice();
  const result = playRound(choice, computerChoice);

  if (result === "win") {
    humanScore++;
  } else if (result === "loose") {
    computerScore++;
  }
  playerScoreDisplay.textContent = `Your Score : ${humanScore}`;
  computerScoreDisplay.textContent = `Computer Score : ${computerScore}`;
  if (humanScore === 5) {
    // console.log("You win the game !");
    playerScoreDisplay.textContent = `You win the game !`;
  } else if (computerScore === 5) {
    // console.log("You loose the game!");
    computerScoreDisplay.textContent = `You loose the game...`;
  }
}

rockButton.addEventListener("click", () => handleChoice("Rock"));
paperButton.addEventListener("click", () => handleChoice("Paper"));
scissorsButton.addEventListener("click", () => handleChoice("Scissors"));

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  console.log("Player: " + humanChoice + " & Computer: " + computerChoice);
  if (humanChoice === "Rock" && computerChoice === "Paper") {
    // console.log("You lose! Paper beats Rock");
    roundResultDisplay.textContent = "You lose ! Paper beats Rock";
    return "loose";
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    // console.log("You lose! Scissors beats Paper");
    roundResultDisplay.textContent = "You lose ! Scissors beats Paper";
    return "loose";
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    // console.log("You lose! Rocks beats Scissors");
    roundResultDisplay.textContent = "You lose ! Rocks beats Scissors";
    return "loose";
  } else if (humanChoice === computerChoice) {
    // console.log("Draw");
    roundResultDisplay.textContent = "Draw";
    return "draw";
  } else {
    // console.log("You win");
    roundResultDisplay.textContent = "You win !";
    return "win";
  }
}
