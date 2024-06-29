"use strict";
// /*
// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
// */
// function listHobbies(...hobbies: string[]): void {
//     for (const hobby of hobbies) {
//       console.log(`I enjoy ${hobby}`);
//     }
//   }
//   listHobbies("reading", "coding", "boxing");
Object.defineProperty(exports, "__esModule", { value: true });
/*
Question 50: Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.
*/
function describeIdealDay() {
    return `My ideal day :
    Rise with the sun, meditate, and enjoy a healthy breakfast.
    Adventure awaits! Explore nature with a hike or tackle a creative project.
    Wind down with loved ones, savor a delicious meal, and reflect on a fulfilling day.`;
}
console.log(describeIdealDay());
// /*
// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
// */
// function calculateArea(width: number, height: number): number {
//     return width * height;
// }
// let calculateAreaArrow = (width: number, height: number): number => width * height;
// console.log(calculateAreaArrow(3, 9)); 
