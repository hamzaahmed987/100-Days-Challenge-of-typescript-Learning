// /*
// Question 82: Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.
// */
// function stringLength(str: string): number {
//     return str.length; // Returns the number of characters in the string
// }
// console.log(stringLength("Khamzat"));
// /*
// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
// */
// // This function changes a string to uppercase and then to lowercase
// function convertCase(cases: string) {
//     let uppercase = cases.toUpperCase(); 
//     let lowercase = cases.toLowerCase(); 
//     console.log("Uppercase:", uppercase, "Lowercase:", lowercase);
// }
// convertCase("Hamza"); 
/*
Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".
*/
function replaceJavaScriptWithTypeScript(sentence) {
    return sentence.replace(/JavaScript/g, "TypeScript");
}
// Example: Changing a programming language name in a sentence
console.log(replaceJavaScriptWithTypeScript("I love JavaScript and JavaScript is awesome!"));
export {};
