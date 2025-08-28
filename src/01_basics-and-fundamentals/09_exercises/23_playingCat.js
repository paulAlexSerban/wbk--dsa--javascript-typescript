/**
 * Playing Cat
 *
 * This function determines if the cat is playing based on the temperature.
 *
 * @param {boolean} summer - Indicates if it's summer
 * @param {number} temperature - The current temperature
 * @returns {boolean} True if the cat is playing, false otherwise
 */

function isCatPlaying(summer, temperature) {
    // If it's summer the upper limit is 45, otherwise it's 35
    const upperLimit = summer ? 45 : 35;

    // If the temperature is between 25 and the upper limit, the cat is playing
    return temperature >= 25 && temperature <= upperLimit;
}

// Test cases
console.log(isCatPlaying(true, 36)); // true
console.log(isCatPlaying(false, 36)); // false

/**
 * MERN Project Ideas
 *
 * Pet Care App:
 * Build a pet care app that helps users monitor and care for their pets.
 * The "playing cat" code can be used to determine if it's a suitable temperature for outdoor activities with the cat.
 *
 * Local Weather App:
 * Develop a local weather app that provides information about temperature and weather conditions.
 * The "playing cat" code can be used to suggest if it's a good time for users to play with their cats outside.
 *
 * Pet Adoption Platform:
 * Create a platform where users can find and adopt cats. The "playing cat" code can be used to
 * provide temperature-related tips for new cat owners.
 *
 * Cat Health Monitoring System:
 * Design a system that helps users monitor the health and well-being of their cats.
 * The "playing cat" code can be used to determine if the current temperature is suitable for playtime.
 *
 * Cat Lovers Social Network:
 * Build a social network for cat lovers to connect and share experiences.
 * The "playing cat" code can be used to provide temperature-based suggestions for users' shared content.
 *
 * In each of these MERN project ideas, the "playing cat" code can be integrated
 * as a utility function or component that is available throughout the application.
 * This will ensure that users can easily access temperature-related suggestions for their cats' activities.
 */
