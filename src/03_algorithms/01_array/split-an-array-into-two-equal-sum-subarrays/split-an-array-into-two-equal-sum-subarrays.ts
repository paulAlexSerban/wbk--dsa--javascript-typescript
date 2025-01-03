export function splitArrayIntoEqualSums(arr: number[]): [number[], number[]] | "Not Possible" {
    const totalSum = arr.reduce((sum, num) => sum + num, 0);

    // If the total sum is odd, it's impossible to split into two equal parts
    if (totalSum % 2 !== 0) {
        return "Not Possible";
    }

    const targetSum = totalSum / 2;
    let currentSum = 0;

    // Iterate over the array to find the split point
    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        // If the current sum equals the target sum, we found the split point
        if (currentSum === targetSum) {
            return [arr.slice(0, i + 1), arr.slice(i + 1)];
        }
    }

    return "Not Possible";
}