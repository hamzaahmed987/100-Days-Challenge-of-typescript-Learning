// /*
// Question 112: Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.
// */
// const countries = new Map<string, string>();
// countries.set("Pakistan", "Washington, D.C.");
// countries.set("USA", "Washington, D.C.");
// countries.set("France", "Paris"); 
// countries.set("Japan", "Tokyo"); 
// console.log(countries);
// /*
// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
// */
// function capitalOfCanada(countries: Map<string, string>): void {
//   if (countries.has("Canada")) {
//     console.log(`The capital of Canada is ${countries.get("Canada")}`);
//   } else {
//     console.log("Canada is not in the Map.");
//   }
// }
// capitalOfCanada(countries);
/*
Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
*/
// Creates a Map to store student IDs (keys) and names (values)
var students = new Map();
students.set(1, "Hamza");
students.set(2, "Ahmed");
students.set(3, "Shayan");
students.forEach(function (name, id) {
    console.log("Student ID: ".concat(id, ", Name: ").concat(name));
});
