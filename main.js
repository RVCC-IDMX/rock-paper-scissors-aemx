// Return a random number from 1 to the number of sides passed to it
const dice = sides => Math.ceil(Math.random() * sides);

// Array of choices in the game
const choices = ["rock", "paper", "scissors"];

// Game logic
const rockPaperScissors = human => {

    // Roll d3 for computer's choice
    const cpu = dice(3);

    // Get string detailing the choses made by each player
    let choiceStr = `You picked <b>${choices[human-1]}</b><br>`;
    choiceStr += `The computer picked <b>${choices[cpu-1]}</b><br>`;

    // Check to see who won the game
    // Return a string representing the result and the player choices
    if (human === cpu) {
        // Tie gane
        return `${choiceStr}<b>Tie game!</b>`;
    } else if (((human > cpu) && !(human === 3 && cpu === 1)) || (human === 1 && cpu === 3)) {
        // Human wins
        return `${choiceStr}<b>You win!</b>`;
    } else {
        // Computer wins
        return `${choiceStr}<b>You lose!</b>`;
    }
}

// EventListener function to begin the game on click
window.addEventListener('click', e => {
    for (const [i, v] of choices.entries()) {
        id = document.getElementById(v);
        if (id.contains(e.target)) {
            document.getElementById('result').innerHTML = rockPaperScissors(i+1);
        }
    }
});