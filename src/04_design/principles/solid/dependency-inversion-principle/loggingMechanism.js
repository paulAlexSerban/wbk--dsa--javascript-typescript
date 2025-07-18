/**
 * Dependency Inversion Principle
 * - an example involving a simple logging mechanism
 * - we'll use abstraction (through function arguments) to invert the dependency, allowing our high-level module (e.g., a service or component) to remain independent of the low-level module (e.g., a specific logging implementation)
 */

/**
 * define a generic logging interface
 */
// Logging interface
function logMessage(message) {
    console.log(message);
}

function logError(error) {
    console.error(error);
}

const logger = {
    log: logMessage,
    error: logError,
};

/**
 * create a high-level module (like a service) that depends on this logging abstraction rather than a concrete logging implementation:
 */

// High-level module
class DataService {
    constructor(logger) {
        this.logger = logger;

        this.fetchData = async function (url) {
            try {
                const response = await fetch(url);
                const data = await response.json();
                this.logger.log(`Data fetched successfully from ${url}`);
                return data;
            } catch (error) {
                this.logger.error(`Error fetching data from ${url}: ${error}`);
                throw error;
            }
        };
    }
}

/**
 * use our DataService with our logger abstraction:
 */

const dataService = new DataService(logger);
dataService
    .fetchData('https://jsonplaceholder.typicode.com/todos/1')
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

/**
 * The DataService class is a high-level module that requires some logging functionality. Instead of directly using console methods or a specific logging library, it uses the logger abstraction passed to it.
 * The logger object serves as an abstraction over the actual logging implementation. It adher
 */
