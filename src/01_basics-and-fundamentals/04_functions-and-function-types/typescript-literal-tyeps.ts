/**
 * Literal Types
 * =====
 * Literal types allow you to specify the exact value a string, number, or boolean must have.
 * In practice, literal types combine nicely with union types, type guards, and type aliases.
 * You can use these features together to get enum-like behavior with strings, numbers, and
 * booleans in a type-safe way.
 */

(() => {
    function combine(input1: number | string, input2: number | string, resultConversion: "as-number" | "as-text") {
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
