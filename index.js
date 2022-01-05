let rounds = 2;

let rock = document.querySelector("#rock");
rock.addEventListener('click', () => { 
  playRound(playerPick("rock"), computerPick(), rounds), finishChecker(rounds)
});
let paper = document.querySelector("#paper");
paper.addEventListener("click", () => { 
  playRound(playerPick("paper"), computerPick(), rounds), finishChecker(rounds)
});
let scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => { 
  playRound(playerPick("scissors"), computerPick(), rounds), finishChecker(rounds)
});

let playerPick = (pick) => {
    console.log('playerpick:', pick);
    return pick;
  }
  
  let computerPick = () => {
    let randomValue = Math.random() * 3;
    if (randomValue < 1) {
      console.log('computer pick: rock')
      return "rock";
    } else if (randomValue < 2) {
      console.log('computer pick: paper')
      return "paper";
    } else {
     console.log('computer pick: scissors') 
      return "scissors";
    }
  }

  let playerScore = 0;
  let computerScore = 0;
  let roundNum = 0;


let playRound = (pSel, cSel, rounds) => {

    if(playerScore < rounds && computerScore < rounds) {
      console.log('playRound');
    if (pSel === "rock" && cSel === "paper" || pSel === "paper" && cSel === "scissors" || pSel === "scissors" && cSel === "rock") {
      computerScore += 1;
      document.querySelector('#result').textContent = `You Lose! ${cSel} beats ${pSel}`;
        document.querySelector('#score').textContent = `SCORE: You - ${playerScore} | Computer - ${computerScore}`;
        roundNum += 1;
    } else if(pSel === cSel) {
      console.log('tie!')
      document.querySelector('#result').textContent = "Tie! Play again";
    } else {
      playerScore += 1;   
      roundNum += 1;
      document.querySelector('#score').textContent = `SCORE: You - ${playerScore} | Computer - ${computerScore}`;
      document.querySelector('#result').textContent = `You Win! ${pSel} beats ${cSel}`;
    }

    }
}

let finishChecker = (rounds) => {
  if (playerScore === rounds) {
    console.log("END!");
    document.querySelectorAll("button").forEach(el => el.disabled = true);
    document.querySelector('#result').textContent = `You WON after ${roundNum} rounds! Good Job!`;
  } 
  if(computerScore === rounds) {
    document.querySelectorAll("button").forEach(el => el.disabled = true);
    document.querySelector('#result').textContent = `You lose. The computer beat you in ${roundNum} rounds. Better luck next time.`;
  }
}