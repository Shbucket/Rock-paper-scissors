const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const userDisplay = document.getElementById("userChoice");
const computerDisplay = document.getElementById("computerPick");
const result = document.getElementById("Winner");
const computerVic = document.getElementById("computerW");
const playerVic = document.getElementById("userW");

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
    return 'It was a draw'
  } else if (playerChoice == "rock") {
    if (computer == "paper") {
      computerWins++;
      computerVic.innerHTML = computerWins + ' games';
    
    } else if (computer == "scissors") {
      playerWins++;
      playerVic.innerHTML = playerWins + " games";
    }
  } else if (playerChoice == "scissors") {
    if (computer == "paper") {
      playerWins++;
    playerVic.innerHTML = playerWins + " games";
    } else if (computer == "rock") {
      computerWins++;
    computerVic.innerHTML = computerWins + " games";
    }
  } else if (playerChoice == "paper") {
    if (computer == "rock") {
      playerWins++;
      playerVic.innerHTML = playerWins + " games";
    } else if (computer == "scissors") {
      computerWins++;
      computerVic.innerHTML = computerWins + " games";
    }
  } else {
    return "Error try again";
  }
};

const handleClick = (e) => {
  playerChoice = e.target.id;
  userDisplay.innerHTML = playerChoice;
  computerChoice();
  playGame(computer, playerChoice);
  winner()
};

paper.addEventListener("click", handleClick);
rock.addEventListener("click", handleClick);
scissors.addEventListener("click", handleClick);

const winner = () => {
  if (computerWins == 5){
    result.innerHTML = 'The computer won sorry :('
   
  } else if (playerWins == 5 ){
    result.innerHTML = 'You beat the computer :)'  

  }
}
