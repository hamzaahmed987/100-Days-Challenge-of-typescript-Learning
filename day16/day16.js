"use strict";
// /*
// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
// */
// class Laptop1 {
//   make: string;
//   model: string;
//   year: number;
Object.defineProperty(exports, "__esModule", { value: true });
const laptops1 = [
    { make: "Apple", model: "MacBook Pro", year: 2023, price: 1800 },
    { make: "Dell", model: "XPS 13", year: 2022, price: 1200 },
];
const laptops2 = [
    { make: "Lenovo", model: "ThinkPad X1 Carbon", year: 2021, price: 1500 },
    { make: "Asus", model: "ROG Zephyrus", year: 2022, price: 2000 },
];
// Combine arrays using spread operator
const allLaptops = [...laptops1, ...laptops2];
// Sort allLaptops by price in ascending order
allLaptops.sort((a, b) => a.price - b.price);
console.log("All Laptops sorted by price (ascending):", allLaptops);
