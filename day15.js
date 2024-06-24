"use strict";
/*
Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
*/
const magicians3 = ["Hamza", "Ahmed", "Shayan"];
function makeGreat2(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + " the Great");
    }
    return greatMagicians;
}
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const greatMagicians2 = makeGreat2(magicians3);
showMagicians(magicians3);
showMagicians(greatMagicians2);
const car = {
    make: "Honda",
    model: "Civic",
    year: 2022,
    color: "Red",
    mileage: 15000,
};
console.log(car);
