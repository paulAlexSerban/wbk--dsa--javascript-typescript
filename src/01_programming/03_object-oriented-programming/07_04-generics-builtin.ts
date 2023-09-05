(() => {
    // builtin generics
    // Array
    // Promise
    const nums: Array<number> = [1, 2, 3, 4, 5];
    const strings: Array<string> = ["a", "b", "c", "d", "e"];

    console.log(nums);
    console.log(strings);
})();

(() => {
    // querySelector - builtin generics
    const inputElement = document.querySelector<HTMLInputElement>("input")!;
    inputElement.value = "Hello World";

    // by default the type of the element is HTMLElement, but we can specify the type as we know more about the element
    const buttonElement = document.querySelector<HTMLButtonElement>("button")!;
    buttonElement.addEventListener("click", () => {
        console.log(inputElement.value);
    });

    // using generics, we can give a function te input type and the return type
})();

(() => {
    // instead of using any, we can use generics to specify the type of the argument and the return type
    // this is useful when we want to preserve the type of the argument

    function numberIdentity<Type>(arg: Type): Type {
        return arg;
    }

    const num = numberIdentity<number>(1);
    const str = numberIdentity<string>("Hello World");
    const bool = numberIdentity<boolean>(true);

    console.log(num);
    console.log(str);
    console.log(bool);
})();

(() => {
    // we can also use generics to specify the type of the argument and the return type
    function getRandomElement<Type>(arr: Type[]): Type {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }

    // inferred type
    const numbers = [1, 2, 3, 4, 5];
    const strings = ["a", "b", "c", "d", "e"];

    const randomNum = getRandomElement<number>(numbers);
    const randomStr = getRandomElement<string>(strings);

    console.log(randomNum);
    console.log(randomStr);
})();
