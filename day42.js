"use strict";
/*
Question 124: Create a function inside an object that returns the object's own name property using the this keyword.
*/
// const person = {
//     name: "Alice",
//     getName: function () {
//       return this.name; // Uses 'this' to refer to the object itself and return its 'name' property
//     },
//   };
//   console.log(person.getName()); 
/*
Question 125: Modify a method in an object to use the this keyword to access another property in the same object.
*/
// const rectangle0 = {
//     length: 12,
//     width: 16,
//     calculateArea: function () {
//       return this.length * this.width; 
//     },
//   };
//   console.log(rectangle0.calculateArea()); // 192
/*
Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.
*/
class MyClass {
    prop1 = "outer property";
    outerMethod() {
        const nestedFunction = () => {
            console.log(this.prop1); // Accesses "outer property"
        };
        nestedFunction();
    }
}
const myObject = new MyClass();
myObject.outerMethod(); // Output: "outer property"
