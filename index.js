function getComputerChoice() {
  let compNum = Math.floor(Math.random() * 3);
  let compGuess = "";
  if (compNum === 0) {
    compGuess = "pierre";
  } else if (compNum === 1) {
    compGuess = "papier";
  } else if (compNum === 2) {
    compGuess = "ciseaux";
  }
  console.log(compGuess);
  return compGuess;
}

let playerScore = 0;
let compScore = 0;

function playRound(playerSelection, compSelection) {
  const resultDOM = document.getElementById("result");
  let result = "";

  if (playerSelection === compSelection) {
    result = "Égalité!";
  } else if (playerSelection === "pierre") {
    if (compSelection === "papier") {
      compScore++;
      result = "Perdu!";
    } else if (compSelection === "ciseaux") {
      playerScore++;
      result = "Gagné!";
    }
  } else if (playerSelection === "papier") {
    if (compSelection === "ciseaux") {
      compScore++;
      result = "Perdu!";
    } else if (compSelection === "pierre") {
      playerScore++;
      result = "Gagné!";
    }
  } else if (playerSelection === "ciseaux") {
    if (compSelection === "pierre") {
      compScore++;
      result = "Perdu!";
    } else if (compSelection === "papier") {
      playerScore++;
      result = "Gagné!";
    }
  }
  console.log(result);
  return (resultDOM.innerHTML = result);
}

// opti le code pour les addEventlistener

const rockButton = document.getElementById("rock");
rockButton.addEventListener("click", () => {
  playRound(rockButton.value, getComputerChoice());
});
const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", () => {
  playRound(paperButton.value, getComputerChoice());
});
const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", () => {
  playRound(scissorsButton.value, getComputerChoice());
});

// function game() {
//   for (let i = 0; i < 5; i++) {
//     const computerSelection = getComputerChoice();
//     const playerSelection = prompt("Pierre papier ou ciseaux").toLowerCase();
//     alert(
//       `${playRound(
//         playerSelection,
//         computerSelection
//       )} ${playerScore} / ${compScore}`
//     );
//   }
// }

// game();

// console.log(playRound(playerSelection, computerSelection));
