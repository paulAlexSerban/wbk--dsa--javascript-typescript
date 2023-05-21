/**
 * Object Types / Object Interfaces
 * ===============================
 * Object types are used to describe the shape of an object.
 */

(() => {
  interface Person {
    name: string;
    age: number;
  }

  interface Employee {
    id: number;
    email: string;
  }

  interface Engineer extends Person, Employee {
    role: string;
    level: number;
    languages: string[];
  }
  const piere: Engineer = {
    name: "Piere",
    age: 30,
    id: 1,
    email: "test@gmail.com",
    role: "Software Engineer",
    level: 2,
    languages: ["JavaScript", "TypeScript", "Python"],
  };

  console.log(piere);

})()