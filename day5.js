/*
// Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// */
// let tranports:string[] = ["Ford Truck","Kawasaki Bike","Hummer H2"];
// tranports.forEach(transport =>{ 
//     console.log(`I would like to own ${tranports}.`);
// });
/*
Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/
// let guests:string[] = ["Sir Asharib","Sir Hamza","Sir Ameen"];
// guests.forEach(
//     guest =>{
//         console.log(`hello ${guest} aj sham ko dawat ha apko`)
//     }
//  )
/*
Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
*/
var guests = ["Kalia", "Shahkala", "Lota", "Kallu Ustaad"];
var cannotAttend = "Kallu Ustaad";
console.log("".concat(cannotAttend, " can't attend the dinner"));
var newGuest = "jack sparrow";
guests[guests.indexOf(cannotAttend)] = newGuest;
console.log("".concat(guests, " would you like to join us"));
