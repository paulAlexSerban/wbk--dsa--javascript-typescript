/**
 * Dependency Inversion Principle
 * Example with a payment processing system
 * This example will demonstrate how high-level modules (like a checkout service) can depend on abstractions (payment method interfaces) rather than concrete implementations (specific payment processors).
 */

/**
 * we'll define abstract interfaces for different payment methods
 */

// Payment method interfaces
function processCreditCardPayment(amount) {
    console.log(`Processing credit card payment: $${amount}`);
    // Implementation for credit card processing
}

function processPayPalPayment(amount) {
    console.log(`Processing PayPal payment: $${amount}`);
    // Implementation for PayPal processing
}

const paymentProcessor = {
    creditCard: processCreditCardPayment,
    payPal: processPayPalPayment,
};

/**
 * create a high-level module (like an order processing service) that depends on these payment method abstractions:
 */

// High-level module
class OrderService {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;

        this.processOrder = function (orderDetails) {
            console.log(`Order received: ${orderDetails.description}`);
            // Assume orderDetails contains paymentType and amount
            switch (orderDetails.paymentType) {
                case 'creditCard':
                    this.paymentProcessor.creditCard(orderDetails.amount);
                    break;
                case 'payPal':
                    this.paymentProcessor.payPal(orderDetails.amount);
                    break;
                default:
                    console.log('Unsupported payment method.');
            }
        };
    }
}

/**
 * use our OrderService with our payment processor:
 */

const orderService = new OrderService(paymentProcessor);
orderService.processOrder({ description: 'Book purchase', paymentType: 'creditCard', amount: 20 });
orderService.processOrder({ description: 'Online course subscription', paymentType: 'payPal', amount: 100 });

/**
 * OrderService is a high-level module that requires functionality for processing payments. It uses paymentProcessor, an abstraction over different payment methods.
 * paymentProcessor is an object that abstracts away the details of each payment method. It allows OrderService to invoke payment processing without depending directly on specific implementations of each payment method.
 * This design follows the DIP by decoupling OrderService from the concrete payment processing logic. It makes the system flexible and easily extendable, for instance, if a new payment method needs to be added in the future.
 */
