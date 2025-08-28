/**
 * Determines if the dog barks.
 *
 * @param {boolean} isNight - Whether it's nighttime.
 * @param {number} hour - The current hour (0-23).
 * @returns {boolean} - True if the dog barks, false otherwise.
 */
function shouldBark(isNight, hour) {
    // Dog barks at night between 22:00 and 6:00
    if (isNight && (hour < 6 || hour > 22)) {
        return true;
    }
    return false;
}

// Test cases
const testCases = [
    { isNight: true, hour: 23 },
    { isNight: true, hour: 6 },
    { isNight: false, hour: 2 },
    { isNight: false, hour: 10 },
];

// Iterate through the test cases
for (const testCase of testCases) {
    // Call the shouldBark function and store the result
    const result = shouldBark(testCase.isNight, testCase.hour);

    // Log the result in the console
    console.log(
        `The dog ${result ? 'barks' : "doesn't bark"} at ${testCase.hour}:00 during ${
            testCase.isNight ? 'night' : 'day'
        }.`
    );
}

/**
 * MERN Project Ideas
 * Pet Behavior Tracker:
 * Build a web application that allows users to track and analyze their
 * pet's behavior. The "barking dog" code can be used to simulate pet
 * behavior based on the time of day.
 *
 * Smart Home System:
 * Develop a smart home system where users can control various devices
 * and get notifications about events happening in their home. The "barking dog"
 * code can be used to simulate a virtual guard dog that alerts users to
 * potential intruders during the night.
 *
 * Pet Adoption Platform:
 * Create a platform where users can browse and adopt pets from shelters.
 * The "barking dog" code can be used to simulate pet behavior and provide
 *  more information to potential adopters.
 *
 * Virtual Pet Game: Design a virtual pet game where users can interact with
 * and take care of a digital pet. The "barking dog" code can be used to
 * simulate pet behavior and create a more realistic experience.
 *
 * Dog Training App: Build a web application that provides dog training
 * tips and resources. The "barking dog" code can be used to demonstrate
 * the effect of various training techniques on dog behavior.
 *
 * These MERN project ideas demonstrate how you can integrate the "barking dog"
 * code into various applications that deal with pet behavior, smart home
 * systems, and pet-related games or services.
 */
