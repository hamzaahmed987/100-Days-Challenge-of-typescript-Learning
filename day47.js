"use strict";
// /*
// Question 139: List three reserved words in JavaScript and create a valid use case for each.
// */
// let count = 5;
// if (count > 0) {
//   console.log("Count is greater than 0.");
// }
Object.defineProperty(exports, "__esModule", { value: true });
// function add(a:any, b:any) {
//   return a + b;
// }
// /*
// Question 140: Explain the error that occurs when trying to use a reserved word as a variable name.
// */
// let let= "This is an error"; // "let" is a reserved keyword
// // Valid variable names:
// let myVariable = "This is valid";
// let isRunning = true;
/*
Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript.
*/
// Example use of the 'await' reserved word in asynchronous JavaScript
async function fetchData() {
    // Assuming fetchSomething returns a Promise
    const data = await fetchSomething();
    console.log(data);
    // The 'await' keyword pauses the execution until the Promise settles, and then resumes with the resolved value.
}
console.log("The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion.");
function fetchSomething() {
    throw new Error("Function not implemented.");
}
// This demonstrates how 'await' improves readability and flow in asynchronous code.
