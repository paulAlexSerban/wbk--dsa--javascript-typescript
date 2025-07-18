function isTriangle(a, b, c) {
    return a + b > c && a + c > b && c + b > a;
}

// Test the function with some sample inputs
console.log(isTriangle(3, 4, 5)); // Output: true (a triangle can be built with these side lengths)
console.log(isTriangle(1, 1, 2)); // Output: false (a triangle cannot be built with these side lengths)
console.log(isTriangle(5, 5, 5)); // Output: true (a triangle can be built with these side lengths)
