(() => {
    const { log } = console;

    /**
     * Basic class
     * - The constructor is a method that is called when a class is instantiated.
     * - The constructor method is optional.
     */
    class Vehicle {
        constructor(public brand: string, public color: string) {
            this.brand = brand;
            this.color = color;
        }

        drive(): void {
            log(`The ${this.color} ${this.brand} is driving.`);
        }

        honk(): void {
            log(`The ${this.color} ${this.brand} is honking.`);
        }

        print(): void {
            log(`The ${this.color} ${this.brand} is printing.`);
        }
    }

    const car = new Vehicle("prada", "blue");
    car.drive();

    /**
     * Basic inheritance
     * - The extends keyword is used to inherit from a class.
     * - The super keyword is used to call the constructor of the base class.
     * - The super keyword can also be used to call other methods on the base class.
     */
    class Car extends Vehicle {
        constructor(public brand: string, public color: string, public wheels: number) {
            super(brand, color);
            this.wheels = wheels;
        }

        drive(): void {
            log(`The ${this.color} ${this.brand} with ${this.wheels} wheels is driving.`);
        }
    }

    const car2 = new Car("prada", "blue", 4);
    car2.drive();
})();
