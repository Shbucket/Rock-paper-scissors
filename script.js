const choices = ["paper", "scissors", "rock"];
const computerChoice = () => {
  let computer = choices[Math.floor(Math.random() * 3)];
  return computer;
}

