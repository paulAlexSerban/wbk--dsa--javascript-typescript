(() => {
    // Decorator returning a class in a class decorator
    function WithTemplate(template: string, hookId: string) {
        console.log("TEMPLATE FACTORY");
        return function <T extends { new (...args: any[]): { name: string } }>(originalConstructor: T) {
            return class extends originalConstructor {
                constructor(..._: any[]) {
                    super();
                    console.log("Rendering template");
                    const hookEl = document.getElementById(hookId);
                    if (hookEl) {
                        hookEl.innerHTML = template;
                        hookEl.querySelector("h1")!.textContent = this.name;
                    }
                }
            };
        };
    }

    @WithTemplate("<h1>My Person Object</h1>", "app")
    class Person {
        name = "Max";

        constructor() {
            console.log("Creating person object...");
        }
    }

    const person = new Person();
    console.log(person);
})();
