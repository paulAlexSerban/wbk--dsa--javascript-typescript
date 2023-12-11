(() => {
    /**
     * 
     * Your tryCatchDemo function does not return any value when the state is "succeed". In JavaScript and TypeScript, if a function doesn't explicitly return a value, it returns undefined. Therefore, when you run tryCatchDemo("succeed"), it will return undefined.
     * The function is throwing an error when the state is "fail", and it is catching that error and returning the error message.
     * Here is a version of your function that returns a success message when the state is "succeed":
  */

    const tryCatchDemo = (state: "fail" | "succeed"): string => {
        try {
            if (state === "fail") {
                throw new Error("Failure!");
            } else {
                return "Success!";
            }
        } catch (e) {
            if (e instanceof Error) {
                return e.message;
            } else {
                // You might want to re-throw the error if it's not an instance of Error
                throw e;
            }
        }
    };

    console.log(tryCatchDemo("fail")); // Logs: Failure!
    console.log(tryCatchDemo("succeed")); // Logs: Success!
    /**
     * In this version, the function will return "Success!" if the state is "succeed". If the state is "fail", it will throw an error and return the error message. If any other type of error is caught (not an instance of Error), it will be re-thrown. The return type of the function is explicitly set to string for better type safety.
     */
})();
