/**
 * Time Conversion
 *
 * Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
 * Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock.
 * Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.
 *
 * Example:
 * s = '12:01:00PM'
 * Return '12:01:00'.
 *
 * s = '12:01:00AM'
 * Return '00:01:00'.
 *
 * Function Description
 * Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.
 * timeConversion has the following parameter(s):
 * - s: a string representing time in 12 hour format
 *
 * Input Format
 * A single string s containing a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM), where 01 <= hh <= 12 and 00 <= mm, ss <= 59.
 *
 * Constraints
 * All input times are valid
 *
 * Output Format
 * Convert and print the given time in 24-hour format, where 00 <= hh <= 23.
 *
 * Sample Input 0
 * 07:05:45PM
 *
 * Sample Output 0
 * 19:05:45
 *
 * @param {string} s
 * @returns {string}
 */

(() => {
    function timeConversion(string) {
        let time = string.slice(0, 8);
        let period = string.slice(8);
        let [hours, minutes, seconds] = time.split(':');
        if (period === 'PM' && hours !== '12') {
            hours = parseInt(hours, 10) + 12;
        } else if (period === 'AM' && hours === '12') {
            hours = '00';
        }
        return `${hours}:${minutes}:${seconds}`;
    }

    console.log(timeConversion('07:05:45PM')); // 19:05:45
    console.log(timeConversion('12:01:00PM')); // 12:01:00
    console.log(timeConversion('12:01:00AM')); // 00:01:00
    console.log(timeConversion('12:00:00AM')); // 00:00:00
})();
