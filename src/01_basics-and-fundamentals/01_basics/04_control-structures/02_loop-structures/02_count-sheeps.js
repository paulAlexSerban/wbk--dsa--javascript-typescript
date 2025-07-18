(() => {
    const countSheep = (num) => {
        let result = '';
        for (let i = 1; i <= num; i++) {
            result += `${i} sheep...`;
        }
        return result;
    };

    // tests
    console.log(countSheep(1));
    console.log(countSheep(2));
    console.log(countSheep(3));
})();

(() => {
    countSheep = (n) => [...Array(n).keys()].map((x) => `${x + 1} sheep...`).join``;

    // tests
    console.log(countSheep(1));
    console.log(countSheep(2));
    console.log(countSheep(3));
})();

(() => {
    const countSheep = (length) => Array.from({ length }, (_, i) => ++i + ' sheep...').join('');

    // tests
    console.log(countSheep(1));
    console.log(countSheep(2));
    console.log(countSheep(3));
})();

(() => {
    function countSheeps(arrayOfSheeps) {
        let count = 0;
        for (let i = 0; i < arrayOfSheeps.length; i++) {
            if (arrayOfSheeps[i] === true) {
                count++;
            }
        }
        return count;
    }

    console.log(
        countSheeps([
            true,
            true,
            true,
            false,
            true,
            true,
            true,
            true,
            true,
            false,
            true,
            false,
            true,
            false,
            false,
            true,
            true,
            true,
            true,
            false,
            false,
            true,
            true,
        ])
    ); // Output: 17
    console.log(
        countSheeps([
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
        ])
    ); // Output: 22
    console.log(
        countSheeps([
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
        ])
    ); // Output: 0
})();

(() => {
    function countSheeps(arrayOfSheeps) {
        return arrayOfSheeps.filter(Boolean).length;
    }

    console.log(
        countSheeps([
            true,
            true,
            true,
            false,
            true,
            true,
            true,
            true,
            true,
            false,
            true,
            false,
            true,
            false,
            false,
            true,
            true,
            true,
            true,
            false,
            false,
            true,
            true,
        ])
    ); // Output: 17
    console.log(
        countSheeps([
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
        ])
    ); // Output: 22
    console.log(
        countSheeps([
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
        ])
    ); // Output: 0
})();
