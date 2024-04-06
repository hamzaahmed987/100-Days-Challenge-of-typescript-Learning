"use strict";
/*
Question 100: Use the JavaScript Math object to find the square root of 144.
*/
const squareRoot = Math.sqrt(144);
console.log(squareRoot);
/*
Question 101: Generate a random integer between 1 and 10.
*/
function getRandomInt() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(getRandomInt());
/*
Question 102: Calculate and log the absolute difference between the number -5 and 5.
*/
const difference = Math.abs(-5 - 5);
console.log(difference);
