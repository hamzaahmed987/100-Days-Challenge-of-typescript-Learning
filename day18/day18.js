// /*
// Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
// */
// let smartphone = {
//     make: "Google",
//     model: "Pixel 4",
//     specs: {
//         storage: "64",
//         screenSize: "5.7",
//         batteryLife: "24"
//     }
// };
// console.log(smartphone);
/*
Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
*/
// A list showing a programmer's skills in detail
let developerSkills = {
    languages: ["java", "TypeScript", "Python"],
    tools: ["Git", "VSC", "Docker"],
    frameworks: ["yii", "laravel", "Node.js"]
};
// Getting specific skills from the list
let { languages, frameworks, tools } = developerSkills;
// Showing a skill from each category
console.log(`Language: ${languages}, Framework: ${frameworks}, Tool: ${tools}`);
export {};
// /*
// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
// */
// type FlexibleObject = { [key: string]: any };
// function createFlexibleObject(defaultData: FlexibleObject = {}): [FlexibleObject, (key: string, value: any) => void, (key: string) => any] {
//   const data: FlexibleObject = { ...defaultData };
//   const setKey = (key: string, value: any) => {
//     data[key] = value;
//   };
//   const getKey = (key: string) => data[key];
//   return [data, setKey, getKey];
// }
// const [myData, setKey, getKey] = createFlexibleObject({ name: "Hamza", age: 17 });
// setKey("occupation", "Software Engineer");
// setKey("city", "Karachi");
// const fullName = getKey("name");
// const occupation = getKey("occupation");
// const age = getKey("age")
// console.log(`Name: ${fullName}, Occupation: ${occupation}, age: ${age}`);
