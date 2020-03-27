let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => 
Math.floor(Math.random()*10);

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDiffer = Math.abs(targetGuess-humanGuess);
  const computerDiffer = Math.abs(targetGuess-computerGuess);
  return humanDiffer <= computerDiffer; 
};

const updateScore = win => {
  if (win === 'human'){
    humanScore++;
  }
  else if(win === 'computer'){
    computerScore++;
  }
};

const advanceRound = () => 
  currentRoundNumber ++;


