// Initialize scores for player and computer
let playerScore = 0;
let computerScore = 0;
// Initialize choices for the game
const choices = ['Rock', 'Paper', 'Scissors']

// Function to simulate one round of a game 
function playRound(playerChoice){
    // Get the computer's choice using the getComputerChoice() function
    const computerChoice = getComputerChoice();
    // Get the winner of the game using the getWinner() function 
    const winner = getWinner(computerChoice, playerChoice);

    // Determine score based on winner of the round
    if (winner === 'Player') {
        playerScore++;
    } else if (winner === 'Computer') {
        computerScore++;
    }

    // Log results 
    console.log(`Player Chose: ${playerChoice}`);
    console.log(`Computer Chose: ${computerChoice}`);
    console.log(`Winner: ${winner}`);
    console.log(`Score: Player ${playerScore} - Computer ${computerScore}`);
}

// Function to randomly select the computer's choice for the round
function getComputerChoice(){
    const randIndex = Math.floor(Math.random() * 3);
    return choices[randIndex];
}

// Function to get the winner of 1 round 
function getWinner(computerChoice, playerChoice){
    if (computerChoice == playerChoice){
        return 'Draw';
    }
    if ((playerChoice === 'Rock' && computerChoice === 'Scissors')||
        (playerChoice === 'Paper' && computerChoice === 'Rock')||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')){
            return 'Player';
        }
        else{
            return 'Computer';
        }
}

// Testing 
playRound('Rock');  // Test the function with the player choosing 'Rock'
playRound('Paper'); // Test the function with the player choosing 'Paper'
playRound('Scissors'); // Test the function with the player choosing 'Scissors'