/*
Question 31: No Users: Ensure your user list isn’t empty.
*/
var usernames = [];
if (usernames.length === 0) {
    console.log("They neeed users");
}
else {
    console.log("Welcome here");
}
/*
Question 32: Checking Usernames: Ensure uniqueness in usernames.
*/
var old_users = ["hamza", "ahmed", "ameen", "asharib", "hamzah"];
var new_users = ["danial", "ali", "qasim", "hunain"];
new_users.forEach(function (new_users) {
    if (old_users.some(function (old_users) { return old_users.toLocaleLowerCase() === new_users.toLowerCase(); })) {
        console.log("".concat(new_users, " will need a new username."));
    }
    else {
        console.log("".concat(new_users, " is availble"));
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
