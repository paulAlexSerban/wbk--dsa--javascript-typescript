/**
 * Determining DNA Health
 *
 * DNA is a nucleic acid present in the bodies of living things. Each piece of DNA contains a number of genes, some of which are beneficial and increase the DNA's total health. Each gene has a health value, and the total health of a DNA is the sum of the health values of all the beneficial genes that occur as a substring in the DNA. We represent genes and DNA as non-empty strings of lowercase English alphabetic letters, and the same gene may appear multiple times as a susbtring of a DNA.
 *
 * Given the following:
 * - An array of beneficial gene strings, genes.
 *  - genes = [gene1, gene2, ..., geneN - 1]
 * - An array of gene health values, healths.
 *   - health = [health1, health2, ..., healthN - 1]
 * - A set of s DNA strands where the definition of each strand has three components, start, end d, where string d is a DNA for which genes[start], genes[start + 1], ..., genes[end - 1] are healthy.
 *
 * Input Format
 *
 * The first line contains an integer, n, denoting the total number of genes and health values.
 *
 * The second line contains n space-separated strings describing the respective values of genes[0], genes[1], ..., genes[n - 1] (i.e. the elements of genes).
 *
 * The third line contains n space-separated integers describing the respective values of health[0], health[1], ..., health[n - 1] (i.e. the elements of health).
 *
 * The fourth line contains an integer, s, denoting the number of strands of DNA to process.
 *
 * Each of the s subsequent lines describes a DNA strand in the form start end d, denoting that the healthy genes for DNA strand d are genes[start], genes[start + 1], ..., genes[end - 1] and their respective correlated health values  are health[start + 1], ..., health[end - 1].
 *
 * Constraints
 *
 * 1 <= n, s <= 10^5
 * 0 <= health[i] <= 10^7
 * 1 <= first < last <= n
 * 1 <= the sum of the lengths of all genes and DNA strands <= 2 * 10^6
 * it is guaranteed that each genes[i] consists of lowercase English alphabetic letters only (i.e., a to z).
 *
 * Output Format
 * Print rwo space separated integers describing the respective total health of the unhealthiest and healthiest strands of DNA.
 *
 * Sample Input 0
 *
 * 6
 * a b c aa d b
 * 1 2 3 4 5 6
 * 3
 * 1 5 caaab
 * 0 4 xyz
 * 2 4 bcdybc
 *
 * Sample Output 0
 *  0 19
 *
 * Explanation 0
 *
 * Given the following n = 6 genes and health = [1, 2, 3, 4, 5, 6]:
 *
 * genes[0] = a
 *
 * genes[1] = b
 *
 * genes[2] = c
 *
 * genes[3] = aa
 *
 * genes[4] = d
 *
 * genes[5] = b
 *
 * We process the following s = 3 strands of DNA:
 *
 * d = caaab, whose healthy genes are genes[1] = b and genes[2] = c. This gives us healthb + healthc = 2 + 3 = 5.
 *
 * d = xyz, whose healthy genes are genes[0] = a and genes[1] = b. This gives us healtha + healthb = 1 + 2 = 3.
 *
 * d = bcdybc, whose healthy genes are genes[1] = b, genes[2] = c and genes[3] = aa. This gives us healthb + healthc + healthaa = 2 + 3 + 4 = 9.
 *
 * The total health values for the 3 strands are 5, 3, and 9. We store these in an array, healthValues = [5, 3, 9]. The unhealthiest strand of DNA is xyz with a total health of 3, and the healthiest strand of DNA is bcdybc with a total health of 9. We then print the respective total health values as a single line of output: 0 19.
 *
 */

function determineDnaHealth(n, genes, health, s, dnaStrands) {
    let minHealth = Number.MAX_SAFE_INTEGER;
    let maxHealth = Number.MIN_SAFE_INTEGER;

    for (let sItr = 0; sItr < s; sItr++) {
        const [first, last, d] = dnaStrands[sItr];
        let totalHealth = 0;

        for (let i = first; i <= last; i++) {
            const gene = genes[i];
            const geneHealth = health[i];
            let index = d.indexOf(gene);

            while (index !== -1) {
                totalHealth += geneHealth;
                index = d.indexOf(gene, index + 1);
            }
        }

        minHealth = Math.min(minHealth, totalHealth);
        maxHealth = Math.max(maxHealth, totalHealth);
    }

    return {
        minHealth,
        maxHealth,
    };
}

(() => {
    // Sample usage
    const n = 6;
    const genes = ['a', 'b', 'c', 'aa', 'd', 'b'];
    const health = [1, 2, 3, 4, 5, 6];
    const s = 3;
    const dnaStrands = [
        [1, 5, 'caaab'],
        [0, 4, 'xyz'],
        [2, 4, 'bcdybc'],
    ];

    const result = determineDnaHealth(n, genes, health, s, dnaStrands);
    console.log(`Sample usage 0: ${result.minHealth} ${result.maxHealth}`);
})();

(() => {
    const n1 = 4;
    const genes1 = ['x', 'y', 'z', 'xy'];
    const health1 = [2, 4, 3, 8];
    const s1 = 2;
    const dnaStrands1 = [
        [0, 3, 'xyz'],
        [1, 2, 'yzx'],
    ];

    const result1 = determineDnaHealth(n1, genes1, health1, s1, dnaStrands1);
    console.log(`Sample Usage 1: ${result1.minHealth} ${result1.maxHealth}`); // Output should be "9 9"
})();

(() => {
    const n2 = 5;
    const genes2 = ['g', 'gg', 't', 'tg', 'ttg'];
    const health2 = [7, 2, 5, 3, 1];
    const s2 = 3;
    const dnaStrands2 = [
        [0, 2, 'ggttg'],
        [1, 4, 'tggt'],
        [2, 4, 'ttg'],
    ];

    const result2 = determineDnaHealth(n2, genes2, health2, s2, dnaStrands2);
    console.log(`Sample Usage 2: ${result2.minHealth} ${result2.maxHealth}`); // Output should be "5 16"
})();
