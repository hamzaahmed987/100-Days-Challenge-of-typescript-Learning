"use strict";
/*
Question 37: Large Shirts: Default values in make_shirt().
*/
// let makeShirt = (size: string = "large", message: string = "Experience is the name everyone gives to their mistakes.") => {
//     console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
// }
Object.defineProperty(exports, "__esModule", { value: true });
// makeShirt();  
/*
Question 38: Cities: Describing cities with a function.
*/
//           HERE IS ALS SIMPLE CODE
//interface City {
//     name: string;
//     country: string;
//     knownFor?: string[]; 
//   }
//   function describeCity(city: City): void {
//     const knownForString = city.knownFor ? `known for ${city.knownFor.join(", ")}` : "";
//     console.log(`${city.name} is a city in ${city.country}. ${knownForString}`);
//   }
//   const karachi: City = {
//     name: "Karachi",
//     country: "Pakistan",
//     knownFor: ["City of Lights"]
//   };
//   const lahore: City = {
//     name: "Lahore",
//     country: "Pakistan",
//     knownFor: ["cultural capital"]
//   };
//   describeCity(karachi);
//   describeCity(lahore);
// interface city{
//     name:string;
//     country:string;
//     knownFor:string;
// }
// function describecities(city:city):void {
//     console.log(``)
// }
// const karachi:city={
//     name :"karachi",
//     country:"Pakistan",
//     knownFor:"city of lights"
// };
// const lahore:city={
//     name :"lahore",
//     country:"Pakistan",
//     knownFor:"cultural capital"
// };
// describecities(karachi);
// describecities(lahore);
/*
Question 39: City Names: Formatting city-country pairs.
*/
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
