function computerPlay(){
  let values = ['Rock', 'Paper', 'Scissors'],
  valueToUse = values [Math.floor(Math.random()* values.length)];
  return valueToUse;
};

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
let computerSelection = document.querySelector('.computerSelection');//always try to use 'queryselector' to shortern code
let result = document.querySelector('.result');
let score = document.querySelector('.computerScore', computerScore = 0, '.playerScore', playerScore = 0);
let finalResult = document.querySelector('.finalResult');
document.querySelector('.playAgain').style.display = "none";

rock.addEventListener('click', pickRock) //revised from stackoverflow

function pickRock() { //revised from stackoverflow
  let comp = computerPlay()//the variable comp had to be created. Otherwirse, if I use computerPlay() in if statements, sometimes the text content would not appear. See stackoverflow comment.
  if (comp === 'Rock') {
    computerSelection.textContent = "Computer's Selection: Rock";
    result.textContent = "It's a Tie!"
    score.innerHTML = `Your Score: <span class="player-score">${playerScore +=0}</span> Computer Score: <span class="computer-score">${computerScore +=0}</span>`//innerHTML would alow styling to happen
    
  } else if (comp === 'Paper') {
    computerSelection.textContent = "Computer's Selection: Paper";
    result.textContent = "Sorry! Paper beats Rock";
    score.innerHTML = `Your Score: <span class="player-score">${playerScore +=0}</span> Computer Score: <span class="computer-score">${computerScore +=1}</span>`
    
  } else if (comp === 'Scissors') {
    computerSelection.textContent = "Computer's Selection: Scissors";
    result.textContent = "Great Job! Rock beats Scissors";
    score.innerHTML = `Your Score: <span class="player-score">${playerScore +=1}</span> Computer Score: <span class="computer-score">${computerScore +=0}</span>`
  }
  if (playerScore === 3) {
    finalResult.innerHTML = `<span class = "win">"You Win!"</span>`;
    rock.removeEventListener("click", pickRock);//disabling buttons once score reached
    paper.removeEventListener("click", pickPaper);
    scissors.removeEventListener("click", pickScissors);
    document.querySelector('.playAgain').style.display = "block";

  } else if (computerScore === 3) {
    finalResult.innerHTML = `<span class = "lose">You Lose!</span>`;
    rock.removeEventListener("click", pickRock);
    paper.removeEventListener("click", pickPaper);
    scissors.removeEventListener("click", pickScissors);
    document.querySelector('.playAgain').style.display = "block";
  }
};


paper.addEventListener('click', pickPaper)

function pickPaper() {
  let comp = computerPlay()
  if (comp === 'Paper') {
    computerSelection.textContent = "Computer's Selection: Paper";
    result.textContent = "It's a Tie!"
    score.innerHTML = `Your Score: <span class="player-score">${playerScore +=0}</span> Computer Score: <span class="computer-score"> ${computerScore +=0} </span>`
    
  } else if (comp === 'Scissors') {
    computerSelection.textContent = "Computer's Selection: Scissors";
    result.textContent = "Sorry! Scissors beats Paper";
    score.innerHTML = `Your Score: <span class="player-score">${playerScore +=0}</span> Computer Score: <span class="computer-score"> ${computerScore +=1} </span>`
    
  } else if (comp === 'Rock') {
    computerSelection.textContent = "Computer's Selection: Rock";
    result.textContent = "Great Job! Paper beats Rock";
    score.innerHTML = `Your Score: <span class="player-score">${playerScore +=1}</span> Computer Score: <span class="computer-score"> ${computerScore +=0} </span>`
 
  }
  if (playerScore === 3) {
    finalResult.innerHTML = `<span class = "win">"You Win!"</span>`;
    rock.removeEventListener("click", pickRock);
    paper.removeEventListener("click", pickPaper);
    scissors.removeEventListener("click", pickScissors);
    document.querySelector('.playAgain').style.display = "block"

  } else if (computerScore === 3) {
    finalResult.innerHTML = `<span class = "lose">"You Lose!"</span>`;
    rock.removeEventListener("click", pickRock);
    paper.removeEventListener("click", pickPaper);
    scissors.removeEventListener("click", pickScissors);
    document.querySelector('.playAgain').style.display = "block";

  }
};

scissors.addEventListener('click', pickScissors)

function pickScissors() {
  let comp = computerPlay()
  if (comp === 'Scissors') {
    computerSelection.textContent = "Computer's Selection: Scissors";
    result.textContent = "It's a Tie!"
    score.innerHTML = `Your Score: <span class="player-score">${playerScore +=0}</span> Computer Score: <span class="computer-score"> ${computerScore +=0} </span>`
  
  } else if (comp === 'Rock') {
    computerSelection.textContent = "Computer's Selection: Rock";
    result.textContent = "Sorry! Rock beats Scissors";
    score.innerHTML = `Your Score: <span class="player-score">${playerScore +=0}</span> Computer Score: <span class="computer-score"> ${computerScore +=1} </span>`
    
  } else if (comp === 'Paper') {
    computerSelection.textContent = "Computer's Selection: Paper";
    result.textContent = "Great Job! Scissors beats Paper";
    score.innerHTML = `Your Score: <span class="player-score">${playerScore +=1}</span> Computer Score: <span class="computer-score"> ${computerScore +=0} </span>`
  }

  if (playerScore === 3) {
    finalResult.innerHTML = `<span class = "win">"You Win!"</span>`;
    rock.removeEventListener("click", pickRock);
    paper.removeEventListener("click", pickPaper);
    scissors.removeEventListener("click", pickScissors);
    document.querySelector('.playAgain').style.display = "block";

  } else if (computerScore === 3) {
    finalResult.innerHTML = `<span class = "lose">"You Lose!"</span>`;
    rock.removeEventListener("click", pickRock);
    paper.removeEventListener("click", pickPaper);
    scissors.removeEventListener("click", pickScissors);
    document.querySelector('.playAgain').style.display = "block";

  }
};








