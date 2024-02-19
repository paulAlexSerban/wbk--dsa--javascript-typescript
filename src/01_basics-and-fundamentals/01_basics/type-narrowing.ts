(() => {
    // typeof type guard
    // involves simply doing a typeof check before doing something with the value
    const add = (a: string | number, b: string | number) => {
        if (typeof a === "string" || typeof b === "string") {
            return a.toString() + b.toString();
        }
        return a + b;
    };

    console.log(add(1, 2));

    const isTeenager = (age: number | string) => {
        if (typeof age === "string") {
            console.log(age.charAt(0));
        }

        if (typeof age === "number") {
            console.log(age > 12 && age < 20);
        }
    };

    isTeenager(12);
    isTeenager("12");
})();

(() => {
    // truthiness guard
    // involves checking a value for being truthy or falsy before doing something with it
    // this is helpful avoiding errors when working with values that can be falsy, null or undefined

    const printLetters = (word: string | null | undefined) => {
        if (!word) {
            console.log("No word was given");
        }

        if (word) {
            for (const letter of word) {
                console.log(letter);
            }
        }
    };

    printLetters("Hello World");
    printLetters(null);
})();

(() => {
    // equality narrowing
    // involves comparing two values with === or !== before doing something with them
    // by checking two values against one another, we can be sure that they are of the same type

    const someFunc = (a: string | number, b: string | number) => {
        if (a !== b) {
            console.log("Not equal");
        }

        if (a === b) {
            console.log("Equal");
        }
    };

    someFunc(1, 2);
})();

(() => {
    // in operator narrowing
    // JS in operator helps check if a certain property exists in an object
    // this means we can use it to check if a value in an object, according to it's type alias or aliases, before doing something with it
    type Cat = {
        meow: () => void;
    };

    type Dog = {
        bark: () => void;
    };

    type Animal = Cat | Dog;

    const makeSound = (animal: Animal) => {
        if ("meow" in animal) {
            animal.meow();
        }

        if ("bark" in animal) {
            animal.bark();
        }
    };

    const cat: Cat = {
        meow: () => console.log("Meow"),
    };

    const dog: Dog = {
        bark: () => console.log("Bark"),
    };

    makeSound(cat);
    makeSound(dog);

    interface IMovie {
        title: string;
        duration: number;
    }

    interface IShow {
        title: string;
        episodes: number;
        episodeDuration: number;
    }

    type Content = IMovie | IShow;

    const printContentInfo = (content: Content) => {
        if ("duration" in content) {
            console.log("Movie");
        }

        if ("episodes" in content) {
            console.log("Show");
        }
    };

    const movie: IMovie = {
        title: "The Godfather",
        duration: 180,
    };

    const show: IShow = {
        title: "The Office",
        episodes: 201,
        episodeDuration: 22,
    };

    printContentInfo(movie);
    printContentInfo(show);
})();

(() => {
    // instance of narrowing
    // it allows us to check if one thing is an instance of a class before doing something with it
    // this can help us narrow types when  working with things like classes

    class Car {
        drive() {
            console.log("Driving...");
        }
    }

    class Truck {
        drive() {
            console.log("Driving a truck...");
        }

        loadCargo(amount: number) {
            console.log(`Loading cargo: ${amount}`);
        }
    }

    type Vehicle = Car | Truck;

    const v1 = new Car();
    const v2 = new Truck();
    const v3 = { drive: () => console.log("Driving...") };
    const v4 = {
        drive: () => console.log("Driving a truck..."),
        loadCargo: (amount: number) => console.log(`Loading cargo: ${amount}`),
    };

    const useVehicle = (vehicle: Vehicle) => {
        vehicle.drive();

        if (vehicle instanceof Truck) {
            vehicle.loadCargo(1000);
        }
    };

    useVehicle(v1);
    useVehicle(v2);
    useVehicle(v3);
    useVehicle(v4);
})();

(() => {
    // type predicates
    // typescript allows us to write custom functions that can narrow the type of a value
    // these functions have a very special return type called a type predicate
    // a type predicate is a return type that helps typescript understand the type of a value within a conditional block
    // type predicates are written in the form of a function that returns a boolean

    type Cat = {
        meow: () => void;
    };

    type Dog = {
        bark: () => void;
    };

    const isCat = (animal: Cat | Dog): animal is Cat => {
        return "meow" in animal;
    };

    const isCat2 = (animal: Cat | Dog): animal is Cat => {
        return (animal as Cat).meow !== undefined;
    };

    const makeSound = (animal: Cat | Dog) => {
        if (isCat(animal)) {
            animal.meow();
        }
    };

    const makeSound2 = (animal: Cat | Dog) => {
        if (isCat2(animal)) {
            animal.meow();
        }
    };

    const cat: Cat = {
        meow: () => console.log("Meow"),
    };

    const dog: Dog = {
        bark: () => console.log("Bark"),
    };

    makeSound(cat);
    makeSound(dog);

    makeSound2(cat);
    makeSound2(dog);
})();
