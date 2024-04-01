/*
Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.
*/
function findCodePosition(str: string): number {
    return str.indexOf("code"); // Looks for "code" and tells where it found it
}

console.log(findCodePosition("Learn to code with JavaScript")); // Outputs the start position of "code"



/*
Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
*/
function hasJavaScript(str: string): boolean {
    return str.includes("JavaScript"); 
}

console.log(hasJavaScript("I love coding in JavaScript!")); // Outputs true or false based on the check
// It simply says true if "JavaScript" is there, or false if it's not.
console.log(hasJavaScript("I love coding in TypeScript!"));
// It simply says false if "typeScript" is there,




// /*
// Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
// */

// function extractFirstTenChars(str: string): string {
//     return str.substring(0, 10);
// }

// console.log(extractFirstTenChars("Hello, Programminging world!")); 








