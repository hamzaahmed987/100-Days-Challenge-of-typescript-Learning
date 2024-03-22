// /*
// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
// */

// // Making a list (enum) for different types of vehicles
// enum VehicleType {
//     Car,
//     Boat,
//     Motorcycle
// }

// console.log(VehicleType.Boat); 

// /*
// Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.
// */

// interface Student {
//     name: string;
//     age: number;
//     courses: string[];
// }

// let student: Student = {
//     name: "Hamza Ahmed",
//     age: 22,
//     courses: ["Math", "PST", "Islamiat"]
// };

// console.log(student);


/*
Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
*/

type Shape = {
    kind: "circle" | "rectangle";
    radius?: number; // Only for circles
    width?: number; // Only for rectangles
    height?: number; // Only for rectangles
};

let circle: Shape = {
    kind: "circle",
    radius: 5
};


let rectangle: Shape = {
    kind: "rectangle",
    width: 12,
    height: 24
};

console.log(circle); 
console.log(rectangle); 












