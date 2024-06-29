"use strict";
/*
Question 130: Explain how to export a function from one JavaScript file and import it into another file.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = exports.add = void 0;
// from here we export that addition function and can access in another file
const add = (a, b) => a + b;
exports.add = add;
/*
Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
*/
// In file: Person.ts
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
exports.Person = Person;
// Exports the Person class
/*
Question 132: Discuss the difference between default and named exports in JavaScript modules.
*/
// export default class Calculator {
//     // Class definition
//   }
//   // Named export example in file: utils.ts
// export const utilOne = () => {
//     /*...*/
//   };
//   export const utilTwo = () => {
//     /*...*/
//   };
