
let playerPick = (msg = "rock, paper, or scissors") => {
  let pick = window.prompt(msg).toLowerCase();

  if (pick === 'rock' || pick === 'paper' || pick === 'scissors') {
    return pick;
  } else {
    console.log('not allowed! Pick one!');
    return playerPick("Try again. Rock, Paper, or Scissors!");
  }
}

let computerPick = () => {
  let randomValue = Math.random() * 3;
  if (randomValue < 1) {
    return "rock";
  } else if (randomValue < 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

let capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

console.log(computerPick());

let playerScore = 0;
let computerScore = 0;
let roundNum = 0;

let playRound = (pSel, cSel, rounds) => {
  if (pSel === "rock" && cSel === "paper" || pSel === "paper" && cSel === "scissors" || pSel === "scissors" && cSel === "rock") {
      console.log(`You Lose! ${capitalize(cSel)} beats ${pSel}`);
      computerScore += 1;
      console.log(`${playerScore === rounds || computerScore === rounds ? 'FINAL' : 'CURRENT'} SCORE: Computer - ${computerScore} | You - ${playerScore}`);
      roundNum += 1;
  } else if(pSel === cSel) {
    console.log("Tie! Play again");
    playRound(playerPick(), computerPick());
  } else {
    console.log(`You Win! ${capitalize(pSel)} beats ${cSel}`);
    playerScore += 1;
    console.log(`${playerScore === rounds || computerScore === rounds ? 'FINAL' : 'CURRENT'} SCORE: You - ${playerScore} | Computer - ${computerScore}`);   
    roundNum += 1;
  }
}

let game = (rounds) => {

  while(playerScore < rounds && computerScore < rounds) {
    playRound(playerPick(), computerPick(), rounds);
  }

  if(playerScore === rounds){
    console.log("You WON! Good Job!");
  } else {
    console.log("You lose. Better luck next time.");
  }
}

game(5);
