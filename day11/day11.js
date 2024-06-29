"use strict";
/*
Question 31: No Users: Ensure your user list isn’t empty.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let usernames = [];
if (usernames.length === 0) {
    console.log("They neeed users");
}
else {
    console.log("Welcome here");
}
/*
Question 32: Checking Usernames: Ensure uniqueness in usernames.
*/
let old_users = ["hamza", "ahmed", "ameen", "asharib", "hamzah"];
let new_users = ["danial", "ali", "qasim", "hunain"];
new_users.forEach(new_users => {
    if (old_users.some(old_users => old_users.toLocaleLowerCase() === new_users.toLowerCase())) {
        console.log(`${new_users} will need a new username.`);
    }
    else {
        console.log(`${new_users} is availble`);
    }
});
/*
Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
*/
// let numbers:number[] = [1,2,3,4,5,6,7,8,9];
// numbers.forEach(number =>{
//     let suffixes = "th";
//     if(number === 1){
//         suffixes = "St";
//     } else if (number === 2){
//         suffixes = "nd";
//     } else if(number === 3) {
//         suffixes = "rd";
//     }
//     console.log(`${number}${suffixes}`)
// });
