//create a function that randomly returns "Rock" "Paper" 'Scissor
//Has to be randomly selected with math.random method 
function getComputerChoice() {

    let a = Math.random() * 3; //randomly selected between 1-3
    Math.floor(a); //rounds the numbers

   if (a <= 1) { //chooses 1, 2 or 3
    console.log("Rock");
   } else if (a <= 2) {
    console.log("Scissors")
   } else if (a <= 3) {
    console.log("Paper");
   }

   return a; //returns either rock, paper, or scissor
}

//Create function called getHumanChoice
//Write code so it will return one of the valid choices depending on what the user inputs
//Use prompt method to ask for user input, no validation needed
function getHumanChoice() {
    let userInput = prompt("Rock, Paper, or Scissors?");
}


getComputerChoice();