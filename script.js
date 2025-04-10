//Scoreboard
let humanScore = 0;
let computerScore = 0;



//create a function that randomly returns "Rock" "Paper" 'Scissor
//Has to be randomly selected with math.random method 
function getComputerChoice() {

    let a = Math.random() * 3; //randomly selected between 1-3
    Math.floor(a); //rounds the numbers

   if (a <= 1) { //chooses 1, 2 or 3
    let a = "Rock"
    console.log("Rock") 
    return a; //actuall returns the value of a, to be used in the function playRound()
   } else if (a <= 2) {
    let a = "Paper";
    console.log("Paper");
    return a;
   } else if (a <= 3) {
    let a = "Scissors";
    console.log("Scissors");
    return a;
   
   }
 
}

//Create function called getHumanChoice
//Write code so it will return one of the valid choices depending on what the user inputs
//Use prompt method to ask for user input, no validation needed
function getHumanChoice() {
    let userInput = prompt("Rock, Paper, or Scissors?");
    return userInput; 
}



//Play a single round
//Compare computer and human choice
//Display "You lose and their choice"
//Increment either human or computer score
function playRound(humanChoice, computerChoice) {

    if (humanChoice == "Rock" && computerChoice == "Scissors") {
     console.log("You have won!");
     humanScore++;
    } else if (humanChoice == "Scissor" && computerChoice == "Rock") {
     console.log("You have lost! Please try again.");
     computerScore++;
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        console.log("You have lost! Please try again.");
        computerScore++;
    } else if (humanChoice == "Scissor" && computerChoice == "Paper") {
        console.log("You have won!");
        humanScore++;
    } else if (humanChoice == "Scissor" && computerChoice == "Scissors") {
        console.log("It's a tie!");
    } else if (humanChoice == "Rock" && computerChoice == "Rock") {
        console.log("It's a tie!");
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("You have won!");
        humanScore++;
    } else if (humanChoice == "Paper" && computerChoice == "Paper") {
        console.log("It's a tie!");
    } else if (humanChoice == "Paper" && computerChoice =="Scissors") {
        console.log("You have lost!");
        computerScore++;
    }
    console.log("The score is: " + computerScore + " " + humanScore);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanSelection);



//Goal: play 5 rounds and declare a winner
// Define the function: playGame() *Done*
// Be able to play 1 round *Done*
// Be able to determine who is the winner based on  who reached 5 points first
// Keep playing until you determine a winner
//Problem currently: Trying to figure out how to get the game to be played again
function playGame() {
    humanScore = 0;
    computerScore = 0;

    do 
        playRound(humanSelection, computerSelection);

    while(humanScore === 0);
    // let game = playRound(humanSelection, computerSelection);
    // if (humanScore || computerScore === 0) {
    //     return game;
    // } else if (humanScore || computerScore === 1) {
    //     return game;
    // }
    

}
playGame();