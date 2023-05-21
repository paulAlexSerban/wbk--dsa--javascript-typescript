/**
 * Function type
 *
 * types that describe a function regarding the parameters and the returned value
 * it allows us to describe which type of functions allow us to use specifically we want ot use somewhere
 */


(() => {
  /*********************/
  /**
   * `let combinedValues: Function;`: This part of the code declares a variable combinedValues and specifies its type.
   * The type of combinedValues is Function, which is the type of all JavaScript functions.
   *  This means that combinedValues can hold any function.
   * 
   * `let combinedResult: (a: number, b: number) => number;:` This line declares a variable combinedResult of a 
   * specific function type. The type definition states that combinedResult should be a function that takes in 
   * two numbers (a and b) as arguments and returns a number.
   * 
   * `function getTogether(n1: number, n2: number): number { return n1 + n2; }`: This line declares a function named 
   * getTogether that takes in two numbers (n1 and n2) and returns the result of their addition. This function 
   * matches the type declared for combinedResult.
   * 
   * combinedResult = getTogether;: Here, the getTogether function is assigned to the combinedResult variable. 
   * This is allowed because getTogether matches the function type of combinedResult.
   * 
   * console.log(combinedResult(8, 8));: Finally, the combinedResult function is called with arguments 8 and 8. 
   * Because combinedResult was assigned the getTogether function, it adds the two input numbers and returns the 
   * result, 16, which is then logged to the console.
   */
  let combinedResult: (a: number, b: number) => number;
  function getTogether(n1: number, n2: number): number {
    return n1 + n2;
  }
  combinedResult = getTogether;
  console.log(combinedResult(8, 8));

  /*********************/
  /**
   * Function with default parameters
   * @param person 
   * @returns 
   */
  function greetUser(person: string = 'stranger'): string {
    return `Hi there, ${person}!`;
  }
  console.log(greetUser());

  /*********************/
  /**
   * logNumber which accepts a single parameter num of type number. This function does not return anything 
   * (its return type is void). The function's body consists of a single statement: console.log(num), 
   * which outputs the value of num to the console.
   * @param num
   * 
   * `const logNumber: (num: number) => void`: This part of the code declares a constant 
   * logNumber and specifies its type. The type of logNumber is a function that takes 
   * in a `number` and returns `void` (nothing).
   * 
   * `= (num: number) => { console.log(num); }`: This part of the code assigns a function to logNumber.
   *  This function matches the type defined earlier: it accepts a number and returns void. 
   * The function logs the input number to the console.
   * 
   * `logNumber(10);`: This part of the code calls the `logNumber` function with 10 as the argument. 
   * This outputs 10 to the console.
   */
  const logNumber: (num: number) => void = (num: number) => {
    console.log(num);
  }
  logNumber(10);


  /*********************/
  /**
   * In the example below, we define a function type GreetingFunction. 
   * This type represents a function that takes a string as an argument and returns a string.
   * 
   * Then, we declare a variable greet of type GreetingFunction. We can assign 
   * any function to greet, as long as it matches the GreetingFunction type.
   * 
   * We assign a function to greet that takes a name and returns a greeting message.
   * 
   * This is useful for ensuring consistency across functions, particularly when dealing 
   * with higher order functions, callback functions or function parameters.
   */
  type GreetingFunction = (a: string) => string;
  let greet: GreetingFunction;
  greet = function (name: string) {
    return "Hello, " + name;
  }
  console.log(greet("Alice")); // Outputs: "Hello, Alice"


  /*********************/
  /**
  * In this example below, applyTransform is a higher-order function that takes a number 
  * and a Transform function as arguments. Transform is a type that represents a 
  * function that takes a number and returns a number. The applyTransform function 
  * applies the Transform function to the number argument.
  * 
  * This is a very common pattern in JavaScript, particularly when working with 
  * array methods like map or filter, and TypeScript's function types can help 
  * ensure that the functions are used correctly.
  */
  type Transform = (value: number) => number;
  function applyTransform(value: number, transform: Transform): number {
    return transform(value);
  }

  let double: Transform = (value: number) => value * 2;
  console.log(applyTransform(5, double)); // Outputs: 10
  let triple: Transform = (value: number) => value * 3;
  console.log(applyTransform(5, triple)); // Outputs: 15

  /*****************/
  const isLeapYear = (year: number): boolean => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  console.log(isLeapYear(2012));
  console.log(isLeapYear(2013));


  /*******************/
  const forecast = {
    date: new Date(),
    weather: 'sunny'
  };

  const logWeather = (forecast: {
    date: Date;
    weather: string;
  }): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
  }

  logWeather(forecast);

  // Destructuring with function parameters
  const destructuredLogWeather = ({ date, weather }: {
    date: Date;
    weather: string;
  }): void => {
    console.log(date);
    console.log(weather);
  }

  destructuredLogWeather(forecast);

})()