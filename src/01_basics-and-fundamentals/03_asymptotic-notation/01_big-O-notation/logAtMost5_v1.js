const logAtMost5 = () => {
    for (let i = 0; i <= Math.min(5, n); i++) {
        console.log(i);
    }
};

/**
 * as n grows it does not matter
 * O(1) -  it is a flat - line
 * - it is unusual to have constant line time
 */
