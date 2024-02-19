(() => {
    // Generic Constraints
    class Car {
        print() {
            console.log("I am a car");
        }
    }

    class House {
        print() {
            console.log("I am a house");
        }
    }

    interface IPrintable {
        print(): void;
    }

    // extending the Printable interface we add a constraint to the generic type
    // this way we can only pass in types that have the print method
    function printHousesOrCars<T extends IPrintable>(arr: T[]): void {
        for (let i = 0; i < arr.length; i++) {
            arr[i].print();
        }
    }

    printHousesOrCars<House>([new House(), new House()]);
    printHousesOrCars<Car>([new Car(), new Car()]);
})();
