(() => {
    const { log } = console;
    class Department {
        name: string;
        protected employees: string[] = [];

        constructor(n: string) {
            this.name = n;
        }

        /**
         * describe
         * @description - this method prints the name of the department
         * @param this: Department - this is a dummy parameter that tells typescript that the method is bound to the class instance
         * @returns void
         * - this method is not available on the prototype
         * - the 'this' is a special keyword that refers to the class instance that is calling the method
         * - when describe is executed, this will refer to an instance that is based on the Department class
         * - the `this` dummy parameter is a way to tell typescript that the method is bound to the class instance
         * - The parameter of this method (this: Department) is a TypeScript feature, not a JavaScript feature. It's used to tell
         * TypeScript that this inside describe should always be of type Department.
         */
        describe(this: Department) {
            log("Department: " + this.name);
        }

        /**
         *
         * @param employee (String)
         */
        addEmployee(employee: string) {
            this.employees.push(employee);
        }

        /**
         * printEmployeeInformation
         * @description - this method prints the number of employees and the list of employees
         * @returns void
         */
        printEmployeeInformation() {
            log(this.employees.length);
            log(this.employees);
        }

        static createEmployee(name: string) {
            return { name: name };
        }

        /**
         * An abstract method can only exist in an abstract class, and it serves as a placeholder for a method that must be implemented
         * in any non-abstract child class. But in this case, it doesn't make sense and should be removed, because Department isn't
         * declared as an abstract class.
         * - abstract methods must be implemented by derived classes
         * - abstract methods cannot be implemented in the base class
         * - abstract methods cannot be private
         */
        // abstract printMeeting(): void;
    }

    const accounting = new Department("Accounting");
    accounting.describe();

    /**
     * this will throw an error because the this keyword is not bound to the class instance
     * whe you call describe, the this keyword will refer to the accountingCopy object, not the accounting object
     */
    // accountingCopy.describe();
    const accountingCopy = { name: "DUMMY", describe: accounting.describe };

    /**
     * The accountingCopy object is an example of trying to call the describe method in a different context. It has a describe method
     * (borrowed from accounting) and a name property, but it's not an instance of Department. Therefore, calling accountingCopy.describe()
     * directly will lead to an error because this inside describe won't be of type Department. However, you can still call the describe
     * method of accountingCopy in the context of accounting by using the call method: accountingCopy.describe.call(accounting). This will
     *  print "Department: Accounting" to the console, just like accounting.describe().
     */
    accountingCopy.describe.call(accounting);

    /**
     * The describe method is a method that is bound to the class instance. It is not available on the prototype.
     * The addEmployee method is available on the prototype.
     * The printEmployeeInformation method is available on the prototype.
     * The createEmployee method is available on the prototype.
     * The describe method is not available on the prototype.
     */
    class ITDepartment extends Department {
        admins: string[];
        constructor(id: string, admins: string[]) {
            // The super keyword is used to call the constructor of the base class. The super keyword can also be used to call other
            super(id);
            this.admins = admins;
        }
    }

    const it = new ITDepartment("IT", ["Max"]);
    it.addEmployee("Max");
    it.addEmployee("Manu");
    log(it);

    class AccountingDepartment extends Department {
      private lastReport: string;
      constructor(id: string, private reports: string[]) {
        super(id);
        this.lastReport = reports[0];
      }

      addReport(text: string) {
        this.reports.push(text);
      }

      addEmployee(employee: string): void {
        if (employee === "Max") {
          return;
        }
        this.employees.push(employee);
      }

      get mostRecentReport() {
        if (this.lastReport) {
          return this.lastReport;
        }
        throw new Error("No report found.");
      }

      set mostRecentReport(value: string) {
        if (!value) {
          throw new Error("Please pass in a valid value!");
        }
        this.addReport(value);
      }
    }

    const accountingDepartment = new AccountingDepartment("D1", []);
    accountingDepartment.addEmployee("Max");
    accountingDepartment.addEmployee("Manu");
    accountingDepartment.addReport("Something went wrong...");
    log(accountingDepartment);
    // getters and setters are called like properties, not like methods, NO PARENTHESIS!!!
    log(accountingDepartment.mostRecentReport);
    accountingDepartment.mostRecentReport = "Year End Report";
})();
