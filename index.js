
let playerSelection = () => {
  return window.prompt("rock, paper, or scissors?").toLowerCase();
}

let computerPlay = () => {
  let randomValue = Math.random() * 3;
  console.log('randomVal: ', randomValue);
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

console.log(computerPlay());

let play = (pSel, cSel) => {
  if (pSel === "rock" && cSel === "paper" || pSel === "paper" && cSel === "scissors" || pSel === "scissors" && cSel === "rock") {
      console.log(`You Lose! ${capitalize(cSel)} beats ${pSel}`);
  } else if(pSel === cSel) {
    console.log("Tie! Play again");
    play(playerSelection(), computerPlay());
  } else {
    console.log(`You Win! ${capitalize(pSel)} beats ${cSel}`);
  }
}


play(playerSelection(), computerPlay());