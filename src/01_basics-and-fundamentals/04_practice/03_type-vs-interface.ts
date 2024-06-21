/**
 * `type` and `interface` are used to define custom types and to define the structure of an object, but they are used slightly in different ways.
 */

(() => {
  /**
   * Defining Interfaces
   * You can define an interface with properties and methods, and then use that interface to type-check a class.
   */
  interface User {
    id: number;
    name: string;
    getEmail: () => string;
  }

  class Customer implements User {
    id: number;
    name: string;
    email: string;

    constructor(id: number, name: string, email: string) {
      this.id = id;
      this.name = name;
      this.email = email;
    }

    getEmail() {
      return this.email;
    }
  }

  const customer: User = new Customer(1, "John Doe", "john@example.com");
  console.log(customer.getEmail()); // Output: john@example.com
})();

(() => {
  /**
   * Extending Interfaces
   * Interfaces can extend other interfaces, allowing for a hierarchy of types.
   */

  interface Person {
    name: string;
  }

  interface Employee extends Person {
    employeeId: number;
  }

  class Developer implements Employee {
    name: string;
    employeeId: number;
    skills: string[];

    constructor(name: string, employeeId: number, skills: string[]) {
      this.name = name;
      this.employeeId = employeeId;
      this.skills = skills;
    }
  }

  const dev: Employee = new Developer("Alice", 101, ["TypeScript", "React"]);
  console.log(dev.name); // Output: Alice
})();
/**
 * Types with Classes
 * Types can also be used with classes, but they are more commonly used for creating type aliases for more complex types, such as union types or function types.
 */

(() => {
  /**
   * Using Types for Object Shapes
   * You can define a type alias for an object shape and use it to type-check a class.
   */

  type UserType = {
    id: number;
    name: string;
    getEmail: () => string;
  };

  class Admin implements UserType {
    id: number;
    name: string;
    email: string;

    constructor(id: number, name: string, email: string) {
      this.id = id;
      this.name = name;
      this.email = email;
    }

    getEmail() {
      return this.email;
    }
  }

  const admin: UserType = new Admin(1, "Jane Doe", "jane@example.com");
  console.log(admin.getEmail()); // Output: jane@example.com
})();

(() => {
  /**
   * Using Types for Complex Types
   * Types are particularly useful for more complex or less conventional type constructs, such as unions or intersections.
   */

  type Role = "admin" | "user" | "guest";

  type User = {
    id: number;
    name: string;
    role: Role;
  };

  class Manager {
    id: number;
    name: string;
    role: Role;

    constructor(id: number, name: string, role: Role) {
      this.id = id;
      this.name = name;
      this.role = role;
    }
  }

  const manager: User = new Manager(1, "Tom", "admin");
  console.log(manager.role); // Output: admin
})();

/**
 * Type VS Interface
 * Key Differences
 *
 * Implementation and Extension:
 * Interfaces: Can be implemented by classes using the implements keyword and extended using the extends keyword.
 * Types: Cannot be implemented directly by classes but can be used to type-check class instances.
 *
 * Declaration Merging:
 * Interfaces: Support declaration merging, allowing multiple declarations of the same interface to be combined.
 * Types: Do not support declaration merging.
 *
 * Complex Types:
 * Types: Can represent union types, intersections, and other complex type constructs.
 * Interfaces: Primarily used for object shapes and class structures.
 *
 * Conclusion
 * Use interface when you need to define a shape that a class should implement or extend, especially when dealing with object-oriented patterns.
 * Use type for defining complex types, unions, intersections, or when creating type aliases for less conventional type constructs.
 * By understanding the strengths and specific use cases of type and interface, you can make more informed decisions in your TypeScript codebase, ensuring clarity and maintainability.
 */
