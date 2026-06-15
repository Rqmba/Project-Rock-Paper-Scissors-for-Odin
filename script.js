const rockButton = document.querySelector("#Rock");
const paperButton = document.querySelector("#Paper");
const scissorsButton = document.querySelector("#Scissors");
const playerScoreDisplay = document.querySelector("#playerScore");
const computerScoreDisplay = document.querySelector("#computerScore");
const playerChoiceDisplay = document.querySelector("#playerChoice");
const computerChoiceDisplay = document.querySelector("#computerChoice");
const roundResultDisplay = document.querySelector("#roundResult");
const replayButton = document.querySelector("#Replay");

function getComputerChoice() {
  const random = Math.random();

  if (random <= 0.33) {
    computerChoiceDisplay.textContent = "Computer : Rock";
    return "Rock";
  } else if (random <= 0.66) {
    computerChoiceDisplay.textContent = "Computer : Paper";
    return "Paper";
  } else {
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
    setButtonsState(true);
    playerScoreDisplay.textContent = `You win the game !`;
  } else if (computerScore === 5) {
    setButtonsState(true);
    computerScoreDisplay.textContent = `You loose the game...`;
  }
}

rockButton.addEventListener("click", () => handleChoice("Rock"));
paperButton.addEventListener("click", () => handleChoice("Paper"));
scissorsButton.addEventListener("click", () => handleChoice("Scissors"));

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "Rock" && computerChoice === "Paper") {
    roundResultDisplay.textContent = "You lose ! Paper beats Rock";
    return "loose";
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    roundResultDisplay.textContent = "You lose ! Scissors beats Paper";
    return "loose";
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    roundResultDisplay.textContent = "You lose ! Rocks beats Scissors";
    return "loose";
  } else if (humanChoice === computerChoice) {
    roundResultDisplay.textContent = "Draw";
    return "draw";
  } else {
    roundResultDisplay.textContent = "You win !";
    return "win";
  }
}

function replay() {
  setButtonsState(false);
  humanScore = 0;
  computerScore = 0;
  playerChoiceDisplay.textContent = "";
  computerChoiceDisplay.textContent = "";
  roundResultDisplay.textContent = "";
  playerScoreDisplay.textContent = `Your Score : ${humanScore}`;
  computerScoreDisplay.textContent = `Computer Score : ${computerScore}`;
}

function setButtonsState(isDisabled) {
  const buttons = [rockButton, paperButton, scissorsButton];
  buttons.forEach((b) => (b.disabled = isDisabled));
}

replayButton.addEventListener("click", () => replay());
