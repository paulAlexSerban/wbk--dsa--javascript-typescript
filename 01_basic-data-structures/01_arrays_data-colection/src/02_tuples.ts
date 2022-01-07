/**
 * Tuple - TypeScript specific type
 * - it is a fixed length array
 * - are marked in the object type with [number, string]
 * - tuples are useful an exact amount of values in an array
 */

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Alexandru",
  age: 30,
  hobbies: ["Sports", "Coocking"],
  role: [2, "author"],
};

console.log()