/**
 * Enums
 * 
 * Enums allow a developer to define a set of named constants. 
 * Using enums can make it easier to document intent, or create a set of distinct cases. 
 * TypeScript provides both numeric and string-based enums.
 */

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
};

const human = {
  name: "Alexandru",
  age: 30,
  hobbies: ["Sports", "Coocking"],
  role: Role.ADMIN
};

if (human.role === Role.ADMIN) {
  console.log('is author');
}