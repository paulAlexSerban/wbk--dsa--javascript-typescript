(() => {
    const userInputElement = document.getElementById("user-input");

    if (userInputElement) {
        (userInputElement as HTMLInputElement).value = "Hi there!";
    }

    interface ErrorContainer {
        // { email: 'Not a valid email', username: 'Must start with a character!' }
        // index properties
        // we don't know the name of the property, but we know the type of the property
        // we can have as many properties as we want
        // the property name must be a string
        // the property value must be a string
        // the property name can be anything, but the property value must be a string
        [prop: string]: string;
    }

    const errorBag: ErrorContainer = {
        email: "Not a valid email!",
        username: "Must start with a capital character!",
    };

    console.log(errorBag);
})();
