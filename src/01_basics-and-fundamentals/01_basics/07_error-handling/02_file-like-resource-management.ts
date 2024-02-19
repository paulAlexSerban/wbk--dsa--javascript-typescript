/**
 * Objective: Imagine you have a file-like resource class named FileResource that has methods for
 * open(), read(), and close(). Write a function named readResource that creates an instance of
 * FileResource, attempts to open and read from it, and ensures the resource is always closed
 * after the operation, regardless of whether an error occurred during reading.
 */

/**
 * Requirements:
 *
 * Simulate the FileResource class with stub methods for open(), read(), and close().
 * The read() method should randomly throw an error to simulate read failure.
 * Use a try...catch...finally block to ensure proper resource management.
 * Log messages to indicate the status of operations (e.g., "Resource opened",
 * "Reading resource", "Error reading resource", "Resource closed").
 */

/**
 * Example FileResource Class:
 */
export class FileResource {
    open() {
        console.log('Resource opened');
    }

    read() {
        console.log('Reading resource');
        if (Math.random() > 0.5) {
            throw new Error('Error reading resource');
        }
        return 'Resource content';
    }

    close() {
        console.log('Resource closed');
    }
}

/**
 * readResource();
 */

// Solution

export const readResource = () => {
    const resource = new FileResource();
    try {
        resource.open();
        resource.read();
    } catch (error) {
        console.log('Error reading resource:', error);
    } finally {
        resource.close();
    }
};
