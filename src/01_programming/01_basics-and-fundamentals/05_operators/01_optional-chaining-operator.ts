(() => {
  // optional chaining operator
  interface Person {
    name: string;
    age: number;
    job?: {
      title: string;
      description: string;
    };
  }

  const person: Person = {
    name: "John",
    age: 30,
  };

  console.log(person?.job?.title);
})()