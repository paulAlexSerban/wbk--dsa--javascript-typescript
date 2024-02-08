(() => {
    /**
     * ReturnType<Type>
     *
     * For overloaded functions, this will be the return type of the last overload in the type list signature.
     */

    const add = (a: number, b: number): number => {
        return a + b;
    };

    function subtract(a: number, b: number): number {
        return a - b;
    }

    type AddReturnType = ReturnType<typeof add>;
    type SubtractReturnType = ReturnType<typeof subtract>;
    type AddOrSubtractReturnType = ReturnType<typeof add | typeof subtract>;

    const addReturnType: AddReturnType = 1;
    const subtractReturnType: SubtractReturnType = 1;
    const addOrSubtractReturnType: AddOrSubtractReturnType = 1;

    console.log(addReturnType);
    console.log(subtractReturnType);
    console.log(addOrSubtractReturnType);
})();
