
 //===========> * TYPE ALIAS * <=============\\n ,

type MyString = string;

let myName: MyString = "Hamza";

type MyStringOrNumber = string | number;

let myValue: MyStringOrNumber = 10;

// another example
type Employee = {
  name: string;
  age: number;
  email?: string;
};

const khamzat: Employee = {
  name: "Khamzat",
  age: 30,
  email: "khamzat@example.com",
};

const hamzah: Employee = {
  name: "Hamzah",
  age: 25,
};

console.log(khamzat);
console.log(hamzah);