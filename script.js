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

function getHumanChoice() {
  let sign = prompt("What's your choice ?");

  if (sign.toLowerCase() === "rock") {
    console.log("You choose Rock !");
  } else if (sign.toLowerCase() === "paper") {
    console.log("You choose Paper !");
  } else if (sign.toLowerCase() === "scissors") {
    console.log("You choose Scissors !");
  } else {
    console.log("Invalid choice");
  }
}

playButton.addEventListener("click", () => {
  getHumanChoice();
});
//   let sign = prompt("What's your choice ?");

//   if (sign.toLowerCase() === "rock") {
//       console.log("You choose Rock !")
//   } else if (sign.toLowerCase() === "paper") {
//     console.log("You choose Paper !")
// } else {
//   (sign.toLowerCase() === "scissors")
//     console.log("You choose Scissors !")

// }

// playButton.addEventListener("click", () => {
//   console.log("Computer choose : " + getComputerChoice());
// });
