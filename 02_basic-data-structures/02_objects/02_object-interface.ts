/**
 * Object Interface
 * ================
 * An interface is a way to describe the structure of an object.
 * An interface is a syntactical contract that an entity should conform to.
 * In other words, an interface defines the syntax that any entity must adhere to.
 * TypeScript interfaces define contracts in your code and provide explicit names for type checking.
 * Interfaces define properties, methods, and events, which are the members of the interface.
 * Interfaces contain only the declaration of the members. It is the responsibility of the deriving class to define the members.
 * It often helps in providing a standard structure that the deriving classes would follow.
 */



(() => {
  interface Todo {
    id: number,
    title: string,
    completed: boolean
  }

  const todo: Todo = {
    id: 1,
    title: "delectus aut autem",
    completed: false
  }

  const logObject = (obj: Todo) => {
    console.log(`id: ${obj.id}, title: ${obj.title}, completed: ${obj.completed}`);
  }

  logObject(todo)

  /********************/

  interface Car {
    name: string,
    year: Date,
    broken: boolean,
  }
  interface Reportable {
    summary(): string
  }

  interface Vehicle
    extends Reportable {
    name: string,
    year: Date,
    broken: boolean,
  }

  interface Drink
    extends Reportable {
    color: string,
    carbonated: boolean,
    sugar: number,
  }


  const oldCivic: Vehicle = {
    name: "civic",
    year: new Date(),
    broken: true,
    summary(): string {
      return `Name: ${this.name}` // this refers to the object that we are defining
    }
  }

  const drink: Drink = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary(): string {
      return `My drink has ${this.sugar} grams of sugar`
    }
  }

  ////////////////////////
  // This is a long way to do it using an object literal, which is not very reusable, scalable, or maintainable
  // const printVehicle = (vehicle: { name: string, year: number, broken: boolean }): void => {
  //   console.log(`Name: ${vehicle.name}`);
  //   console.log(`Year: ${vehicle.year}`);
  //   console.log(`Broken: ${vehicle.broken}`);
  // }
  // printVehicle(oldCivic);
  ////////////////////////

  const printSummary = (item: Reportable): void => {
    console.log(item.summary());
  }

  printSummary(oldCivic);
  printSummary(drink);

  const printVehicle = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
    console.log(vehicle.summary());
  }

  printVehicle(oldCivic);

  const printDrink = (drink: Drink): void => {
    console.log(`Name: ${drink.color}`);
    console.log(`Year: ${drink.carbonated}`);
    console.log(`Broken: ${drink.sugar}`);
    console.log(drink.summary());
  }

  printDrink(drink);
})()