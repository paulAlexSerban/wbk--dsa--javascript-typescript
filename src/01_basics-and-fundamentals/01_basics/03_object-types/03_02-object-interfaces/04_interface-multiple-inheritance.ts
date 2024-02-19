/**
 * Object Types / Object Interfaces
 * ===============================
 * Object types are used to describe the shape of an object.
 */

(() => {
  interface IPerson {
    name: string;
    age: number;
  }

  interface IEmployee {
    id: number;
    email: string;
  }

  // inheritance with interfaces
  interface IEngineer extends IPerson, IEmployee {
    role: string;
    level: number;
    languages: string[];
  }
  const piere: IEngineer = {
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