let userChoice = 0;
let score = 0;

// iterate 5 times
for (i = 0; i < 5; i++) {
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
  getComputerChoice();

  function getComputerChoice() {
    let result = Math.floor(Math.random() * 3) + 1;
    userChoice = userChoice + result.toString();
    console.log(result);
  }

  //11, 22, 33 Draw
  //12, 23, 31 Lose
  //13, 21, 32 Win
  getScore();

  function getScore() {
    if (userChoice === "11" || userChoice === "22" || userChoice === "33") {
      alert(`Draw ${score}`);
    } else if (userChoice == "12" || userChoice == "23" || userChoice == "32") {
      score = score - 1;
      alert(`Lose ${score}`);
    } else if (userChoice == "13" || userChoice == "21" || userChoice == "32") {
      score = score + 1;
      alert(`win ${score}`);
    }
  }
  continue;
}

console.log(score, userChoice);
