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
    return (userChoice = "1"), getComputerChoice(); // Rock
  } else if (userInput === "paper") {
    return (userChoice = "2"), getComputerChoice(); // Paper
  } else if (userInput === "scissors") {
    return (userChoice = "3"), getComputerChoice(); // Scissors
  }
}
console.log(userChoice);
// getComputerChoice();

function getComputerChoice() {
  let result = Math.floor(Math.random() * 3) + 1;
  userChoice = userChoice + result.toString();
  console.log(result);
  getScore();
}

//11, 22, 33 Draw
//12, 23, 31 Lose
//13, 21, 32 Win
// getScore();

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
  if (userScore >= computerScore + 2) {
    alert("win");
  }

  let playerScore = document.querySelector(".player-score");
  playerScore.textContent = userScore;
  let compScore = document.querySelector(".computer-score");
  compScore.textContent = computerScore;
}

console.log(userScore, computerScore, userChoice);
