(() => {
    /**
     * Inheritance from Types
     * - while types and interfaces serve similar purposes, they are not directly interchangeable when it comes to inheritance
     * - you can achieve a similar effect by combining them in certain ways.
     * - one common approach is to use intersection types to combine a type and an interface.
     */
  
    // define type alias
    type Person = {
      id: number;
      name: string;
    };
  
    // define interface that extends from Person type alias using intersection
    interface Employee extends Person {
      employeeId: number;
      position: string;
    }
  
    class Developer implements Employee {
      id: number;
      name: string;
      employeeId: number;
      position: string;
      skills: string[];
  
      constructor(
        id: number,
        name: string,
        employeeId: number,
        position: string,
        skills: string[]
      ) {
        this.id = id;
        this.name = name;
        this.employeeId = employeeId;
        this.position = position;
        this.skills = skills;
      }
    }
  
    const dev: Employee = new Developer(1, "Alice", 101, "Frontend Developer", [
      "TypeScript",
      "React",
    ]);
    console.log(dev.name); // Output: Alice
    console.log(dev.position); // Output: Frontend Developer
  
    /**
     * Explanation
     *
     * Type Alias Definition (Person):
     * This defines a basic type alias Person with two properties: id and name.
     *
     * Interface Definition (Employee):
     * The Employee interface extends the Person type alias by using an intersection type. This means Employee includes all
     * properties of Person (id and name) as well as its own properties (employeeId and position).
     *
     * Class Implementation (Developer):
     * The Developer class implements the Employee interface, meaning it must include all properties from Person and Employee.
     */
  
    /**
     * Usage
     * By using this pattern, you can combine the strengths of both types and interfaces:
     *
     * Type Alias: Provides a simple and flexible way to define a shape or union types.
     * Interface: Provides a way to extend and implement structures, ensuring consistency in object-oriented designs.
     *
     * This approach allows you to effectively inherit from a type alias within an interface, leveraging the best of both constructs in TypeScript.
     */
  })();