(() => {
  /**
   * Partial<Type>
   * Constructs a type with all properties of Type set to optional.
   */

  type Person = {
    name: string;
    age: number;
  };

  const person: Partial<Person> = {
    name: 'John'
  };

  console.log(person);
})()