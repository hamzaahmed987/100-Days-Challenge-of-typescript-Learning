"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
console.log((0, index_1.add)(9, 9)); // Outputs: 18
//131
// In another file:
const index_2 = require("./index");
const hamza = new index_2.Person("Khamzat");
hamza.greet(); // Outputs: Hello, my name is Khamzat
// This code illustrates the syntax and usage differences between default and named exports.
