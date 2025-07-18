const collectOddValues = (arr) => {
    let result = [];

    // helper function
    const helper = (helperInput) => {
        // base case
        if (helperInput.length === 0) {
            return;
        }

        // if the first element is odd, push it to result
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }

        // call helper on the rest of the array
        helper(helperInput.slice(1));
    };

    helper(arr);

    return result;
};

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
