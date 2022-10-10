const instructions = document.querySelector(".instructions");
const output = document.getElementById("output");
const versus = document.querySelector(".versus-img");
const gameBoard = document.querySelector(".game-board");
const rps = document.getElementById("rps-container");
let leftSide = false;
let rightSide = false;
let leftScore = document.getElementById("score-left");
let rightScore = document.getElementById("score-right");

const persoUn = document.getElementById("perso-1");
persoUn.addEventListener("click", () => {
  persoUn.classList.add("is-active_character");
  persoDeux.classList.remove("is-active_character");

  leftSide = true;
  rightSide = false;

  startBtn.style.display = "block";
});

const persoDeux = document.getElementById("perso-2");
persoDeux.addEventListener("click", () => {
  persoDeux.classList.add("is-active_character");
  persoUn.classList.remove("is-active_character");

  rightSide = true;
  leftSide = false;

  startBtn.style.display = "block";
});

const startBtn = document.querySelector(".start-btn");
startBtn.addEventListener("click", () => {
  persoUn.classList.remove("is-active_character");
  persoDeux.classList.remove("is-active_character");

  persoUn.classList.add("character-transition-left");
  persoDeux.classList.add("character-transition-right");

  persoUn.style.pointerEvents = "none";
  persoDeux.style.pointerEvents = "none";

  output.closest(".output-container").classList.add("output-transition");
  // output.classList.add("text-transition");
  output.innerHTML =
    "Prêt à affronter votre adversaire! Sélectionner un signe.";

  instructions.style.display = "none";
  versus.classList.add("versus-anim");
  if (leftSide) {
    rps.classList.add("rps-container-left");
  } else if (rightSide) {
    rps.classList.add("rps-container-right");
  }

  gameBoard.style.display = "block";
  scoring();
});

let playerScore = 0;
let computerScore = 0;

function scoring() {
  if (leftSide) {
    leftScore.innerHTML = playerScore;
    rightScore.innerHTML = computerScore;
  } else if (rightSide) {
    rightScore.innerHTML = playerScore;
    leftScore.innerHTML = computerScore;
  }
}

// output.innerHTML = "Prêt à affronter votre adversaire! Sélectionner un signe";

const restartBtn = document.getElementById("restart");

function getComputerChoice() {
  let computerNum = Math.floor(Math.random() * 3);
  let computerGuess = "";
  if (computerNum === 0) {
    computerGuess = "pierre";
  } else if (computerNum === 1) {
    computerGuess = "papier";
  } else if (computerNum === 2) {
    computerGuess = "ciseaux";
  }
  console.log(computerGuess);
  return computerGuess;
}

function playRound(playerSelection, computerSelection) {
  let result = "";

  if (playerSelection === computerSelection) {
    result = "Égalité! Vous avez choisi le même signe que votre adversaire.";
  } else if (playerSelection === "pierre") {
    if (computerSelection === "papier") {
      computerScore++;
      result = "Perdu! Pierre < Papier.";
    } else if (computerSelection === "ciseaux") {
      playerScore++;
      result = "Gagné! Pierre > Ciseaux";
    }
  } else if (playerSelection === "papier") {
    if (computerSelection === "ciseaux") {
      computerScore++;
      result = "Perdu! Papier < Ciseaux";
    } else if (computerSelection === "pierre") {
      playerScore++;
      result = "Gagné! Papier > Pierre";
    }
  } else if (playerSelection === "ciseaux") {
    if (computerSelection === "pierre") {
      computerScore++;
      result = "Perdu! Ciseaux < Pierre";
    } else if (computerSelection === "papier") {
      playerScore++;
      result = "Gagné! Ciseaux > Papier";
    }
  }
  console.log(`${playerScore} / ${computerScore}`);
  console.log(result);
  return (output.innerHTML = result);
}

// opti le code pour les addEventlistener
const shi = document.getElementById("shi");
const fu = document.getElementById("fu");
const mi = document.getElementById("mi");

const rockButton = document.getElementById("rock");
rockButton.addEventListener("click", () => {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
  shi.classList.add("delay-1");
  fu.classList.add("delay-2");
  mi.classList.add("delay-3");
  setTimeout(() => {
    game(rockButton.value);
    if (computerScore < 5 && playerScore < 5) {
      rockButton.disabled = false;
      paperButton.disabled = false;
      scissorsButton.disabled = false;
      shi.classList.remove("delay-1");
      fu.classList.remove("delay-2");
      mi.classList.remove("delay-3");
    } else {
      rps.style.display = "none";
    }
  }, 2100);
});
const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", () => {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
  shi.classList.add("delay-1");
  fu.classList.add("delay-2");
  mi.classList.add("delay-3");
  setTimeout(() => {
    game(paperButton.value);
    if (computerScore < 5 && playerScore < 5) {
      rockButton.disabled = false;
      paperButton.disabled = false;
      scissorsButton.disabled = false;
      shi.classList.remove("delay-1");
      fu.classList.remove("delay-2");
      mi.classList.remove("delay-3");
    } else {
      rps.style.display = "none";
    }
  }, 2100);
});
const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", () => {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
  shi.classList.add("delay-1");
  fu.classList.add("delay-2");
  mi.classList.add("delay-3");
  setTimeout(() => {
    game(scissorsButton.value);
    if (computerScore < 5 && playerScore < 5) {
      rockButton.disabled = false;
      paperButton.disabled = false;
      scissorsButton.disabled = false;
      shi.classList.remove("delay-1");
      fu.classList.remove("delay-2");
      mi.classList.remove("delay-3");
    } else {
      rps.style.display = "none";
    }
  }, 2100);
});

restartBtn.addEventListener("click", () => {
  location.reload();
});

function game(playerSelection) {
  playRound(playerSelection, getComputerChoice());
  scoring();
  if (playerScore === 5) {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    output.innerHTML = "Vous avez gagné! Félicitations.";
    restartBtn.style.display = "block";
  } else if (computerScore === 5) {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    output.innerHTML = "Vous avez perdu :/ Dommage.";
    restartBtn.style.display = "block";
  }
}
