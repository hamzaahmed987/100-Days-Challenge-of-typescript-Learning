"use strict";
/*
Question 127: Convert a traditional function expression to an arrow function.
*/
// Traditional function expression
const traditionalFunction = function (a, b) {
    return a + b;
};
// Converted to arrow function
const arrowFunction = (a, b) => a + b;
console.log(traditionalFunction(5, 3)); // Outputs: 8
console.log(arrowFunction(5, 88)); // Outputs: 8
/*
Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.
*/
const multiplyParameters = (...numbers) => numbers.reduce((total, number) => total * number, 1);
console.log(multiplyParameters(6, 5, 10)); // Outputs: 24
/*
Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
*/
const traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("Traditional function:", this.value);
    },
    arrowFunction: () => {
        // Use an explicit 'this' binding (optional, but recommended for clarity)
        console.log("Arrow function:", traditionalVsArrow.value);
    },
};
traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction();
// const traditionalVsArrow = {
//     value: "traditionalVsArrow value",
//     traditionalFunction: function () {
//       console.log("Traditional function:", this.value); 
//     },
//     arrowFunction: () => {
//       console.log("Arrow function:", this.value); 
//     },
//   };
//   traditionalVsArrow.traditionalFunction();
//   traditionalVsArrow.arrowFunction(); 