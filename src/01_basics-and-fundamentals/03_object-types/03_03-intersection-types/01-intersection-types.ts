(() => {
    type Admin = {
        name: string;
        privileges: string[];
    };

    type Employee = {
        name: string;
        startDate: Date;
    };

    // intersection types
    type ElevatedEmployee = Admin & Employee;

    const e1: ElevatedEmployee = {
        name: "John",
        privileges: ["create-server"],
        startDate: new Date(),
    };

    console.log(e1);
})();

// intersection types are closely related to interfaces inheritance
(() => {
    interface Admin {
        name: string;
        privileges: string[];
    }

    interface Employee {
        name: string;
        startDate: Date;
    }

    // intersection types
    interface ElevatedEmployee extends Admin, Employee {
        role: string;
    }

    const e1: ElevatedEmployee = {
        name: "John",
        privileges: ["create-server"],
        startDate: new Date(),
        role: "admin",
    };

    console.log(e1);

    // type guards
    interface UnknownEmployee extends ElevatedEmployee {}

    const printEmployeeInformation = (emp: UnknownEmployee) => {
        console.log(`Name: ${emp.name}`);
        // type guard
        if ("privileges" in emp) {
            console.log(`Privileges: ${emp.privileges}`);
        }
        if ("role" in emp) {
            console.log(`Role: ${emp.role}`);
        }
    };

    printEmployeeInformation(e1);
})();

(() => {
    // intersection types
    type Combine = string | number;
    type Numeric = number | boolean;
    type Universal = Combine & Numeric;

    const u1: Universal = 1;
    console.log(u1);

    // type guards
    const add = (a: Combine, b: Combine) => {
        if (typeof a === "string" || typeof b === "string") {
            return a.toString() + b.toString();
        }
        return a + b;
    };

    console.log(add(1, 2));
})();

(() => {
    class Car {
        drive() {
            console.log("Driving...");
        }
    }

    class Truck {
        drive() {
            console.log("Driving a truck...");
        }

        loadCargo(amount: number) {
            console.log(`Loading cargo: ${amount}`);
        }
    }

    type Vehicle = Car | Truck;

    const v1 = new Car();
    const v2 = new Truck();
    const v3 = { drive: () => console.log("Driving...") };
    const v4 = {
        drive: () => console.log("Driving a truck..."),
        loadCargo: (amount: number) => console.log(`Loading cargo: ${amount}`),
    };

    const useVehicle = (vehicle: Vehicle) => {
        vehicle.drive();
        // type guard
        if (vehicle instanceof Truck) {
            vehicle.loadCargo(1000);
        }
    }

    useVehicle(v1);
    useVehicle(v2);
    useVehicle(v3);
    useVehicle(v4);
})();
