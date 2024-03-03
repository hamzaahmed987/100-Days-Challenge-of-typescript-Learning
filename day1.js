//Question 1: Install Node.js, TypeScript and VS Code on your computer/Laptop.
//===> all stuff is already downloaded
//Question 2: Personal Message: Store a person’s name in a variable and print a message to them, like “Hello Asharib, would you like to learn some TypeScript today?”
var hamza = "hamza";
console.log("Hello ".concat(hamza, ", would you like to learn some TypeScript today"));
//Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var person_name = "Hamza";
//lowercase
console.log(person_name.toLowerCase());
//uppercase
console.log(person_name.toUpperCase());
//titlecase
var firstLetter = person_name.charAt(0).toUpperCase();
var restLetters = person_name.slice(1).toLowerCase();
var titleCase = firstLetter + restLetters;
console.log(titleCase);
