const playButton = document.querySelector("#playButton");
const log = document.querySelector("#log");

function getComputerChoice() {
  const random = Math.random();

  if (random <= 0.33) {
    console.log("Computer : Rock");
    return "Rock";
  } else if (random <= 0.66) {
    console.log("Computer : Paper");
    return "Paper";
  } else {
    random <= 0.33;
    console.log("Computer : Scissors");
    return "Scissors";
  }
}

function getHumanChoice() {
  let sign = prompt("What's your choice ?");

  if (sign.toLowerCase() === "rock") {
    console.log("Player : Rock");
    return "Rock";
  } else if (sign.toLowerCase() === "paper") {
    console.log("Player : Paper");
    return "Paper";
  } else if (sign.toLowerCase() === "scissors") {
    console.log("Player : Scissors");
    return "Scissors";
  } else {
    console.log("Invalid Choice");
    return "Invalid Choice";
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  console.log("Player: " + humanChoice + " & Computer: " + computerChoice);
  if (humanChoice === "Rock" && computerChoice === "Paper") {
    console.log("You lose");
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    console.log("You lose");
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    console.log("You lose");
  } else if (humanChoice === computerChoice) {
    console.log("Draw");
  } else {
    console.log("You win");
  }
}

playButton.addEventListener("click", () => {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
});
