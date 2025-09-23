export function maxFrequencyElements(nums: number[]): number {
    // Step 1: Count frequencies of each number
    const freq: Record<number, number> = {};
    for (const num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    // Step 2: Find the maximum frequency
    let maxFreq = 0;
    for (const count of Object.values(freq)) {
        if (count > maxFreq) {
            maxFreq = count;
        }
    }

    // Step 3: Sum frequencies of all elements with max frequency
    let total = 0;
    for (const count of Object.values(freq)) {
        if (count === maxFreq) {
            total += count;
        }
    }

    return total;
}