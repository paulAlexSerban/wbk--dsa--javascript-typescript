/**
 * Enumerations
 * ======================
 * Enumerations allow us to define a set of named constants. Using enums can make it easier to
 * document intent, or create a set of distinct cases. TypeScript provides both numeric and
 * string-based enums.
 */

(() => {
    enum Role {
        ADMIN,
        READ_ONLY = 200,
        AUTHOR 
    }

    const person: {
        name: string;
        age: number;
        hobbies: string[];
        role: number; // Enum Type
    } = {
        name: "John",
        age: 30,
        hobbies: ["Sports", "Cooking"],
        role: Role.ADMIN,
    };

    console.log(person.role); // 0

    enum OrderStatus {
        PENDING,
        PROCESSING,
        COMPLETE,
    }

    const order = {
        status: OrderStatus.PROCESSING,
    };

    console.log(order.status === OrderStatus.PROCESSING); // true

    /**
     * Note:
     * =====
     * Because enums get transpiled into newer and bigger objects, TypeScript kind of moved away from
     * using enums and instead uses union types.
     * 
     * Enums are not commonly used in modern TypeScript projects.
     **/ 
})();
