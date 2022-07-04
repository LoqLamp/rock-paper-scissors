"use strict";

let userChoice = 0;
let userInput = 0;
let userScore = 0;
let computerScore = 0;

const rock = document.querySelector(".rock");
rock.addEventListener("click", function () {
  assignUserChoice("rock");
  console.log(userChoice);
});
const paper = document.querySelector(".paper");
paper.addEventListener("click", function () {
  assignUserChoice("paper");
  console.log(userChoice);
});
const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", function () {
  assignUserChoice("scissors");
  console.log(userChoice);
});

function assignUserChoice(userInput) {
  if (userInput === "rock") {
    return (userChoice = "1"), insertPlayerImage(1), getComputerChoice(); // Rock
  } else if (userInput === "paper") {
    return (userChoice = "2"), insertPlayerImage(2), getComputerChoice(); // Paper
  } else if (userInput === "scissors") {
    return (userChoice = "3"), insertPlayerImage(3), getComputerChoice(); // Scissors
  }
}

function insertPlayerImage(playerChoice) {
  let playerChoiceImage = document.querySelector(".player-choice > img");
  const playerC = document.querySelector(".player-choice");
  if (playerChoice === 3) {
    playerChoiceImage.src = "../images/noun-scissors.png";
    playerC.replaceChild(playerChoiceImage, playerChoiceImage);
  } else if (playerChoice === 2) {
    playerChoiceImage.src = "../images/noun-hand-477922.png";
    playerC.replaceChild(playerChoiceImage, playerChoiceImage);
  } else if (playerChoice === 1) {
    playerChoiceImage.src = "../images/noun-fist-477918.png";
    playerC.replaceChild(playerChoiceImage, playerChoiceImage);
  }
}

console.log(userChoice);
// getComputerChoice();

function getComputerChoice() {
  let result = Math.floor(Math.random() * 3) + 1;
  userChoice = userChoice + result.toString();
  console.log(result);
  insertComputerImage(result), getScore();
}

function insertComputerImage(computerChoice) {
  let computerChoiceImage = document.querySelector(".computer-choice > img");
  const computerC = document.querySelector(".computer-choice");
  if (computerChoice === 3) {
    computerChoiceImage.src = "../images/noun-scissors.png";
    computerC.replaceChild(computerChoiceImage, computerChoiceImage);
  } else if (computerChoice === 2) {
    computerChoiceImage.src = "../images/noun-hand-477922.png";
    computerC.replaceChild(computerChoiceImage, computerChoiceImage);
  } else if (computerChoice === 1) {
    computerChoiceImage.src = "../images/noun-fist-477918.png";
    computerC.replaceChild(computerChoiceImage, computerChoiceImage);
  }
}

function getScore() {
  if (userChoice === "11" || userChoice === "22" || userChoice === "33") {
  } else if (
    userChoice === "12" ||
    userChoice === "23" ||
    userChoice === "32"
  ) {
    computerScore++;
  } else if (
    userChoice === "13" ||
    userChoice === "21" ||
    userChoice === "32"
  ) {
    userScore++;
  }
  console.log(userScore, computerScore);

  let playerScore = document.querySelector(".player-score");
  playerScore.textContent = userScore;
  let compScore = document.querySelector(".computer-score");
  compScore.textContent = computerScore;

  if (userScore === 5) {
    playerScore.textContent = `You Win: ${userScore}`;
    compScore.textContent = `You Lose: ${computerScore}`;
    userScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    compScore.textContent = "Win";
    playerScore.textContent = "Lose";
    userScore = 0;
    computerScore = 0;
  }
}

console.log(userScore, computerScore, userChoice);
