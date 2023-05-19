/**
 * Object Types
 * ============
 * Object types are used to describe the shape of an object.
 */

(() => {
    const person: {
        name: string;
        age: number;
    } = {
        name: "John",
        age: 30,
    };

    const product: {
        id: string;
        price: number;
        tags: string[];
        details: {
            title: string;
            description: string;
        };
    } = {
        id: "abc1",
        price: 12.99,
        tags: ["great-offer", "hot-and-new"],
        details: {
            title: "Red Carpet",
            description: "A great carpet - almost brand-new!",
        },
    };
})();
