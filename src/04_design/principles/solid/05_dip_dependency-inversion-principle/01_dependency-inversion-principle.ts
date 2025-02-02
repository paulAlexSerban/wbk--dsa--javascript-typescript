/**
 * DIP - Dependency Inversion Principle
 * - High-level modules should not depend on low-level modules. Both should depend on abstractions.
 */

/**
 * Some Design Patterns used to implement DIP
 * - Adapter Pattern OR Facade Pattern
 */

/**
 * This example is very similar to the Facade Pattern
 */

interface IPaymentProcessor {
    pay(amount: number): void;
}

interface IPaymentProvider {
    makePayment(amount: number): void;
}

class Store {
    private paymentProcessor: IPaymentProcessor;
    constructor(paymentProcessor: IPaymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    purchaseBike(quantity: number) {
        this.paymentProcessor.pay(200 * quantity);
    }

    purchaseHelmet(quantity: number) {
        this.paymentProcessor.pay(15 * quantity);
    }
}

class StripePaymentProcessor implements IPaymentProcessor {
    private stripe: Stripe;
    constructor(user: string) {
        this.stripe = new Stripe(user);
    }

    pay(amountInDollars: number) {
        this.stripe.makePayment(amountInDollars * 100);
    }
}

class PaypalPaymentProcessor implements IPaymentProcessor {
    private paypal: Paypal;
    constructor(user: string) {
        this.paypal = new Paypal(user);
    }

    pay(amountInDollars: number) {
        this.paypal.makePayment(amountInDollars * 100);
    }
}

class Stripe implements IPaymentProvider {
    private user: string;
    constructor(user: string) {
        this.user = user;
    }

    makePayment(amountInCents: number) {
        console.log(`${this.user} made a payment using Stripe of $${amountInCents / 100}`);
    }
}

class Paypal implements IPaymentProvider {
    private user: string;
    constructor(user: string) {
        this.user = user;
    }

    makePayment(amountInCents: number) {
        console.log(`${this.user} made a payment using Paypal of $${amountInCents / 100}`);
    }
}

const store = new Store(new StripePaymentProcessor('John'));
store.purchaseBike(2);
store.purchaseHelmet(2);

const store2 = new Store(new PaypalPaymentProcessor('John'));
store2.purchaseBike(2);
store2.purchaseHelmet(2);
