const choices = ["paper", "scissors", "rock"];
const computerChoice = () => {
  let pick = choices[Math.floor(Math.random() * 3)];
  return pick;
};

const computer = computerChoice();

const playerChoice = "paper";
const computerWins = 0;
const playerWins = 0;

const playGame = (computer, playerChoice) => {
  if (playerChoice == computer) {
    return "Its a Draw!";
  } else if (playerChoice == "rock") {
    if (computer == "paper") {
      computerWins++;
      return "Paper beats Rock sorry :(";
    } else if (computer == "scissors") {
      playerWins++;
      return "Rock beats scissors :)";
    }
  } else if (playerChoice == "scissors") {
    if (computer == "paper") {
      return "Scissors beats paper :)";
    } else if (computer == "rock") {
      computerWins++;
      return "Rock beats scissors :(";
    }
  } else if (playerChoice == "paper") {
    if (computer == "rock") {
      return "Paper beats rock :)";
    } else if (computer == "scissors") {
      computerWins++;
      return "Scissors beats paper :(";
    }
  }
};

/*console.log(playGame(computer, playerChoice));*/
