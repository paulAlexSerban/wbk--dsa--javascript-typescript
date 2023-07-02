/**
 * Discriminated Unions
 * --------------------
 * Discriminated unions are a pattern that we can use to make type guards easier to implement.
 */

(() => {
    interface Bird {
        type: "bird";
        flyingSpeed: number;
    }

    interface Horse {
        type: "horse";
        runningSpeed: number;
    }

    type Animal = Bird | Horse;

    const moveAnimal = (animal: Animal) => {
        let speed;
        switch (animal.type) {
            case "bird":
                speed = animal.flyingSpeed;
                break;
            case "horse":
                speed = animal.runningSpeed;
                break;
        }
        console.log(`Moving with speed: ${speed}`);
    };

    moveAnimal({ type: "bird", flyingSpeed: 10 });
})();
