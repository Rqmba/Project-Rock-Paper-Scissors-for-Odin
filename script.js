const playButton = document.querySelector("#playButton");
const log = document.querySelector("#log");

function getComputerChoice() {
  const random = Math.random();

  if (random <= 0.33) {
    return "Rock";
  } else if (random <= 0.66) {
    return "Paper";
  } else {
    random <= 0.33;
    return "Scissors";
  }
}

playButton.addEventListener("click", () => {
  console.log("Computer choose : " + getComputerChoice());
});
