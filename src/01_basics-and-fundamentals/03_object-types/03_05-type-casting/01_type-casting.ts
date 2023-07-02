(() => {
    // this is a type casting, but it's not recommended as it can lead to runtime errors in React
    const userInputElement = <HTMLInputElement>document.getElementById("user-input");
    userInputElement.value = "Hi there!";
})();

(() => {
    // this is the recommended way to do type casting
    // adding the exclamation mark at the end of the expression tells TypeScript that we know that this will never be null
    const userInputElement = document.getElementById("user-input")! as HTMLInputElement;
    userInputElement.value = "Hi there!";
})();


(() => {
    const userInputElement = document.getElementById("user-input");
    if (userInputElement) {
        (userInputElement as HTMLInputElement).value = "Hi there!";
    }
})()