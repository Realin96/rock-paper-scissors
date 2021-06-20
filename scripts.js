function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function getPlayerSelection() {
  let selection = prompt("Rock, paper, or scissors?");
  selection = selection.toLowerCase();
  if (
    selection !== "rock" &&
    selection !== "paper" &&
    selection !== "scissors"
  ) {
    console.log("That's not a valid choice");
  } else return selection;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (computerSelection === "rock") {
    if (playerSelection === "paper") {
      playerScore++;
      console.log(
        `Computer played: ${computerSelection}, you played: ${playerSelection}. You win!`
      );
    } else if (playerSelection === "rock") {
      console.log(
        `Computer played: ${computerSelection}, you played: ${playerSelection}. It's a draw!`
      );
    } else {
      computerScore++;
      console.log(
        `Computer played: ${computerSelection}, you played: ${playerSelection}. You lose!`
      );
    }
  } else if (computerSelection === "paper") {
    if (playerSelection === "scissors") {
      playerScore++;
      console.log(
        `Computer played: ${computerSelection}, you played: ${playerSelection}. You win!`
      );
    } else if (playerSelection === "paper") {
      console.log(
        `Computer played: ${computerSelection}, you played: ${playerSelection}. It's a draw!`
      );
    } else {
      computerScore++;
      console.log(
        `Computer played: ${computerSelection}, you played: ${playerSelection}. You lose!`
      );
    }
  } else if (computerSelection === "scissors") {
    if (playerSelection === "rock") {
      playerScore++;
      console.log(
        `Computer played: ${computerSelection}, you played: ${playerSelection}. You win!`
      );
    } else if (playerSelection === "scissors") {
      console.log(
        `Computer played: ${computerSelection}, you played: ${playerSelection}. It's a draw!`
      );
    } else {
      computerScore++;
      console.log(
        `Computer played: ${computerSelection}, you played: ${playerSelection}. You lose!`
      );
    }
  }
  return `Player: ${playerScore}, Computer: ${computerScore}`;
}

function game() {
  playRound(getPlayerSelection(), computerPlay());
  playRound(getPlayerSelection(), computerPlay());
  playRound(getPlayerSelection(), computerPlay());
  playRound(getPlayerSelection(), computerPlay());
  playRound(getPlayerSelection(), computerPlay());
  if (playerScore > computerScore) {
    return `You win! Player: ${playerScore}, Computer: ${computerScore}`;
  } else if (playerScore === computerScore) {
    return `It's a draw! Player: ${playerScore}, Computer: ${computerScore}`;
  } else return `You lose! Player: ${playerScore}, Computer: ${computerScore}`;
}

console.log(game());
