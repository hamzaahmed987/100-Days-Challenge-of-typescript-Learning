// /*
// Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".
// */
// function stringAndNumber(text: string, number: number): string {
//     return text + number;
// }

// console.log(stringAndNumber("Age: ", 30));





// /*
// Question 65: Determine the Reminder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign. For example, remainder(5, 2) should give 1.
// */
// function remainder(num1: number, num2: number): number {
//     return num1 % num2;
// }

// console.log(remainder(5, 2)); 
// console.log(remainder(10, 4)); 
// console.log(remainder(10, 5));








/*
Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.
*/
function checkBothTrue(value1: boolean, value2: boolean): boolean {
    return value1 && value2;
}

console.log(checkBothTrue(true, false)); 
console.log(checkBothTrue(true, true)); 
console.log(checkBothTrue(false, false)); 
console.log(checkBothTrue(false, false)); 
console.log(checkBothTrue(1<2 ,2>3)); 
console.log(checkBothTrue(1>0, 1>0)); 