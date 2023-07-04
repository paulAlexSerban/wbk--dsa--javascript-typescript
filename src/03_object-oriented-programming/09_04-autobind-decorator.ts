(() => {
    // other decorator returns
    // autobind decorator

    function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        const adjustedDescriptor: PropertyDescriptor = {
            configurable: true,
            enumerable: false,
            get() {
                const boundFn = originalMethod.bind(this);
                return boundFn;
            },
        };
        return adjustedDescriptor;
    }

    class Printer {
        message = "This works!";

        // instead of using the autobind decorator, we can use the bind method
        @Autobind
        showMessage() {
            console.log(this.message);
        }
    }

    const p = new Printer();
    const button = document.querySelector("button")!;
    // button.addEventListener("click", p.showMessage.bind(p));
    button.addEventListener("click", p.showMessage);
})();
