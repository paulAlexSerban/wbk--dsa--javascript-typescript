/**
 * In this example, we'll create a simple logging system that uses the
 * Chain of Responsibility pattern. The system will have three
 * log levels: info, warning, and error. Each logger in the chain will
 * be responsible for handling messages of a specific level, and passing
 * along messages that are outside its scope.
 */

/**
 * Define an enumeration LogLevel to represent the different log levels.
 */

const LogLevel = {
    INFO: 1,
    WARNING: 2,
    ERROR: 3,
};

/**
 * Create an abstract Logger class with the following properties and methods:
 *
 * level: the log level that the logger is responsible for
 * next: the next logger in the chain
 * log(): logs a message if the message level matches the logger's level,
 * otherwise passes the message to the next logger
 */

class Logger {
    constructor(level) {
        this.level = level;
        this.next = null;
    }

    setNext(logger) {
        this.next = logger;
        return logger;
    }

    log(level, message) {
        if (this.level === level) {
            this.writeMessage(message);
        } else if (this.next) {
            this.next.log(level, message);
        }
    }

    writeMessage(message) {
        throw new Error('writeMessage() must be implemented by subclasses');
    }
}

/**
 * Create subclasses for each log level, InfoLogger, WarningLogger, and ErrorLogger.
 * Each subclass will implement the writeMessage() method to print the message.
 */

class InfoLogger extends Logger {
    constructor() {
        super(LogLevel.INFO);
    }

    writeMessage(message) {
        console.log(`INFO: ${message}`);
    }
}

class WarningLogger extends Logger {
    constructor() {
        super(LogLevel.WARNING);
    }

    writeMessage(message) {
        console.log(`WARNING: ${message}`);
    }
}

class ErrorLogger extends Logger {
    constructor() {
        super(LogLevel.ERROR);
    }

    writeMessage(message) {
        console.log(`ERROR: ${message}`);
    }
}

/**
 * Set up a chain of loggers and log some messages.
 */

const infoLogger = new InfoLogger();
const warningLogger = new WarningLogger();
const errorLogger = new ErrorLogger();

infoLogger.setNext(warningLogger).setNext(errorLogger);

infoLogger.log(LogLevel.INFO, 'This is an informational message.');
infoLogger.log(LogLevel.WARNING, 'This is a warning message.');
infoLogger.log(LogLevel.ERROR, 'This is an error message.');

/**
 * In this example, we have created a simple logging system with
 * three log levels (info, warning, and error) and a chain of loggers
 * for handling messages at each level. The Logger class defines the
 * basic structure and the chain handling, while the InfoLogger,
 * WarningLogger, and ErrorLogger subclasses implement the specific
 * behavior for each log level. The loggers are connected in a chain
 * and handle the messages according to their assigned log level.
 */

/**
 * MERN Project Ideas
 *
 * Issue Tracker:
 * Create an issue tracker web application where users can report,
 * update, and resolve issues. Use the logging system to log different
 * levels of messages depending on the events occurring in the
 * application, such as user actions, warnings, or errors.
 *
 * E-commerce Platform:
 * Develop an e-commerce platform where users can browse products,
 * add them to their cart, and complete the purchase. Use the logging
 * system to log important events such as successful transactions,
 * failed transactions, and inventory updates.
 *
 * Social Media Application:
 * Build a social media application where users can create profiles,
 * post updates, follow other users, and interact through likes and
 * comments. Implement the logging system to track user activities,
 * suspicious behavior, or system errors.
 *
 * Online Learning Platform:
 * Create an online learning platform where users can enroll in
 * courses, watch videos, and track their progress. Integrate the
 * logging system to log various events, such as user registration,
 * course completion, or errors encountered while loading content.
 *
 * Real-time Chat Application:
 * Develop a real-time chat application where users can join chat
 * rooms and communicate with others. Use the logging system to log
 * events like user connections, disconnections, message delivery,
 * and system errors.
 *
 * In each of these MERN projects, the logging system can be integrated
 * to handle different types of messages and ensure that they are
 * logged at the appropriate level. This will help maintain a clean
 * and organized log, making it easier to diagnose issues and monitor
 * the application's performance.
 */
