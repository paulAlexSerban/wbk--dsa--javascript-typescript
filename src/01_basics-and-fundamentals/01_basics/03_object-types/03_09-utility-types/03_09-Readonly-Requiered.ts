(() => {
  /**
   * Readonly<Required<T>>
   * - makes all properties of T readonly
   * - makes all properties of T required
   */

  type Person = {
    name: string;
    age?: number;
    gender?: string;
  };

  const person: Readonly<Required<Person>> = {
    name: 'John',
    age: 30,
    gender: 'male'
  };

  console.log(person);

  // const person: Readonly<Required<Person>> = { // error gender is missing
  //   name: 'John',
  //   age: 30
  // };
})();