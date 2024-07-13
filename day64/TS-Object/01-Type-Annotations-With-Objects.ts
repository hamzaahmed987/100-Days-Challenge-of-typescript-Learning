
//==================> * TYPE ANNOTATIONS WITH OBJECTS * <=================\\


let person: {
    name: string;
    age: number;
    jobTitle?: string;
    address: {
      street: string;
      city: string;
    };
  };
  
  person = {
    name: "Hamza",
    age: 30,
    jobTitle: "Software Engineer",
    address: {
      street: "4534 Main St",
      city: "city of Lights",
    },
  };
    
  // another method
  let person2: {
    name: string;
    age: number;
    jobTitle?: string;
    address: {
      street: string;
      city: string;
    };
  } = {
    name: "Khamzat",
    age: 30,
    jobTitle: "Software Engineer",
    address: {
      street: "4435 Main St",
      city: "city of Lights",
    },
  };
  