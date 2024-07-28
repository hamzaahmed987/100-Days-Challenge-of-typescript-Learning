//=========> INTERFACE VS. TYPE ALIASES <=========\\
class Labrador {
    type = "dog";
    bark() {
        console.log("Woof!");
    }
}
const labrador = {
    type: "monkey",
    bark() {
        console.log("Woof!");
    },
};
const myCar = {
    brand: "Toyota",
    model: "Camry",
};
export {};
