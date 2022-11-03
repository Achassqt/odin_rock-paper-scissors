const instructions = document.querySelector(".instructions");
const output = document.getElementById("output");
const versus = document.querySelector(".versus-img");
const scoreBoard = document.querySelector(".score-board");
const rpsLeft = document.getElementById("rps-left");
const rpsRight = document.getElementById("rps-right");
const playersContainer = document.querySelector(".characters");
const main = document.querySelector(".main");

const leftPlayer = document.getElementById("left-player");
const rightPlayer = document.getElementById("right-player");

const leftCharacter = document.querySelector(".left-character");
const rightCharacter = document.querySelector(".right-character");

let leftSide = false;
let rightSide = false;

let leftScore = document.getElementById("score-left");
let rightScore = document.getElementById("score-right");

let playerScore = 0;
let computerScore = 0;

const startBtn = document.querySelector("#start");
const restartBtn = document.getElementById("restart");

leftCharacter.onclick = (e) => playerSelection(e);
rightCharacter.onclick = (e) => playerSelection(e);
startBtn.onclick = () => gameOrganization();
restartBtn.addEventListener("click", () => {
  location.reload();
});

function playerSelection(e) {
  if (e.target.classList.contains("left-character")) {
    leftCharacter.classList.add("is-active_character");
    rightCharacter.classList.remove("is-active_character");
    rightSide = false;
    leftSide = true;
  } else {
    rightCharacter.classList.add("is-active_character");
    leftCharacter.classList.remove("is-active_character");
    rightSide = true;
    leftSide = false;
  }

  startBtn.style.display = "block";
}

function gameOrganization() {
  leftCharacter.classList.remove("is-active_character");
  rightCharacter.classList.remove("is-active_character");

  instructions.style.display = "none";

  playersContainer.style.width = "100%";
  playersContainer.style.marginTop = "100px";
  // playersContainer.style.justifyContent = "space-around";
  leftPlayer.style.marginLeft = "50px";
  rightPlayer.style.marginRight = "50px";

  // leftPlayer.classList.add("character-transition-left");
  // rightPlayer.classList.add("character-transition-right");

  leftCharacter.style.pointerEvents = "none";
  rightCharacter.style.pointerEvents = "none";

  output.closest(".output-container").classList.add("output-transition");
  // output.classList.add("text-transition");
  output.innerHTML =
    "Prêt à affronter votre adversaire! Sélectionner un signe.";

  versus.classList.add("versus-anim");
  if (leftSide) {
    rpsLeft.style.display = "flex";
  } else if (rightSide) {
    rpsRight.style.display = "flex";
  }

  scoreBoard.style.display = "flex";
  scoring();
}

function scoring() {
  if (leftSide) {
    leftScore.innerHTML = playerScore;
    rightScore.innerHTML = computerScore;
  } else if (rightSide) {
    rightScore.innerHTML = playerScore;
    leftScore.innerHTML = computerScore;
  }
}

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

const shi = document.getElementById("shi");
const fu = document.getElementById("fu");
const mi = document.getElementById("mi");

function activeRpsButton(e) {
  leftRockButton.disabled = true;
  leftPaperButton.disabled = true;
  leftScissorsButton.disabled = true;
  rightRockButton.disabled = true;
  rightPaperButton.disabled = true;
  rightScissorsButton.disabled = true;
  shi.classList.add("delay-1");
  fu.classList.add("delay-2");
  mi.classList.add("delay-3");
  setTimeout(() => {
    game(e);
    if (computerScore < 5 && playerScore < 5) {
      leftRockButton.disabled = false;
      leftPaperButton.disabled = false;
      leftScissorsButton.disabled = false;
      rightRockButton.disabled = false;
      rightPaperButton.disabled = false;
      rightScissorsButton.disabled = false;
      shi.classList.remove("delay-1");
      fu.classList.remove("delay-2");
      mi.classList.remove("delay-3");
    } else {
      rpsRight.style.display = "none";
      rpsLeft.style.display = "none";
    }
  }, 2100);
}

const leftRockButton = document.getElementById("rock-left");
const leftPaperButton = document.getElementById("paper-left");
const leftScissorsButton = document.getElementById("scissors-left");
const rightRockButton = document.getElementById("rock-right");
const rightPaperButton = document.getElementById("paper-right");
const rightScissorsButton = document.getElementById("scissors-right");
leftRockButton.onclick = () => activeRpsButton(leftRockButton.value);
leftPaperButton.onclick = () => activeRpsButton(leftPaperButton.value);
leftScissorsButton.onclick = () => activeRpsButton(leftScissorsButton.value);
rightRockButton.onclick = () => activeRpsButton(rightRockButton.value);
rightPaperButton.onclick = () => activeRpsButton(rightPaperButton.value);
rightScissorsButton.onclick = () => activeRpsButton(rightScissorsButton.value);

function game(playerSelection) {
  playRound(playerSelection, getComputerChoice());
  scoring();
  if (playerScore === 5) {
    leftRockButton.disabled = true;
    leftPaperButton.disabled = true;
    leftScissorsButton.disabled = true;
    rightRockButton.disabled = true;
    rightPaperButton.disabled = true;
    rightScissorsButton.disabled = true;
    output.innerHTML = "Vous avez gagné! Félicitations.";
    restartBtn.style.display = "block";
  } else if (computerScore === 5) {
    leftRockButton.disabled = true;
    leftPaperButton.disabled = true;
    leftScissorsButton.disabled = true;
    rightRockButton.disabled = true;
    rightPaperButton.disabled = true;
    rightScissorsButton.disabled = true;
    output.innerHTML = "Vous avez perdu :/ Dommage.";
    restartBtn.style.display = "block";
  }
}
