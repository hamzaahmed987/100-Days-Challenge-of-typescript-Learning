## Type Annotations With Objects

Type annotations with objects in TypeScript allow you to specify the types of properties that an object should have.

```tsx
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
    street: "4453 Main St",
    city: "City of Lights",
  },
};
```

Another method

```tsx
// Define an object type with type annotations
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
    street: "4453 Main St",
    city: "City of Lights",
  },
};
```

we're defining an object named **`person2`** with specific type annotations for its properties:

- **`name`** is a required string property for the person's name.
- **`age`** is a required number property for the person's age.
- **`jobTitle`** is an optional string property for the person's job title, indicated by **`jobTitle?: string`**.
- **`address`** is an object with two required properties: **`street`** (string) and **`city`** (string).

We initialize **`person2`** with specific values for each property. Later in the code, we modify some properties. Finally, we use **`console.log`** to display the property values of **`person2`**.
