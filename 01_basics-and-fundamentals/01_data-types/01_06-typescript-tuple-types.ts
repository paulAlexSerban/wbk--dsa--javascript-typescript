/**
 * Tuple Types
 * ===========
 * Tuple types allow you to express an array where the type of a fixed number of elements is known,
 * but need not be the same.
 * 
 * A Tuple is a special construct TypeScript offers to express an array with a fixed number of elements whose types are known,
 */

(() => {
  const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // Tuple Type
  } = {
    name: "John",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
  };

  // person.role.push("admin"); // TS will throw an error
  // person.role[1] = 10; // TS will throw an error
  // person.role = [0, "admin", "user"]; // TS will throw an error
  person.role = [0, "admin"]; // TS will not throw an error

})()