"use strict";
/*
Question 133: Write a JavaScript object and convert it into a JSON string.
*/
// Defines a JavaScript object
const person = {
    name: "Khamzat",
    age: 17,
    city: "Karachi",
};
// Converts the object into a JSON string
const jsonString = JSON.stringify(person);
console.log(jsonString); // Outputs: {"name":"Khamzat","age":17,"city":"Karachi"}
// Demonstrates converting an object to a JSON string, making it easy to store or transmit.
/*
Question 134: Take a JSON string and parse it into a JavaScript object.
*/
// Defines a JSON string
const jsonString1 = '{"name":"Hamza","age":15,"city":"Kolachi"}';
// Parses the JSON string back into a JavaScript object
const person1 = JSON.parse(jsonString1);
console.log(person1); // Outputs the original object
// This snippet shows how to take a JSON string and convert it back into a JavaScript object.
/*
Question 135: Explain how you can format a JSON string with proper indentation for readability.
*/
const data = {
    name: "hamzaa",
    age: 16,
    city: "karachI",
    interests: ["reading", "Coding", "MMA"],
};
// Formatting the JSON string with indentation
const Json = JSON.stringify(data, null, 4);
console.log(Json);
