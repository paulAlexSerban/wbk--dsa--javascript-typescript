/**
 * Minutes to Years and Days
 *
 * This function converts minutes to years and days.
 *
 * @param {number} minutes - The number of minutes to convert
 * @returns {Object} An object containing years and days
 */

function minutesToYearsAndDays(minutes) {
    const minutesInADay = 24 * 60;
    const minutesInAYear = 365 * minutesInADay;

    const years = Math.floor(minutes / minutesInAYear);
    const remainingMinutes = minutes % minutesInAYear;
    const days = Math.floor(remainingMinutes / minutesInADay);

    return { years, days };
}

// Test cases
console.log(minutesToYearsAndDays(3456789)); // { years: 6, days: 210 }
console.log(minutesToYearsAndDays(1000000)); // { years: 1, days: 329 }

/**
 * MERN Project Ideas
 *
 * Time Tracking App:
 * Build a web application for tracking time spent on various tasks.
 * The "minutes to years and days" code can be used to convert time data for reporting and analysis.
 *
 * Employee Attendance System:
 * Develop an employee attendance system where users can log their work hours.
 * The "minutes to years and days" code can be used to display total time spent working in years and days.
 *
 * Project Management Tool:
 * Create a project management tool where users can track the progress of their projects and tasks.
 * The "minutes to years and days" code can be used to display the total time spent on a project.
 *
 * Personal Finance App:
 * Design a personal finance app that helps users track their expenses and savings over time.
 * The "minutes to years and days" code can be used to convert time-related data for analysis and planning.
 *
 * Online Education Platform:
 * Build an online education platform where users can track their progress and time spent learning.
 * The "minutes to years and days" code can be used to display the total time spent on courses or lessons.
 *
 * In each of these MERN project ideas, the "minutes to years and days" code can be integrated
 * as a utility function or component that is available throughout the application.
 * This will ensure that users can easily convert time-related data for analysis and reporting purposes.
 */
