// Return a random number from 1 to the number of sides passed to it
const dice = sides => Math.ceil(Math.random() * sides);

// Array of choices in the game
const choices = ["rock", "paper", "scissors"];

// Capitalizes the first letter of a string
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

// Game logic
const rockPaperScissors = human => {

    // Roll d3 for computer's choice
    const cpu = dice(3);

    // Get resulting object chosen by player and CPU
    const playerPiece = choices[human-1];
    const cpuPiece = choices[cpu-1];

    // Set sprites inside the screen
    document.getElementById("player-piece").src = `img/${playerPiece}.png`;
    document.getElementById("cpu-piece").src = `img/${cpuPiece}.png`;

    // Check to see who won the game
    // Return a string representing the result and the player choices
    if (human === cpu) {
        // Tie gane
        return [`Both players chose ${playerPiece}.`, "Tie game!"];
    } else if (((human > cpu) && !(human === 3 && cpu === 1)) || (human === 1 && cpu === 3)) {
        // Human wins
        return [`${capitalize(playerPiece)} beats ${cpuPiece}.`, "You win!"];
    } else {
        // Computer wins
        return [`${capitalize(cpuPiece)} beats ${playerPiece}.`, "You lose!"];
    }
}

// EventListener function to begin the game on click
window.addEventListener('click', e => {
    for (const [i, v] of choices.entries()) {
        id = document.getElementById(v);
        if (id.contains(e.target)) {
            const [description, result] = rockPaperScissors(i+1);
            document.getElementById('result-desc').innerHTML = description;
            document.getElementById('result').innerHTML = result;
        }
    }
});