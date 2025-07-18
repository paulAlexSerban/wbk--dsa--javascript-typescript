/**
 * Insert Intervals
 *
 * You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi]
 * represent the start and the end of the ith interval and intervals is sorted in ascending order by
 * starti. You are also given an interval newInterval = [start, end] that represents the start and
 * end of another interval.
 *
 * Insert newInterval into intervals such that intervals is still sorted in ascending order by starti
 * and intervals still does not have any overlapping intervals (merge overlapping intervals if
 * necessary).
 *
 * Return intervals after the insertion.
 *
 * Example 1:
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 *
 * Example 2:
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * Output: [[1,2],[3,10],[12,16]]
 * Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 *
 *
 * Constraints:
 * - 0 <= intervals.length <= 10^4
 * - intervals[i].length == 2
 * - 0 <= starti <= endi <= 10^5
 * - intervals is sorted by starti in ascending order.
 * - newInterval.length == 2
 * - 0 <= start <= end <= 10^5
 *
 *
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

/**
 * Algorithm Explanation
 *
 * The algorithm iterates through the existing intervals and sorts the new interval in such a way that it maintains two primary conditions:
 *
 * The intervals should remain sorted in ascending order.
 * No two intervals should overlap.
 * The algorithm is broken down into four main steps:
 *
 * 1. Before the New Interval: First, it adds all the intervals that come before the new interval. This is determined by checking the end of each interval against the start of the new interval.
 * 2. Merging Intervals: It then checks for overlapping intervals. If there is an overlap, it merges the intervals by updating the start and end of the newInterval.
 * 3. Inserting New Interval: The new, possibly merged, interval is then added to the result array.
 * 4. After the New Interval: Finally, it adds all the intervals that come after the new interval to the result array.
 */
(() => {
    const insert = (intervals, newInterval) => {
        // Initialize result array
        const result = [];
        let i = 0;
        const intervalsLength = intervals.length;

        // 1. // Add all the intervals that end before the new interval starts
        while (i < intervalsLength && intervals[i][1] < newInterval[0]) {
            result.push(intervals[i]);
            i++;
        }
        console.log(`// 1 // result: ${result}`);

        // 2. // Merge overlapping intervals
        while (i < intervalsLength && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
            i++;
        }
        console.log(`// 2 // newInterval: ${newInterval}`);

        // 3. // Add the new interval
        result.push(newInterval);

        // 4. // Add remaining intervals
        while (i < intervalsLength) {
            result.push(intervals[i]);
            i++;
        }

        return result;
    };

    // Test cases:
    console.log(
        insert(
            [
                [1, 3],
                [6, 9],
            ],
            [2, 5]
        )
    ); // Output: [[1,5],[6,9]]
    console.log(
        insert(
            [
                [1, 2],
                [3, 5],
                [6, 7],
                [8, 10],
                [12, 16],
            ],
            [4, 8]
        )
    ); // Output: [[1,2],[3,10],[12,16]]
    console.log(insert([], [5, 7])); // Output: [[5,7]]
    console.log(insert([[1, 5]], [2, 3])); // Output: [[1,5]]
})();

/**
 * Patterns and Concepts
 * The primary pattern employed here is the Two Pointer Technique where the index i is moved to traverse the intervals array efficiently. This eliminates the need for any nested loops, thereby optimizing the solution.
 *
 * Time and Space Complexity
 * Time Complexity: The time complexity of this algorithm is O(n) because we iterate through the array once, and each step inside the loop takes constant time.
 *
 * Space Complexity: The space complexity is O(n) as well. This is because, in the worst-case scenario, none of the intervals overlap with the newInterval, requiring us to create a result array with all the existing intervals plus the new one.
 * This algorithm is efficient for sorting and merging intervals in a list, and it's commonly used in calendar systems, genomic ranges, and other interval-based problems.
 */
