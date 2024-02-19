/**
 * LSP: Liskov Substitution Principle
 * - sub-types must be substitutable for their base types
 * - if you have some method that takes some base type, it should be able to take a derived type as well
 * - concrete implementations must adhere to the expected interface contracts
 * - if Bird is a class and Duck is a sub-class, wherever Bird is used, Duck can also be used
 */

/**
 * Example  of LSP violation
 */

// class Bird {
//   fly() {
//       console.log('Bird is flying');
//   }
// }

// class Duck extends Bird {
//   quack() {
//       console.log('Duck is quacking');
//   }
// }

// class Penguin extends Bird {
//   swim() {
//       console.log('Penguin is swimming');
//   }

//   fly(): void {
//       throw new Error('Penguin cannot fly');
//   }
// }

// const bird = new Bird();

// const makeBirdFly = (b: Bird) => {
//   b.fly();
// };

// const duck = new Duck();
// const penguin = new Penguin();

// makeBirdFly(bird);
// makeBirdFly(duck);
// makeBirdFly(penguin);

/**
 * Example of LSP compliance
 */

interface IFlyable {
  fly(): void;
}

interface ISwimmable {
  swim(): void;
}

class Duck implements IFlyable, ISwimmable {
  fly(): void {
      console.log('Duck is flying');
  }
  swim(): void {
      console.log('Duck is swimming');
  }
}

class Penguin implements ISwimmable {
  swim(): void {
      console.log('Penguin is swimming');
  }
}

const makeFly = (f: IFlyable) => {
  f.fly();
};

const makeSwim = (s: ISwimmable) => {
  s.swim();
};

const duck = new Duck();
const penguin = new Penguin();

makeFly(duck);
makeSwim(duck);
