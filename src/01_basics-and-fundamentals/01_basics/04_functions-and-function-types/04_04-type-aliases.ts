/**
 * Type aliases
 * =====
 * Type aliases create a new name for a type. Type aliases are sometimes similar to interfaces,
 * but can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand.
 * Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples,
 * and any other types that you’d otherwise have to write by hand.
 */

(() => {

  type TCombinable = number | string;
  type TConversionDescriptor = "as-number" | "as-text";

  function combine(input1: TCombinable, input2: TCombinable, resultConversion: TConversionDescriptor) {
    let result: number | string;
    if (typeof input1 === "number" && typeof input2 === "number") {
      result = input1 + input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    if (resultConversion === "as-number") {
      return +result;
    } else {
      return result.toString();
    }

    return result;
  }

  const combinedAges = combine(30, 26, "as-number");
  console.log(combinedAges);

  const combinedNames = combine("Max", "Anna", "as-text");
  console.log(combinedNames);

  const combinedNamesAndAges = combine("Max", 26, "as-text");
  console.log(combinedNamesAndAges);
})();