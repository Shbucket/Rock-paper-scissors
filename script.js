const choices = ["paper", "scissors", "rock"];
const computerChoice = () => {
  let pick = choices[Math.floor(Math.random() * 3)];
  return pick;
};

const computer = computerChoice();

let playerChoice;
let computerWins = 0;
let playerWins = 0;
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
      playerWins++;
      return "Scissors beats paper :)";
    } else if (computer == "rock") {
      computerWins++;
      return "Rock beats scissors :(";
    }
  } else if (playerChoice == "paper") {
    if (computer == "rock") {
      playerWins++;
      return "Paper beats rock :)";
    } else if (computer == "scissors") {
      computerWins++;
      return "Scissors beats paper :(";
    }
  } else {
    return "Error try again";
  }
};

const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");

const handleClick = (e) => {
  playerChoice = e.target.id
};

paper.addEventListener('click', handleClick);
rock.addEventListener("click", handleClick);
scissors.addEventListener("click", handleClick);

console.log(computerWins);
console.log(playerWins);

