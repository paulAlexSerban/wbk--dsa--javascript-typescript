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
})();
