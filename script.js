const choices = ["paper", "scissors", "rock"];
const computerChoice = () => {
 let pick = choices[Math.floor(Math.random() * 3)];
 return pick;
};
const computer = computerChoice();
const playerChoice = 'paper';
const playGame = (computer, playerChoice) => {
  if(playerChoice == computer){
    return 'Tie';
  } else { 
    if (playerChoice == "rock") {
      if (computer == "paper") {
        return "Paper beats Rock sorry :(";
      } else if (computer == "scissors") {
        return "Rock beats scissors :)";
      }
    }
     else if (playerChoice == "scissors") {
      if (computer == "paper") {
        return "Scissors beats paper :)";
      } else if (computer == "rock") {
        return "Rock beats scissors";
      }
    }
     else if (playerChoice == "paper") {
      if (computer == "rock") {
        return "Paper beats rock :)";
      } else if (computer == "scissors") {
        return "Scissors beats paper :(";
      }
    } 
  }
}
