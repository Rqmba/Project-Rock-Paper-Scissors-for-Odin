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
    console.log("You lose! Paper beats Rock");
    return "loose";
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    console.log("You lose! Scissors beats Paper");
    return "loose";
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    console.log("You lose! Rocks beats Scissors");
    return "loose";
  } else if (humanChoice === computerChoice) {
    console.log("Draw");
    return "draw";
  } else {
    console.log("You win");
    return "win";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; i <= 4; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);
    if (result === "win") {
      humanScore++;
      console.log(
        `Human Score : ${humanScore} | Computer Score : ${computerScore}`,
      );
    } else if (result === "loose") {
      computerScore++;
      console.log(
        `Computer Score : ${computerScore} | Human Score : ${humanScore}`,
      );
    } else {
      console.log(
        `Human Score : ${humanScore} | Computer Score : ${computerScore}`,
      );
    }
  }
  if (humanScore > computerScore) {
    console.log("You win the game !");
  } else if (humanScore < computerScore) {
    console.log("You loose the game!");
  } else {
    console.log("Draw !");
  }
}

playButton.addEventListener("click", () => {
  playGame();
});
