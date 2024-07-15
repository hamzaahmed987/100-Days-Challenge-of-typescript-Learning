
 //===========> * INTERSECTION TYPE * <=============\\

type FirstType = {
    name: string;
    age: number;
  };
  
  type SecondType = {
    address: string;
    phone: string;
  };
  
  type CombinedType = FirstType & SecondType;
  
  const person: CombinedType = {
    name: "Hamza Ahmed",
    age: 30,
    address: "1543 Main St",
    phone: "321-123-0987",
  };
  