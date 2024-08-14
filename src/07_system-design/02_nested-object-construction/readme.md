### LeetCode Problem: **Nested Object Construction**

#### Problem Statement

You are given a string `fieldPath` that represents a path to a nested structure. The path is a space-separated sequence of keys and indices that should be used to create a nested JavaScript object.

Your task is to implement a function `constructNestedObject(fieldPath)` that returns an object corresponding to the `fieldPath`. The innermost value should be `true`.

#### Example

```javascript
function constructNestedObject(fieldPath) {
    // Your code here
}

console.log(constructNestedObject('data body1 0 primary pgc_eligible'));
// Output:
// {
//   body1: [
//     {
//       primary: {
//         pgc_eligible: true
//       }
//     }
//   ]
// }
```

#### Input

- `fieldPath`: A string that represents the path to the nested structure. The string contains keys separated by a single space (`' '`).
  - The keys may be either:
    - Strings (representing object properties).
    - Numeric strings (representing array indices).

#### Output

- Return an object that represents the nested structure described by the `fieldPath`.
  - The innermost key should map to the value `true`.
  - Array indices should result in arrays being created within the structure.

#### Constraints

1. The `fieldPath` string will always start with the key `'data'`, but the function should ignore this and build the object starting from the next key.
2. The `fieldPath` string will contain only alphanumeric characters and spaces.
3. The length of the `fieldPath` string will not exceed `10^4`.
4. The maximum depth of nesting (i.e., the number of space-separated segments) will not exceed `10^3`.

#### Additional Notes

- If a numeric key is encountered, treat it as an array index.
- You should handle the edge case where there are trailing spaces in the `fieldPath`.

#### Example Scenarios

**Scenario 1: Simple Nested Object**
```javascript
constructNestedObject('data level1 level2 finalKey');
// Output:
// {
//   level1: {
//     level2: {
//       finalKey: true
//     }
//   }
// }
```

**Scenario 2: Nested Object with Arrays**
```javascript
constructNestedObject('data list 0 item value');
// Output:
// {
//   list: [
//     {
//       item: {
//         value: true
//       }
//     }
//   ]
// }
```

**Scenario 3: Multiple Nested Arrays**
```javascript
constructNestedObject('data arr1 1 arr2 0 key');
// Output:
// {
//   arr1: [
//     null,
//     {
//       arr2: [
//         {
//           key: true
//         }
//       ]
//     }
//   ]
// }
```

#### Hints

1. Use the `split(' ')` function to break the `fieldPath` into an array of keys.
2. Utilize array methods like `reduceRight` to build the nested structure starting from the innermost key.
3. Pay attention to whether a key represents an array index or an object property.

Good luck!

## Solution concepts
The code provided leverages several key programming principles and algorithms to transform a string path into a nested object structure. Let's break down the concepts:

### 1. **String Manipulation**
   - **Splitting**: The input string is split into an array of keys using `split(' ')`. This operation is crucial for converting a single string path into individual components that can be traversed.
   - **Trimming and Cleaning**: The code checks for and removes any trailing spaces to ensure the resulting array is clean and accurate.

### 2. **Array Manipulation**
   - **Array Index Handling**: The algorithm checks if a key is a numeric string (using `!isNaN(key)`), which implies that the key should be treated as an array index. This allows the code to create arrays within the nested structure where necessary.
   - **Reduction (`reduceRight`)**: 
     - The `reduceRight` function is used to iterate over the array of keys in reverse order, starting from the innermost element and working outwards.
     - This reverse traversal is ideal for building nested structures because it allows you to start with the final value (`true`) and wrap it step by step, creating the full object hierarchy.

### 3. **Object-Oriented Programming (OOP) Concepts**
   - **Dynamic Object Creation**: Objects are dynamically created and nested within each other based on the input path. This approach is a practical application of dynamic data structures, where the shape of the data is determined at runtime.
   - **Recursive Structure Building** (in a non-recursive way): While the algorithm isn't recursive in the traditional sense (no function calls itself), the `reduceRight` approach effectively mimics a recursive process by progressively nesting objects and arrays.

### 4. **Principles of Immutability and Pure Functions**
   - **Immutability**: The code does not modify any of the original inputs (like `pathArr`). Instead, it builds a new object from scratch. This is a key principle in functional programming, where functions should avoid side effects.
   - **Pure Function**: The `getNestedObject` function is a pure function. It always produces the same output for the same input and doesn't rely on or alter external states.

### 5. **Initialization of Accumulator**
   - **Accumulators in Reductions**: In the `reduceRight` function, the accumulator (`acc`) is initialized with the value `true`. This allows the reduction process to start by setting the innermost value (e.g., `{ "pgc_eligible": true }`).

### 6. **Key Algorithms**
   - **Reduction**: This algorithm is central to how the code builds the object structure. It consolidates the array of path segments into a single nested object. By using `reduceRight`, the function builds the object from the innermost to the outermost level, effectively nesting the final value within increasingly larger structures.

### 7. **Dynamic Typing**
   - The code relies on JavaScript's dynamic typing to handle different types (e.g., strings, numbers) within the array of keys. This flexibility allows for seamless handling of different types of keys without explicit type conversions.

### 8. **Encapsulation of Logic**
   - The process is encapsulated within two main functions (`getNestedPath` and `getNestedObject`), which separates concerns: one handles path parsing, and the other handles object construction. This separation makes the code modular and easier to maintain or modify.

These principles and algorithms work together to take a simple string input and turn it into a complex, nested object structure, making the code both flexible and powerful.