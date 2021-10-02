const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput 
    } else {
        console.log('Enter rock, paper or scissors.')
      }
  };
  
  let randomNumber = Math.floor(Math.random() * 3);
  const getComputerChoice = () => {
    
    switch (randomNumber) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
      default:
        return undefined;
        break;
    }
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
      return 'You win! Bomb kills all!'
    }
    if (userChoice === computerChoice){
      return 'The game is a tie!'
    } 
    if (userChoice === 'rock') {
      if(computerChoice === 'paper') {
        return 'Computer wins! Paper covers rock!'} else if(computerChoice === 'scissors'){
          return 'You win! Rock smashes scissors!'
        }
    }
    if (userChoice === 'scissors') {
      if(computerChoice === 'rock') {
        return 'Computer wins! Rock smashes scissors.'} else if(computerChoice === 'paper'){
          return 'You win! Scissors cut paper!'
        }
    }
    if (userChoice === 'paper') {
      if(computerChoice === 'rock') {
        return 'You win! Paper covers rock!'} else if (computerChoice === 'scissors') {
          return 'Computer wins! Scissors cut paper.'
        }
    }
  }
  
  function playGame(){
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();