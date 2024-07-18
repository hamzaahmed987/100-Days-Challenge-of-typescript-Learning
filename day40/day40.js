/*
Question 118: Write a loop that logs numbers from 1 to 10 to the console.
*/
for (let i = 1; i <= 10; i++) {
    console.log(i); // Logs the current value of i
}
/*
Question 119: Create a while loop that logs "Hello, World!" 5 times.
*/
let count = 0;
// This while loop runs until count is 5
while (count < 5) {
    console.log("Free Palestine");
    count++;
}
// Repeats logging "Hello, World!" 5 times, once per loop iteration.
/*
Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.
*/
// Defines an array of favorite movies
const favoriteMovies = [
    "the maze runner",
    "The Matrix",
    "Interstellar",
    "wolf of the wall street",
];
for (const movie of favoriteMovies) {
    console.log(movie); // Logs each movie name
}
export {};
