interface IPrinter {
  print: () => void;
  turnOn: () => void;
}

const createPrinter = (): IPrinter => {
  const print = () => {
    console.log("Printing a page");
  };

  const turnOn = () => {
    console.log("Turning on the printer");
  };

  return {
    print,
    turnOn,
  };
};

const printerInstance: IPrinter = createPrinter();

export const singletonPrinter = {
  getInstance: () => printerInstance,
};
