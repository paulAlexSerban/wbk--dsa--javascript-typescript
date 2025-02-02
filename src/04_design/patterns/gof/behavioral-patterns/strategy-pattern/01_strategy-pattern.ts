/**
 * Strategy Pattern
 * - defines a family of algorithms, encapsulates each one, and makes them
 * - the Strategy pattern lets the algorithm vary independently from clients that use it
 */

(() => {
    interface IFlyBehavior {
        fly(): void;
    }

    class FlyWithWings implements IFlyBehavior {
        fly() {
            console.log("I'm flying!");
        }
    }

    class FlyNoWay implements IFlyBehavior {
        fly() {
            console.log("I can't fly");
        }
    }

    class FlyRocketPowered implements IFlyBehavior {
        fly() {
            console.log("I'm flying with a rocket!");
        }
    }

    /***************/
    // NOTE: Think of each set of behaviors as a family of 
    // algorithms.

    interface IQuackBehavior {
        quack(): void;
    }

    /**
     * These behaviors are interchangeable. We can 
     * easily set them at runtime.
     */

    class Quack implements IQuackBehavior {
        quack() {
            console.log('Quack');
        }
    }

    // class Squeak implements IQuackBehavior {
    //     quack() {
    //         console.log('Squeak');
    //     }
    // }

    // class MuteQuack implements IQuackBehavior {
    //     quack() {
    //         console.log('<< Silence >>');
    //     }
    // }

    abstract class Duck {
        protected flyBehavior: IFlyBehavior;
        protected quackBehavior: IQuackBehavior;

        constructor() {
            this.flyBehavior = new FlyWithWings();
            this.quackBehavior = new Quack();
        }

        public abstract display(): void;

        public performFly(): void {
            this.flyBehavior.fly();
        }

        public performQuack(): void {
            this.quackBehavior.quack();
        }

        public swim(): void {
            console.log('All ducks float, even decoys!');
        }

        public setFlyBehavior(fb: IFlyBehavior): void {
            this.flyBehavior = fb;
        }

        public setQuackBehavior(qb: IQuackBehavior): void {
            this.quackBehavior = qb;
        }
    }

    class MallardDuck extends Duck {
        constructor() {
            super();
        }

        public display() {
            console.log('I am a Mallard Duck');
        }
    }

    class ModelDuck extends Duck {
        constructor() {
            super();
            this.flyBehavior = new FlyNoWay();
            this.quackBehavior = new Quack();
        }

        public display() {
            console.log('I am a Model Duck');
        }
    }

    class MiniDuckSimulator {
        public static main(): void {
            const mallard: Duck = new MallardDuck();
            mallard.performQuack();
            mallard.performFly();

            const model: Duck = new ModelDuck();
            model.performFly();
            model.setFlyBehavior(new FlyRocketPowered());
            model.performFly();
        }
    }

    MiniDuckSimulator.main();
})();
