/**
 * Dependency Inversion Principle
 * An example using a notification system
 * We will abstract the notification mechanism so that our high-level module (such as a user service) can remain independent of the low-level modules (specific ways of sending notifications).
 */
// Notification interface
function emailNotification(message) {
    // Simulating an email notification
    console.log(`Email sent: ${message}`);
}

function smsNotification(message) {
    // Simulating an SMS notification
    console.log(`SMS sent: ${message}`);
}

const notificationService = {
    sendEmail: emailNotification,
    sendSMS: smsNotification,
};

/**
 * we create a high-level module (like a user service) that depends on this notification abstraction:
 */

// High-level module
class UserService {
    constructor(notificationService) {
        this.notificationService = notificationService;

        this.registerUser = function (email, phone) {
            // Perform registration logic...
            console.log('User registered successfully.');

            // Send notifications
            this.notificationService.sendEmail(`Welcome! Email registered: ${email}`);
            this.notificationService.sendSMS(`Welcome! SMS number registered: ${phone}`);
        };
    }
}

/**
 * use our UserService with our notification service abstraction:
 */
const userService = new UserService(notificationService);
userService.registerUser('user@example.com', '+1234567890');

/**
 * The UserService class is a high-level module that requires functionality to send notifications. Instead of directly implementing email or SMS notifications, it uses the notificationService abstraction.
 * The notificationService object serves as an abstraction layer for different types of notifications. It follows the DIP by allowing UserService to remain independent of the specific notification mechanisms.
 * This design makes it easy to extend or modify the notification system (like adding a new notification method) without changing the UserService code.
 */
