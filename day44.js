"use strict";
// /*
// Question 130: Explain how to export a function from one JavaScript file and import it into another file.
// */
// // In another file where you want to use the add function:
// import { add } from "./mathFunction";
// console.log(add(2, 3)); // Outputs: 5
// // Demonstrates importing the add function from mathFunctions.ts and using it.
// /////  make anothe file for it from where you will import it
// // In file: mathFunctions.ts
// // export const add = (a: number, b: number): number => a + b;
// // // This line exports an add function from mathFunctions.ts
// /*
// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
// */
// // In another file:
// import { Person } from "./Person";
// const alice = new Person("Alice");
// alice.greet(); // Outputs: Hello, my name is Alice
// // This snippet imports the Person class and uses it to create an instance.
// /////  make anothe file for it from where you will import it
// // // In file: Person.ts
// // export class Person {
// //     name: string;
// //     constructor(name: string) {
// //       this.name = name;
// //     }
// //     greet() {
// //       console.log(`Hello, my name is ${this.name}`);
// //     }
// //   }
// //   // Exports the Person class
// /*
// Question 132: Discuss the difference between default and named exports in JavaScript modules.
// */
// ////////////////////     eeeeee kia ha
// // Importing named exports:
// import { utilOne, utilTwo } from "./utils";
// // Importing a default export:
// import Calculator from "./Calculator";
// // This code illustrates the syntax and usage differences between default and named exports.
