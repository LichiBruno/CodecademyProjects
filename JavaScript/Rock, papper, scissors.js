const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
   
const choices = { 
  "rock": "scissors",
  "paper": "rock",
  "scissors": "paper"
};

const sanitizeUserChoice = userInput => {
  let sanitized = userInput.toLowerCase();
  let options = Object.keys(choices).concat(["bomb"]);
  return options.includes(sanitized) ? sanitized : null;
};

const getComputerChoice = () => {
  return Object.keys(choices)[Math.floor(Math.random() * 3)];
}

const determineWinner = (userChoice, computerChoice) => {
  switch (userChoice) {
    case "bomb":
      return "won";
    case computerChoice:
      return "tie";
    default:
      return (choices[userChoice] == computerChoice) ? "won" : "lost";
  }
}

const playGame = () => {
  readline.question('Choose rock, paper, scissors. "bye" to quit:', choice => {
    if (choice == 'bye') {
      console.log('Ok, bye')
      process.exit(0);
    }

    let user = sanitizeUserChoice(choice);

    if(!user){
      console.log("Unknown choice:", choice);
      return playGame();
    }

    readline.close();

    let computer = getComputerChoice();

    console.log(`User: ${user}. Computer: ${computer}`);

    let result = determineWinner(user, computer);

    console.log({
      "won": "User won",
      "tie": "That is a tie",
      "lost": "Computer Won"
    }[result]);
  });
}

function run_tests(){
  var assert = require('assert');
  assert(determineWinner("rock", "paper") == "lost");
  assert(determineWinner("paper", "rock") == "won");
  assert(determineWinner("rock", "scissors") == "won");
  assert(determineWinner("paper", "paper") == "tie");
  assert(determineWinner("rock", "rock") == "tie");
  assert(determineWinner("bomb", "paper") == "won");
  assert(determineWinner("bomb", "scissors") == "won");
  assert(sanitizeUserChoice("rock") == "rock");
  assert(sanitizeUserChoice("PapeR") == "paper");
  assert(sanitizeUserChoice("bogus") == null);
  console.log("Todos los tests salieron bien");
}

run_tests()
playGame();

