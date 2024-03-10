/*
Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.
*/

//  Program1
// (comment) here we are writing our favourite number

//declaring variable here
let favNum:number = 7;
// printing result hre
console.log(`My favourite number is ${favNum}`);

//  Program2
//  (comment2) famous quote of Aristotle

// declaring variable and initializing Aristotle
var famous_person = "Aristotle";
//declaaring another variable for message
var quote = "“Education is bitter, but its fruit is sweet.”"
//printin quote here
console.log(`${famous_person} once said, ${quote}`);





/*
Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.
*/

//array
let friends : string[] = ["Hamza Ahmed","Hamzah Syed","Asharib Ali"];
friends.forEach(Element =>
    {console.log(Element)}
    ) 




/*
Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
*/

let my_friends : string[] = ["Ameen Alam","Hamzah Syed","Asharib Ali"];
friends.forEach(Element =>
    {console.log("Salaam " + Element)}
    ) 






































































