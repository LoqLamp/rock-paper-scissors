let userChoice = 0;

let userInput = prompt("Rock Paper or Scissors?").toLowerCase();
console.log(userInput);

// Loop for invalid userInput until a correct value in entered

while (["rock", "paper", "scissors"].indexOf(userInput) === -1) {
  userInput = prompt("Please enter valid choice").toLowerCase();
}

assignUserChoice(userInput);

function assignUserChoice(userInput) {
  if (userInput === "rock") {
    return (userChoice = "1"); // Rock
  } else if (userInput === "paper") {
    return (userChoice = "2"); // Paper
  } else if (userInput === "scissors") {
    return (userChoice = "3"); // Scissors
  }
}
console.log(userChoice);

function getComputerChoice() {}
let result = Math.floor(Math.random() * 3) + 1;
console.log(result);
