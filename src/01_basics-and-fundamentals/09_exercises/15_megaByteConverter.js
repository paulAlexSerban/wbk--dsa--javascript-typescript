/**
 * Converts bytes to megabytes.
 *
 * @param {number} bytes - The number of bytes to convert.
 * @returns {number} - The number of bytes converted to megabytes.
 */
function bytesToMegabytes(bytes) {
    // 1 megabyte is equal to 1048576 bytes
    const megabytes = bytes / 1048576;
    return megabytes;
}

// Test cases
const testBytes = [1048576, 5242880, 10485760, 20971520, 31457280];

// Iterate through the test cases
for (const bytes of testBytes) {
    // Call the bytesToMegabytes function and store the result
    const megabytes = bytesToMegabytes(bytes);

    // Log the result in the console
    console.log(`${bytes} bytes is equal to ${megabytes.toFixed(2)} megabytes.`);
}

/**
 * MERN Project Ideas
 *
 * File Storage Service:
 * Build a web application that allows users to upload, store,
 * and manage files. The megabyte converter can be used to display
 * file sizes in a user-friendly format.
 *
 * Bandwidth Monitor:
 * Create an app that monitors the user's internet bandwidth usage
 * and displays usage statistics in real-time. The megabyte converter
 * can help display the data usage in a more understandable format.
 *
 * Video Streaming Platform:
 * Develop a video streaming platform that provides users with video
 * content. The megabyte converter can be used to display video file
 * sizes and help users estimate their data usage.
 *
 * Image Compression Tool: Design an application that allows users
 * to compress and optimize images for faster loading on websites.
 * The megabyte converter can be used to show users the size of
 * their images before and after compression.
 *
 * Data Transfer Calculator: Build a web application that helps users
 * estimate the time required to transfer data between devices or
 * over the internet based on file size and transfer speed. The megabyte
 * converter can be used to convert file sizes for better user experience.
 *
 * These MERN project ideas demonstrate how you can integrate the megabyte
 * converter code into various applications that deal with file sizes,
 * data usage, and data transfer calculations.
 */
