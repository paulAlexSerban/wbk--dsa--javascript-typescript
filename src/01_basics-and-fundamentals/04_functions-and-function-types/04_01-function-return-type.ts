/**
 * Functions return type
 *
 * you can set the type of the return of the function
 * Eg. `function name(): number {}`
 *
 * NOTE: if you set the return type of the function, you must return a value
 *
 * The `:void` type - states that the function does not have a return statement
 */

(() => {
    function cumulate(n1: number, n2: number): number {
        return n1 + n2;
    }
    console.log(cumulate(10, 20));
})();

(() => {
    function printResult(num: number): void {
        console.log("Result:", num);
    }
    console.log(printResult(10));
})();

(() => {
    /**
     * Callback type
     */

    function addAndHandle(n1: number, n2: number, callback: (num: number) => void): void {
        const result = n1 + n2;
        callback(result);
    }

    addAndHandle(20, 10, (result: number) => {
        console.log("Result:", result);
    });
})();

(() => {
    interface User {
        id: number;
        firstName: string;
        lastName: string;
        role: "admin" | "user" | "super-admin";
        posts: Array<Post>;
    }

    interface Post {
        id: number;
        title: string;
    }

    /**
     * How do we ensure that makeUser ALWAYS
     * returns a user?
     */
    const makeUser = (): User => {
        return {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            role: "admin",
            posts: [
                {
                    id: 1,
                    title: "How I eat so much cheese",
                },
                {
                    id: 2,
                    title: "Why I don't eat more vegetables",
                },
            ],
        };
    };

    const user = makeUser();
    console.log(user);
})();
