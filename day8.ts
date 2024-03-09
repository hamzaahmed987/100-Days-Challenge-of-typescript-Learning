










/*
Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.
*/

let myFriends:string[] =["peer","Ahmed","shayan"];
myFriends[7]; // index 7 is out of bond
console.log(myFriends[2]); //correcting the error

  




























/*
Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.
*/

let Bike = "KTM";
console.log("is bike === 'KTM'? I  predict True.");
console.log(Bike === 'KTM');

console.log("is bike == 'Ninja'? predict False.")
console.log(Bike == 'Ninja')


let isloggedIn = "Facebook";
console.log("loggedin == Facebook? yes I'm logged in");
console.log(isloggedIn === "Facebook");

console.log("loggedin == Facebook?  I'm not logged in facebook");
console.log(isloggedIn === "Instagram");

let isMember = "true";
console.log("isMember === true? Yes he is member");
console.log(isMember === "true");
console.log("isMember === true?  HE is not a member");
console.log(isMember === "false");

let score = "16";
console.log("Scores === 16? I predict true");
console.log(score === "true");
console.log("Scores === 16? I predict false");
console.log(score === "false");

let age = "19";
console.log("age === 19? I predict true");
console.log(age === "true");
console.log("age === 16? I predict false");
console.log(age === "false");








/*
Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
*/

//Equality with strings
console.log("Testing equality with strings");
console.log(Bike == "KTM" );
console.log(Bike =="ktm" );

// using lowercase function
console.log("TEsting with lowerCase");
console.log(Bike.toLowerCase() == "bike")

//Numericals Test
console.log("Numerical Test");
console.log(7>4); //true
console.log(12.3<4.5);  //false

// Test Testing

console.log("Tests with'and' and 'or'");
console.log(true&&false);
console.log(true ,false);






















