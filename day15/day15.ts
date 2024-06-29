



/*
Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
*/
const magicians3: string[] = ["Hamza", "Ahmed", "Shayan"];

function makeGreat2(magicians: string[]): string[] {
  const greatMagicians: string[] = [];
  for (let i = 0; i < magicians.length; i++) {
    greatMagicians.push(magicians[i] + " the Great");
  }
  return greatMagicians;
}
function showMagicians(magicians: string[]) {
  for (const magician of magicians) {
    console.log(magician);
  }
}
const greatMagicians2: string[] = makeGreat2(magicians3);
showMagicians(magicians3);  
showMagicians(greatMagicians2);


















// /*
// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.
// */

// function make_sandwich(...items:string[]) {
//     console.log(`Making a sandwich with: ${items.join(', ')}.`)
// }
// make_sandwich("ham","cheese");
// make_sandwich("turkey","lattoce","tomato");
// make_sandwich("avocado","sprouts","mayo");
























/*
Question 45: Cars: Create detailed car objects with flexible properties.
*/

interface Car {
    make: string;
    model: string;
    year: number;
    color?: string; 
    mileage?: number;
  }
  
  const car: Car = {
    make: "Honda",
    model: "Civic",
    year: 2022,
    color: "Red",
    mileage: 15000,
  };
  
  console.log(car);
  








