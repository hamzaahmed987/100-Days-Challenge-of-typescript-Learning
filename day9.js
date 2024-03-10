/*
Question 25: Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red' to a variable called alien_color.
*/
var alien_color;
// Assign a random color (optional)
alien_color = Math.random() > 0.5 ? "green" : "yellow"; // Chooses green or yellow
alien_color = "green"; // Direct assignment
console.log("The alien's color is ".concat(alien_color));
/*
Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.
*/
var alienColor = "red";
if (alienColor == "red") {
    console.log("you just earned 5 points!");
}
else {
    console.log("earned nothing");
}
/*
Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.
*/ 
