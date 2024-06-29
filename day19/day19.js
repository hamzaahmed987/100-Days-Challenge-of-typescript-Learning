"use strict";
// /*
// Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
// */
Object.defineProperty(exports, "__esModule", { value: true });
// let number = [45, 90, 180, 360, 720];
// let doubledNumbers = number.map(number => number * 2);
// console.log(doubledNumbers); 
// /*
// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
// */
// let mixed_array = [1, "one", 2, "two", 3,"three", 4, "four"];
// let stringsArray = mixed_array.filter(item => typeof item === "string");
// console.log(stringsArray); 
/*
Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
*/
let grades = [90, 110, 80, 120, 100];
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;
console.log(averageGrade);
