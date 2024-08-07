// /*
// Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
// */
// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//       continue; 
//     }
//     console.log(i);
//   }
// /*
// Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5
// */
// let counter: number = 10;
// // This while loop counts down from 10 to 1 and stops at 5
// while (counter > 0) {
//   if (counter === 5) {
//     break; // Exits the loop when counter reaches 5
//   }
//   console.log(counter);
//   counter--; 
// }
/*
// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
// */
function logUntilVowel(str) {
    const vowels = "aeiouAEIOU";
    for (const char of str) {
        if (vowels.includes(char)) {
            console.log(`First vowel found: ${char}`);
            break;
        }
        console.log(char);
    }
}
logUntilVowel("iouy");
export {};
