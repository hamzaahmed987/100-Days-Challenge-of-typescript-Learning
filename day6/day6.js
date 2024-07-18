/*
Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
*/
// let guests : string[] = ["Hamza","Ameen","Danial"];
// console.log("I found big dinner table");
// //adding more mehmaan
// guests.unshift("Ali bhai");
// guests.splice(guests.length / 2,0, "Ahmed");
// guests.push("Hunain bhai")
// guests.forEach(
//     guests => {
//         console.log(`${guests} would you like to join us`);
//     }
// );
/*
Question 17:Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
*/
// let guests : string[] = ["Hamza","Ameen","Danial"];
// console.log("Unfortunately due to some reasons I can only invite two people");
// while ( guests.length > 2 ){
//         let removedguests = guests.pop();
//         console.log(`sorry ${removedguests} I can't invite you to dinner.`);
//     }
//     guests.forEach(guest =>{
//         console.log(`Dear ${guest}, you are still invited`);
//     });
//     guests.splice(0,guests.length);
//     console.log(guests);
/*
Question 18: Seeing the World: Think of at least five places you’d like to visit.
*/
let places = ["Iraq", "Kashmir", "Libya", "Palestine", "Yamen"];
console.log("original order:", places);
console.log("Alphabetical order:", [...places].sort());
console.log("original order", places);
console.log("Reverse Alphabetical order:", [...places].sort().reverse());
console.log("original order", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Reversed order:", places); //  <== check kr
places.sort();
console.log("original order", places);
places.reverse();
console.log("Reverse Alphabetical order:", places);
export {};
