/*
  Question 1: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
 "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
*/
var myQuote = "Muhammad Ali once said, \"I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.";
console.log(myQuote);
/*
 Question 2: Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
*/
var famous_person = "Muhammad Ali";
var quote = "“I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.";
console.log("".concat(famous_person, " once said ").concat(quote));
/*
Question 3: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.
*/
//  whitespace at beginning and in end
var myName = "   Hamza   ";
console.log(myName);
// \t
var mysecondName = "\tAhmed";
console.log(mysecondName);
//  \n
var my_Name = "\nHamza";
console.log(my_Name);
//console.log(my_Name.trim());
var myWords = "one pashtoon once said, \"jar laka da maar\"";
console.log(myWords);
var arthor = "lola";
var poet = " warka dank o kena pa badra*g";
console.log("".concat(arthor, " once said, ").concat(poet));
var spaces = "       sapacee       ";
console.log(spaces);
var meraNaam = "\thamzaaa";
console.log(meraNaam);
var endName = "\nAhmed";
console.log(endName);
