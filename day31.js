"use strict";
// /*
// Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.
// */
// let favoriteFruitts: string[] = ["Apple", "Banana", "Cherry"];
// favoriteFruitts.push("Watermelon"); // Adds "Watermelon" to the end of the array
// console.log(favoriteFruitts); 
// /*
// Question 92: Write a function to remove the last element from an array and return the removed element.
// */
// function removeLastElement<T>(arr: T[]): T | undefined {
//     return arr.pop();
// }
// const fruits: string[] = ["Apple", "Banana", "Cherry"];
// console.log(removeLastElement(fruits));
// console.log(fruits); 
/*
Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
*/
function replaceBananaWithMango(fruits) {
    const index = fruits.indexOf("Banana");
    if (index !== -1)
        fruits[index] = "Mango";
}
// Example: Replacing "Banana" in the array
const fruitts = ["Kiwi", "Freshmelon", "Banana"];
replaceBananaWithMango(fruitts);
console.log(fruitts);
