/*
Question 130: Explain how to export a function from one JavaScript file and import it into another file.
*/
// from here we export that addition function and can access in another file
export const add = (a, b) => a + b;
/*
Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
*/
// In file: Person.ts
export class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
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
