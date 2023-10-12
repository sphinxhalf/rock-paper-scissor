let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
  const choice = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * choice.length);
  return choice[randomIndex];
}

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
  }

  function Game(    ) {
    for (i = 0; i < 5; i++)
    {
        const PlayerChoice = prompt("Choose rock,paper, scissor: ");
        const ComputerChoice = getComputerChoice();
        console.log(RoundPlay(PlayerChoice.toLowerCase(), ComputerChoice));
    }
    if (playerScore < computerScore) {
        console.log("You lose the game");
    } else {
        console.log("You win the game");
    }
  }

  Game();



