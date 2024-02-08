(() => {
  /**
   * Required<Type>
   * Constructs a type consisting of all properties of Type set to required.
   */

  type Admin = {
    name: string;
    privileges: string[];
  };

  type Employee = {
    name: string;
    startDate: Date;
    role?: string;
  };

  const admin1: Required<Admin> = {
    name: "John",
    privileges: ["create-server"],
  }

  const employee1: Required<Employee> = {
    name: "John",
    startDate: new Date(),
    role: "admin",
  }

  console.log(admin1);
  console.log(employee1);
})()