/**
 * Converts speed between different units.
 *
 * @param {number} speed - The speed to convert.
 * @param {string} fromUnit - The original unit of the speed (km/h, mph, m/s).
 * @param {string} toUnit - The target unit for the converted speed (km/h, mph, m/s).
 * @returns {number} - The converted speed in the target unit.
 */
function convertSpeed(speed, fromUnit, toUnit) {
    // Constants for conversion factors
    const KM_H_TO_MPH = 0.621371;
    const KM_H_TO_MS = 0.277778;
    const MPH_TO_KM_H = 1.60934;
    const MPH_TO_MS = 0.44704;
    const MS_TO_KM_H = 3.6;
    const MS_TO_MPH = 2.23694;

    let convertedSpeed;

    // Convert the speed based on the provided units
    if (fromUnit === 'km/h') {
        if (toUnit === 'mph') {
            convertedSpeed = speed * KM_H_TO_MPH;
        } else if (toUnit === 'm/s') {
            convertedSpeed = speed * KM_H_TO_MS;
        }
    } else if (fromUnit === 'mph') {
        if (toUnit === 'km/h') {
            convertedSpeed = speed * MPH_TO_KM_H;
        } else if (toUnit === 'm/s') {
            convertedSpeed = speed * MPH_TO_MS;
        }
    } else if (fromUnit === 'm/s') {
        if (toUnit === 'km/h') {
            convertedSpeed = speed * MS_TO_KM_H;
        } else if (toUnit === 'mph') {
            convertedSpeed = speed * MS_TO_MPH;
        }
    }

    return convertedSpeed;
}

// Test cases
const testCases = [
    { speed: 100, fromUnit: 'km/h', toUnit: 'mph' },
    { speed: 60, fromUnit: 'mph', toUnit: 'km/h' },
    { speed: 50, fromUnit: 'km/h', toUnit: 'm/s' },
    { speed: 20, fromUnit: 'm/s', toUnit: 'km/h' },
];

// Iterate through the test cases
for (const testCase of testCases) {
    // Call the convertSpeed function and store the result
    const result = convertSpeed(testCase.speed, testCase.fromUnit, testCase.toUnit);

    // Log the result in the console
    console.log(`${testCase.speed} ${testCase.fromUnit} is equal to ${result.toFixed(2)} ${testCase.toUnit}.`);
}

/**
 * MERN Project Ideas
 *
 * Fitness Tracking App:
 * Build a web application that allows users to track their workouts and analyze
 * their performance. The "speed converter" code can be used to convert between
 * different speed units based on user preferences.
 *
 * Travel Planning App:
 * Develop a travel planning app where users can find information about various
 * transportation options. The "speed converter" code can be used to display
 * speeds in the user's preferred unit.
 *
 * Vehicle Comparison Platform:
 * Create a platform where users can compare the specifications of different vehicles.
 * The "speed converter" code can be used to convert between different speed
 * units for easy comparison.
 *
 * Weather Forecast App: Design a weather forecast app that provides information
 * about wind speeds and other weather conditions. The "speed converter" code can
 * be used to convert wind speeds between different units based on user preferences.
 *
 * Sports Analytics Platform: Build a platform for analyzing sports performance
 * data, such as player statistics and game data. The "speed converter" code can
 * be used to convert speed-related metrics between different units, making it
 * easier for users to understand and compare player performances.
 *
 * In each of these MERN project ideas, the "speed converter" code can be integrated
 * as a utility function or component that is available throughout the application.
 * This will ensure that users can view and compare speed-related data in their
 * preferred units, providing a more personalized and user-friendly experience.
 */
