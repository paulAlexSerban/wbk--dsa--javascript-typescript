/**
 * Classes
 * - Classes are blueprints for creating objects
 * - Classes are used to create objects
 * - Methods are functions that belong to a class
 * - Properties are variables that belong to a class
 * - Constructors are special methods that are called when an object is instantiated
 * - Constructors are used to initialize the properties of an object
 * - Constructors are optional
 * - Constructors can be overloaded
 */
(() => {
    const { log } = console;
    class Player {
        // static properties and methods are accessible without instantiating the class
        static description = 'This class represents a player in a game';

        // annotations are not required, but they are recommended
        readonly firstName: string;
        // readonly properties can only be set in the constructor
        public readonly lastName: string;
        private _age: number;
        public height: number;
        weight: number;
        // protected properties can only be accessed from within the class and derived classes
        protected _score: number = 0;
        #numLives = 3;

        constructor(firstName: string, lastName: string, age: number, height: number, weight: number) {
            this.firstName = firstName;
            this.lastName = lastName;
            this._age = age;
            this.height = height;
            this.weight = weight;
        }

        taunt() {
            log('You are weak, I am strong!', this);
        }

        static randomPlayer() {
            const firstNames = ['John', 'Jane', 'Jack', 'Jill'];
            const lastNames = ['Doe', 'Smith', 'Jones', 'Johnson'];
            const ages = [18, 20, 22, 24, 26, 28, 30];
            const heights = [1.6, 1.7, 1.8, 1.9, 2.0];
            const weights = [60, 70, 80, 90, 100];
            this.description = 'This class represents a player in a game';
            const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
            const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
            const age = ages[Math.floor(Math.random() * ages.length)];
            const height = heights[Math.floor(Math.random() * heights.length)];
            const weight = weights[Math.floor(Math.random() * weights.length)];
            return new Player(firstName, lastName, age, height, weight);
        }

        get score() {
            return this._score;
        }

        set score(s: number) {
            if (s < 0) {
                throw new Error('Score cannot be negative');
            }
            this._score = s;
        }

        get age() {
            return this._age;
        }

        updateScore() {
            this.score++;
        }

        get lives() {
            return this.#numLives;
        }

        set lives(l: number) {
            if (l < 0) {
                throw new Error('Lives cannot be negative');
            }
            this.#numLives = l;
        }

        updateLives() {
            this.#numLives--;
        }

        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
    }

    const player = new Player('John', 'Doe', 30, 1.8, 80);
    player.taunt();

    const player2 = new Player('Jane', 'Doe', 25, 1.6, 60);
    player2.taunt();
    // player2.#score = 10;
    log(Player.description);
    const player3 = Player.randomPlayer();
    log(player3);

    class AdminPlayer extends Player {
        powers: string[];
        constructor(
            firstName: string,
            lastName: string,
            age: number,
            height: number,
            weight: number,
            powers: string[] = []
        ) {
            super(firstName, lastName, age, height, weight);
            this.powers = powers;
        }
        isAdmin = true;

        taunt() {
            log('You are weak, I am stronger!, I am ADMIN', this);
            super.taunt();
        }
    }

    const adminPlayer = new AdminPlayer('Jack', 'Doe', 30, 1.8, 80, ['fly', 'super strength']);
    adminPlayer.taunt();

    class SuperPlayer extends Player {
        powers: string[];
        constructor(
            firstName: string,
            lastName: string,
            age: number,
            height: number,
            weight: number,
            powers: string[] = []
        ) {
            super(firstName, lastName, age, height, weight);
            this.powers = powers;
        }
        isAdmin = true;

        taunt() {
            log('You are weak, I am stronger!, I am SUPER', this);
            super.taunt();
        }

        maxScore() {
            // protected properties can only be accessed from within the class and derived classes
            this._score = 999;
        }
    }

    const superPlayer = new SuperPlayer('Jill', 'Doe', 30, 1.8, 80, ['fly', 'super strength']);
    superPlayer.taunt();
})();

(() => {
    const greetingType = 'helloworld';
    class Greetings {
        static [greetingType]() {
            return 'Hello, World';
        }
    }
    console.log(Greetings[greetingType]());
})();
