/*
Random number generator

When this function is called, it returns a random number from 1 to the number of sides passed to it.
*/
function dice(sides) {
    return Math.ceil(Math.random() * sides);
}

/*
    Game function

    It takes a single argument: humanChoice
    1 = rock
    2 = paper
    3 = scissors

    When this function is called, it:
    1) Makes the computer choose its position
    2) Determines who wins
    3) Displays the play of the game
    
*/
function rockPaperScissors(humanChoice) {

    var choiceName = ["Rock","Paper","Scissors"];

    //STEP 1:
    //Determine a random choice for the computer
    //1 is rock
    //2 is paper
    //3 is scissors
    var computerChoice;

    //This boolean value represents if the human won
    var humanWins = false;

    //This boolean value represents if there's a tie
    var tied = false;

    //STEP 2:
    //Check to see who won and set humanWins & tied
    //You'll need to build additional if statements
    // if () {}

    //STEP 3:
    //Build a string to display the results of the game
    //Put it in the end variable
    //It should include:
    //    a) What you chose
    //    b) What the computer chose
    //    c) Whether you won or not
    //You may need if statements somewhere around this task
    var end;

    //STEP 4:
    //Reach out into the DOM with getElementById() and insert the end into the result div.

}

//This code links in the Rock button so that when it's clicked it fires off the game.
document.getElementById("rock").onclick = () => {
    rockPaperScissors(1);
};

//STEP 5:
//Below, link up the other two buttons with an EventListener so that the user can click on them and activate the game.    