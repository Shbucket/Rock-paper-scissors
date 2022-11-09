const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const userDisplay = document.getElementById("userChoice");
const computerDisplay = document.getElementById("computerPick");
const result = document.getElementById("Winner");

let computer;
let playerChoice;
let computerWins = 0;
let playerWins = 0;

const choices = ["paper", "scissors", "rock"];
const computerChoice = () => {
  let pick = choices[Math.floor(Math.random() * choices.length)];
  computer = pick;
  computerDisplay.innerHTML = pick;
};

const playGame = (computer, playerChoice) => {
  if (playerChoice == computer) {
    result.innerHTML = "Its a Draw!";
  } else if (playerChoice == "rock") {
    if (computer == "paper") {
      computerWins++;
      result.innerHTML = "Paper beats Rock sorry :(";
    } else if (computer == "scissors") {
      playerWins++;
      result.innerHTML = "Rock beats scissors :)";
    }
  } else if (playerChoice == "scissors") {
    if (computer == "paper") {
      playerWins++;
      result.innerHTML = "Scissors beats paper :)";
    } else if (computer == "rock") {
      computerWins++;
      result.innerHTML = "Rock beats scissors :(";
    }
  } else if (playerChoice == "paper") {
    if (computer == "rock") {
      playerWins++;
      result.innerHTML = "Paper beats rock :)";
    } else if (computer == "scissors") {
      computerWins++;
      result.innerHTML = "Scissors beats paper :(";
    }
  } else {
    result.innerHTML = "Error try again";
  }
};

const handleClick = (e) => {
  playerChoice = e.target.id;
  userDisplay.innerHTML = playerChoice;
  computerChoice();
  playGame(computer, playerChoice);
};

paper.addEventListener("click", handleClick);
rock.addEventListener("click", handleClick);
scissors.addEventListener("click", handleClick);
