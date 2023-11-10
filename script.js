    // Get computer's choice
    function getComputerChoice() {
      const choices = ['rock', 'paper', 'scissors'];
      const randomIndex = Math.floor(Math.random() * 3);
      return choices[randomIndex];
    }

    let computerChoice = getComputerChoice();

    // Selecting the selection buttons
    const rockButton = document.querySelector('.rock-button');
    const paperButton = document.querySelector('.paper-button');
    const scissorsButton = document.querySelector('.scissors-button');

    // Selecting result contents and then creating 3 divs for displaying the result, score, winner and a restart button
    const resultContents = document.querySelector('.result-contents');
    const result = document.createElement('div');
    const score = document.createElement('div');
    const winner = document.createElement('div');
    const restart = document.createElement('button');

    // Structuring the display of the result section containing the result, score, winner and restart buttton
    resultContents.appendChild(result);
    resultContents.appendChild(score);
    resultContents.appendChild(winner);
    restart.textContent = 'Restart';

    // Adding class names for styles
    resultContents.className = 'result-contents';
    result.className = 'result';
    score.className = 'score';
    winner.className = 'winner';
    restart.className = 'restart';

    let userScore = 0;
    let computerScore = 0;

    // This function is called when any of the selection button is clicked
    function playRound(playerSelection, computerSelection) {

      if (playerSelection === computerSelection) {
        result.textContent = "It's a tie!";
      }
      else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
      ) {
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        userScore++;
      }
      else {
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
      }

      function updateScore() {
        score.textContent = `You - ${userScore}  |  Computer - ${computerScore}`;
      }

      function resetScore() {
        userScore = 0;
        computerScore = 0;
        updateScore();
        result.textContent = "";
        winner.textContent = "";
        resultContents.removeChild(restart);
      }

      function checkWinner() {
        if (userScore === 5) {
          winner.textContent = "You win the game!";
          resultContents.appendChild(restart);
          restart.addEventListener('click', resetScore);
        }
        else if (computerScore === 5) {
          winner.textContent = "You lose :( Computer wins the game!";
          resultContents.appendChild(restart);
          restart.addEventListener('click', resetScore);
        }
      }

      updateScore();
      checkWinner();
    }

    rockButton.addEventListener('click', () => playRound('rock', computerChoice));
    paperButton.addEventListener('click', () => playRound('paper', computerChoice));
    scissorsButton.addEventListener('click', () => playRound('scissors', computerChoice));