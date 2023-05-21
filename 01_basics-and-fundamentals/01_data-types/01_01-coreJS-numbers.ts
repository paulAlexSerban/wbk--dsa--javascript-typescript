/**
 * NOTA BENE:
 * For a complete description of the concepts practiced in this ticket check the Java / BasicJava / Basics-and-Fundamentals
 */

/**
 * Integer/Number
 * it is whole number
 * it has a MIN_VALUE and a MAX_VALUE to store numbers
 */

(() => {
    const firstInteger = 1000;
    console.log(firstInteger);

    const minimumInteger = Number.MIN_VALUE; // -2147483648
    const maximumInteger = Number.MAX_VALUE; // 2147483647

    console.log("minimumInteger " + minimumInteger);
    console.log("maximumInteger " + maximumInteger);

    console.log("Busted MIN_VALUE " + (minimumInteger - 1));
    console.log("Busted MAX_VALUE " + (maximumInteger + 1));

    function add(num1: number, num2: number, showResult: boolean, phrase: string) {
      if (showResult) {
          console.log(`${phrase}${num1 + num2}`);
          return num1 + num2;
      } else {
          return num1 + num2;
      }
  }

    let number2: number;
    const number1 = 5;

    number2 = 2.8;
    number2 = 5;
    
    const printResults = true;
    let phrase: string;
    phrase = "Result is: ";
    const add_result: number = add(number1, number2, printResults, phrase);
})();
