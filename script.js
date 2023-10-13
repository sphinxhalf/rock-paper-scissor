let playerScore = 0;
let computerScore = 0;
const resultDiv = document.getElementById("result");
  
const resultPara = document.createElement("p");
const scorePara = document.createElement("p")
resultDiv.appendChild(resultPara);
resultDiv.appendChild(scorePara);

function getComputerChoice() {
  const choice = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * choice.length);
  return choice[randomIndex];
};

function RoundPlay(PlayerChoice, ComputerChoice) {
    if (PlayerChoice === ComputerChoice) {
      return "It's a tie";
    } else if (PlayerChoice === "rock" && ComputerChoice === "scissor") {
      playerScore++;
      return "You win, rock beats scissor";
    } else if (PlayerChoice === "scissor" && ComputerChoice === "paper") {
      playerScore++;
      return "You win, scissor beats paper";
    } else if (PlayerChoice === "paper" && ComputerChoice === "rock") {
      playerScore++;
      return "You win, paper beats rock";
    } else if (PlayerChoice === "rock" && ComputerChoice === "paper") {
      computerScore++;
      return "You lose, paper beats rock";
    } else if (PlayerChoice === "scissor" && ComputerChoice === "rock") {
      computerScore++;
      return "You lose, rock beats scissor";
    } else if (PlayerChoice === "paper" && ComputerChoice === "scissor") {
      computerScore++;
      return "You lose, scissor beats paper";
    } else {
      return "Invalid choice";
    }
  };

  function gamePlay(PlayerChoice, ComputerChoice) {
    resultPara.textContent = RoundPlay(PlayerChoice,ComputerChoice);
    scorePara.textContent = `Playre: ${playerScore} - Computer: ${computerScore}`;
    if (playerScore >= 5 ) {
      resultPara.textContent = "You win the game"
      disableButtons();
    } else if (computerScore >= 5) {
      resultPara.textContent = "Computer win the game";
      disableButtons();
    }
  }

  document.getElementById("rock").addEventListener("click", function(){
    gamePlay("rock", getComputerChoice());
  });
  document.getElementById("paper").addEventListener("click", function(){
    gamePlay("paper", getComputerChoice());
  });
  document.getElementById("scissor").addEventListener("click", function(){
    gamePlay("scissor", getComputerChoice());
  });

  function disableButtons() {
    // Disable the buttons to prevent further play
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissor").disabled = true;
  }




 





