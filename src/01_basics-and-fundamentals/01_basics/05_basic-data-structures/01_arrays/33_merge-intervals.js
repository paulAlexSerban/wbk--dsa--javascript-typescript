/**
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

Constraints:

1 <= intervals.length <= 10^4
intervals[i].length == 2
0 <= starti <= endi <= 10^4
 */

(() => {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    const merge = (intervals) => {
        // Sorting the intervals array based on the starting interval.
        // This is crucial as it helps in comparing the current interval to the previous one seamlessly.
        intervals.sort((a, b) => a[0] - b[0]);

        // Initializing an array to store the resultant merged intervals.
        const result = [];

        // Considering the first interval as the previous interval initially.
        let prev = intervals[0];

        // Looping through the intervals starting from the second interval.
        for (let i = 1; i < intervals.length; i++) {
            // Assigning the current interval from the array to a variable, 'curr'.
            const curr = intervals[i];

            // If the end of the 'prev' interval is greater than or equal to the start of the 'curr' interval,
            // it means they are overlapping. So, we merge them.
            if (prev[1] >= curr[0]) {
                // Updating the end of 'prev' interval to be the maximum of the ends of 'prev' and 'curr' intervals.
                prev[1] = Math.max(prev[1], curr[1]);
            } else {
                // If 'prev' and 'curr' intervals are not overlapping, then we push 'prev' to the result
                // and update 'prev' to be 'curr' for the next iteration.
                result.push(prev);
                prev = curr;
            }
        }

        // After exiting the loop, we push the last 'prev' interval to the result.
        result.push(prev);

        // Returning the resultant array of merged intervals.
        return result;
    };

    const intervals = [
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
    ];
    console.log(merge(intervals)); // [[1,6],[8,10],[15,18]]
})();
