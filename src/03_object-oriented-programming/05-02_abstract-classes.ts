(() => {
    abstract class Animal {
        abstract makeSound(): void;

        move(): void {
            console.log("Moving along...");
        }
    }

    class Dog extends Animal {
        makeSound() {
            console.log("Woof! Woof!");
        }
    }

    let myDog: Animal = new Dog();
    myDog.makeSound(); // Outputs "Woof! Woof!"
    myDog.move(); // Outputs "Moving along..."

    // let myAnimal = new Animal(); // Error: Cannot create an instance of an abstract class.
})();
