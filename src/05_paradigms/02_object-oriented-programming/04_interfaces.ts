(() => {
    interface IColorful {
        color: string;
    }

    interface IPrintable {
        print(): void;
    }

    class Bike implements IColorful {
        // color: string
        constructor(public color: string) {
            this.color = color;
        }
    }

    const redBike = new Bike("red");
    console.log(redBike.color);

    class Car implements IColorful, IPrintable {
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
