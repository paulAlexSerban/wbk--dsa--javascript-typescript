(() => {
    /**
     * Readonly<T>
     * - makes all properties of T readonly
     */

    type Person = {
        name: string;
        age: number;
    };

    const person: Readonly<Person> = {
        name: 'John',
        age: 30,
    };

    // person.name = "Doe"; // error

    console.log(person);
})();
