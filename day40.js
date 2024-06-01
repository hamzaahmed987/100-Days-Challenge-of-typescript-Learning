/*
Question 118: Write a loop that logs numbers from 1 to 10 to the console.
*/
for (var i = 1; i <= 10; i++) {
    console.log(i); // Logs the current value of i
}
/*
Question 119: Create a while loop that logs "Hello, World!" 5 times.
*/
var count = 0;
// This while loop runs until count is 5
while (count < 5) {
    console.log("Hello, World!");
    count++;
}
// Repeats logging "Hello, World!" 5 times, once per loop iteration.
/*
Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.
*/
// Defines an array of favorite movies
var favoriteMovies = [
    "the maze runner",
    "The Matrix",
    "Interstellar",
    "wolf of the wall street",
];
for (var _i = 0, favoriteMovies_1 = favoriteMovies; _i < favoriteMovies_1.length; _i++) {
    var movie = favoriteMovies_1[_i];
    console.log(movie); // Logs each movie name
}
