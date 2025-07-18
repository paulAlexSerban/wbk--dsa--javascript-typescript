/**
 * Checks if a given year is a leap year.
 *
 * A leap year is determined based on the following rules:
 * 1. If the year is not divisible by 4, it's not a leap year.
 * 2. If the year is divisible by 4 but not by 100, it's a leap year.
 * 3. If the year is divisible by 100 but not by 400, it's not a leap year.
 * 4. If the year is divisible by 400, it's a leap year.
 *
 * @param {number} year - The year to check if it's a leap year.
 * @returns {boolean} - True if the year is a leap year, false otherwise.
 */
function isLeapYear(year) {
    if (year % 4 !== 0) {
        return false;
    } else if (year % 100 !== 0) {
        return true;
    } else if (year % 400 !== 0) {
        return false;
    } else {
        return true;
    }
}

// Test cases
const testYears = [1800, 1900, 2000, 2004, 2100];

// Iterate through the test years
for (const year of testYears) {
    // Call the isLeapYear function for each test year and store the result
    const isLeap = isLeapYear(year);

    // Log the result in the console
    if (isLeap) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}

/**
 * MERN Project Ideas
 *
 * Event Scheduler:
 * Build a web application that allows users to schedule events and get
 * reminders. The leap year calculator can be integrated to ensure
 * correct scheduling on leap years.
 *
 * Birthday Reminder App:
 * Create an app that helps users store their friends' and family members'
 * birthdays and sends reminders when the date is near. The leap year
 * calculator can be used to handle edge cases for birthdays on February 29th.
 *
 * Historical Event Timeline: Design an application that allows users to
 * create interactive timelines for historical events. Use the leap year
 * calculator to accurately calculate durations between events, especially
 * when leap years are involved.
 *
 * Age Calculator: Build a web application that calculates a person's age
 * based on their date of birth. Incorporate the leap year calculator to
 * ensure precise age calculations, considering leap years in the process.
 *
 * Astrology and Horoscope App: Create an app that generates horoscopes based
 * on users' birth dates. The leap year calculator can help ensure accurate
 * zodiac sign determination for users born around February 29th.
 *
 * These MERN project ideas can provide opportunities to integrate the leap
 * year calculator code into various applications, helping users with
 * scheduling, reminders, and calculations that involve dates and leap years.
 */
