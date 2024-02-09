/**
 * You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
 * Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
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
 * Constraints:
 * 0 <= intervals.length <= 104
 * intervals[i].length == 2
 * 0 <= starti <= endi <= 105
 * intervals is sorted by starti in ascending order.
 * newInterval.length == 2
 * 0 <= start <= end <= 105
 */

function insert(intervals: number[][], newInterval: number[]): number[][] {
    // Create a variable to store the result
    const result: number[][] = [];
    let i = 0;

    // Iterate through the intervals
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        // If the end of the current interval is less than the start of the new interval, push the current interval to the result
        result.push(intervals[i]);
        i++;
    }
    // Merge overlapping intervals
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
      // If the start of the current interval is less than the end of the new interval, update the new interval
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        // If the end of the current interval is greater than the end of the new interval, update the new interval
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    // Push the new interval to the result
    result.push(newInterval);
    // Push the remaining intervals to the result
    while (i < intervals.length) {
      // If the end of the current interval is greater than the start of the new interval, push the current interval to the result
        result.push(intervals[i]);
        i++;
    }
    return result;
}

export default insert;