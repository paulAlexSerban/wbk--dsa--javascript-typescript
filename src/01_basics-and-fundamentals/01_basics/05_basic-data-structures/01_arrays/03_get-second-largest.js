(() => {
    /**
     *   Return the second largest number in the array.
     *   @param {Number[]} numbers - An array of numbers.
     *   @return {Number} The second largest number in the array.
     **/

    function getSecondLargest(numbers) {
        let largest = numbers[0];
        let secondLargest = numbers[0];

        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > largest) {
                secondLargest = largest;
                largest = numbers[i];
                continue;
            }

            if (numbers[i] > secondLargest && numbers[i] < largest) {
                secondLargest = numbers[i];
            }
        }

        return secondLargest;
    }

    console.log(getSecondLargest([2, 34, 12, 423, 12, 3, 12, 324, 21]));
})();
