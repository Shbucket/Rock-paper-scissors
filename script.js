const choices = ["paper", "scissors", "rock"];
const computerChoice = () => {
  let pick = choices[Math.floor(Math.random() * 3)];
  return pick;
};

const computer = computerChoice();

const playerChoice = "scissors";
let computerWins = 0;
let playerWins = 0;

const playGame = (computer, playerChoice) => {
  if (playerChoice == computer) {
    return "Its a Draw!";
  } else if (playerChoice == "rock") {
    if (computer == "paper") {
      computerWins++
      return "Paper beats Rock sorry :(";
    } else if (computer == "scissors") {
      playerWins++
      return "Rock beats scissors :)";
    }
  } else if (playerChoice == "scissors") {
    if (computer == "paper") {
      playerWins++
      return "Scissors beats paper :)";
    } else if (computer == "rock") {
      computerWins++
      return "Rock beats scissors :(";
    }
  } else if (playerChoice == "paper") {
    if (computer == "rock") {
      playerWins++
      return "Paper beats rock :)";
    } else if (computer == "scissors") {
      computerWins++
      return "Scissors beats paper :(";
    }
  } else {
    return 'Error try again'
  }
};

const game = () => {
  for(let i = 0; i< 5 ; i++){
    const playerChoice = prompt('Choose between: Rock, Paper and Scissors').toLowerCase()
    const computerSelection = computerChoice();
    console.log(playGame(computerSelection, playerChoice));
  }
  if(playerWins < computerWins){
    return 'You lost!'
  } else if(playerWins > computerWins){
   return 'You Won!'
  } else {
    return 'It was a draw!'
  }
}

console.log(game());
console.log(computerWins);
console.log(playerWins)