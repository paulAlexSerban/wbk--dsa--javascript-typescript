(() => {
    type Combinable = string | number;

    // FUNCTION OVERLOAD
    // we tell and assure the TS compiler that, if we call it with 2 numbers, we always get back a number
    function add(a: number, b: number): number;
    // we tell and assure the TS compiler that, if we call it with 2 strings, we always get back a string
    function add(a: string, b: string): string;
    // we tell and assure the TS compiler that, if we call it with 1 number and 1 string, we always get back a string
    function add(a: number, b: string): string;
    // we tell and assure the TS compiler that, if we call it with 1 string and 1 number, we always get back a string
    function add(a: string, b: number): string;

    function add(a: Combinable, b: Combinable) {
        if (typeof a === "string" || typeof b === "string") {
            return a.toString() + b.toString();
        }
        return a + b;
    }

    const result = add("Max", " Schwarz");
    // now TS knows that result is a string
    result.split(" ");
})();
