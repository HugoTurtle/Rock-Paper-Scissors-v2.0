const Rock = "Rock";
const Paper = "Paper";
const Scissors = "Scissors";

playRound = (playerSelection, computerSelection) => {

}

userPlay = () => {
    let play = promptUser();
    play = play.toLowerCase();

    switch(play) {
        case "rock" :
            return Rock;
        case "paper" :
            return Paper;
        case "scissors" :
            return Scissors;
    }
}
computerPlay = () => {
    let play = randomInteger(1,3); // Between 1 - 3
    switch(play) {
        case 1 : 
            return Rock;
        case 2: 
            return Paper;
        case 3: 
            return Scissors;
    }
}
randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
promptUser = () => {
    return prompt("Rock, Paper, or Scissors?")
}

const playerSelection = userPlay();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));