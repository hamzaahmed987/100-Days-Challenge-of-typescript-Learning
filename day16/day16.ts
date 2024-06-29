// /*
// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
// */
// class Laptop1 {
//   make: string;
//   model: string;
//   year: number;

//   constructor(make: string, model: string, year: number) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

//   describe(): void {
//     console.log(`This is a ${this.year} ${this.make} ${this.model} laptop.`);
//   }
// }

// const laptop = new Laptop1("Dell", "XPS 13", 2022);
// laptop.describe();







// /*
// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
// */

// interface Laptop {
//     make: string;
//     model: string;
//     year: number;
//   }
  
//   const laptops: Laptop[] = [
//     { make: "Apple", model: "MacBook Pro", year: 2023 },
//     { make: "Dell", model: "XPS 13", year: 2022 },
//   ];
  
//   const [firstLaptop, secondLaptop] = laptops;
  
//   console.log("First Laptop:", firstLaptop);
//   console.log("Second Laptop:", secondLaptop);
  



//Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
interface Laptopp {
    make: string;
    model: string;
    year: number;
    price: number;
  }
  const laptops1: Laptopp[] = [
    { make: "Apple", model: "MacBook Pro", year: 2023, price: 1800 },
    { make: "Dell", model: "XPS 13", year: 2022, price: 1200 },
  ];
  const laptops2: Laptopp[] = [
    { make: "Lenovo", model: "ThinkPad X1 Carbon", year: 2021, price: 1500 },
    { make: "Asus", model: "ROG Zephyrus", year: 2022, price: 2000 },
  ];
  // Combine arrays using spread operator
  const allLaptops = [...laptops1, ...laptops2];
  
  // Sort allLaptops by price in ascending order
  allLaptops.sort((a, b) => a.price - b.price);
  
  console.log("All Laptops sorted by price (ascending):", allLaptops);
  