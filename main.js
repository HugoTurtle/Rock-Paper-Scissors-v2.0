const Rock = "Rock";
const Paper = "Paper";
const Scissors = "Scissors";
let userWins = 0;
let computerWins = 0;

playRound = (playerSelection, computerSelection) => {
    switch(playerSelection) {
        case Rock :
            return computerSelection == Scissors ? (`You win! Rock beats Scissors.\r\nUser : ${++userWins} Computer : ${computerWins}`):
                   computerSelection == Paper ? (`You lose! Paper beats Rock.\r\nUser : ${userWins} Computer : ${++computerWins}`) :
                   `It's a tie\r\nUser : ${userWins} Computer : ${computerWins}`
        case Paper :
            return computerSelection == Rock ? (`You win! Paper beats Rock"\r\nUser : ${++userWins} Computer : ${computerWins}`) :
                   computerSelection == Scissors ? (`You lose! Scissors beats Paper\r\n User : ${userWins} Computer : ${++computerWins}`):
                   `It's a tie\r\nUser : ${userWins} Computer : ${computerWins}`
        case Scissors :
            return computerSelection == Paper ? (`You win! Scissors beats Paper\r\nUser : ${++userWins} Computer : ${computerWins}`) :
                   computerSelection == Rock ? (`You lose! Rock beats Scissors\r\nUser : ${userWins} Computer : ${++computerWins}`) :
                   `It's a tie\r\nUser : ${userWins} Computer : ${computerWins}`
    }
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
promptUser = (userChoice) => {
    return userChoice;
}
createScoreDiv = () => {
    const container = document.querySelector("#button-container");
    const score = document.createElement("div");
    score.setAttribute('style', 'white-space: pre;'); //Adds new line to \r\n text

    score.classList.add("score")
    return container.appendChild(score);
}
let updateScore = createScoreDiv();
score = (player, computer) => {
    updateScore.textContent = playRound(player, computer); 
}
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const playerSelection = promptUser(button.textContent);
    const computerSelection = computerPlay();
    score(playerSelection,computerSelection);
  });
});