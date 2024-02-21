(() => {
    interface IDocument {
        name: string;
    }

    // // This is a bad design - it violates the Interface Segregation Principle

    // abstract class Machine {
    //     name: string;
    //     constructor() {
    //         this.name = 'Machine';
    //         if (this.constructor.name === 'Machine') {
    //             throw new Error('Machine is abstract!');
    //         }
    //     }
    //     print(d: IDocument): void {}
    //     fax(d: IDocument): void {}
    //     scan(d: IDocument): void {}
    // }

    // class MultiFunctionPrinter extends Machine {
    //     print(d: IDocument): void {
    //         console.log('Print');
    //     }
    //     fax(d: IDocument): void {
    //         console.log('Fax');
    //     }
    //     scan(d: IDocument): void {
    //         console.log('Scan');
    //     }
    // }

    // class NotImplementedError extends Error {
    //     constructor(name: string) {
    //         super(`${name} is not implemented`);
    //         if (Error.captureStackTrace) {
    //             Error.captureStackTrace(this, NotImplementedError);
    //         }
    //     }
    // }

    // class OldFashionedPrinter extends Machine {
    //     print(d: IDocument): void {
    //         console.log('Print');
    //     }
    //     fax(d: IDocument): void {
    //         // -> do nothing
    //         /**
    //          * Principle of Least Surprise
    //          * this violates the principle of least surprise
    //          * when people use your API, the should not be surprised by the behavior or lack of behavior
    //          * user should get predictable results
    //          * when we leave the method empty, we break the principle of least surprise
    //          */
    //         throw new NotImplementedError('OldFashionedPrinter.fax');
    //     }
    //     scan(d: IDocument): void {
    //         throw new NotImplementedError('OldFashionedPrinter.scan');
    //     }
    // }

    /**
     * ISP = segregate (split up) the interfaces
     */

    interface IPrinter {
        print(d: IDocument): void;
    }

    interface IScanner {
        scan(d: IDocument): void;
    }

    interface IFax {
        fax(d: IDocument): void;
    }

    class Photocopier implements IPrinter, IScanner {
        print(d: IDocument): void {
            console.log('Print', d.name);
        }
        scan(d: IDocument): void {
            console.log('Scan', d.name);
        }
    }

    class MultiFunctionDevice implements IPrinter, IScanner, IFax {
        print(d: IDocument): void {
            console.log('Print', d.name);
        }
        scan(d: IDocument): void {
            console.log('Scan', d.name);
        }
        fax(d: IDocument): void {
            console.log('Fax', d.name);
        }
    }

    class OldFashionedPrinter implements IPrinter {
        print(d: IDocument): void {
            console.log('Print', d.name);
        }
    }

    class OldFashionedScanner implements IScanner {
        scan(d: IDocument): void {
            console.log('Scan', d.name);
        }
    }

    const oldFashionedPrinter = new OldFashionedPrinter();
    oldFashionedPrinter.print({ name: 'My Document' });

    const oldFashionedScanner = new OldFashionedScanner();
    oldFashionedScanner.scan({ name: 'My Document' });

    const multiFunctionDevice = new MultiFunctionDevice();
    multiFunctionDevice.print({ name: 'My Document' });
    multiFunctionDevice.scan({ name: 'My Document' });
    multiFunctionDevice.fax({ name: 'My Document' });

    const photocopier = new Photocopier();
    photocopier.print({ name: 'My Document' });
    photocopier.scan({ name: 'My Document' });
})();
