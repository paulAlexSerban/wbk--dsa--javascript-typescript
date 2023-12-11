(() => {
    interface Colorful {
        color: string;
    }

    interface Printable {
        print(): void;
    }

    class Bike implements Colorful {
        // color: string
        constructor(public color: string) {
            this.color = color;
        }
    }

    const redBike = new Bike("red");
    console.log(redBike.color);

    class Car implements Colorful, Printable {
        // color: string
        constructor(public brand: string, public color: string) {
            this.color = color;
        }

        print() {
            console.log(`This is a ${this.color} ${this.brand}`);
        }
    }

    const blueCar = new Car("prada", "blue");
    console.log(blueCar.color);
})();
