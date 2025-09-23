// The Calculator
const betaCalc = {
    currentValue: 0,

    setValue(newValue) {
        this.currentValue = newValue;
        console.log('current value:  ', this.currentValue);
    },

    plus(addend) {
        this.setValue(this.currentValue + addend);
    },

    minus(subtrahend) {
        this.setValue(this.currentValue - subtrahend);
    },

    // creating a register method that other developers can use to register a plugin with BetaCalc.
    register(plugin) {
        const { name, exec } = plugin;
        this[name] = exec;
    },
};

// Using the calculator
betaCalc.setValue(3); // => 3
betaCalc.plus(3); // => 6
betaCalc.minus(2); // => 4

// Define the plugin
const squaredPlugin = {
    name: 'squared',
    exec: function () {
        this.setValue(this.currentValue * this.currentValue);
    },
};

// Register the plugin
betaCalc.register(squaredPlugin);

// new “squared” button, which can be called directly
betaCalc.squared(); // => 25
betaCalc.squared(); // => 625

/*****************************
 * Notes
 * - the systems has a few flaws
 * - by giving plugins access to BetaCalc’s this, they get read/write access to all of BetaCalc’s code,
 * while this is useful for getting and setting the currentValue, it’s also dangerous
 * - if a plugin was to redefine an internal function (like setValue), it could produce unexpected
 * results for BetaCalc and other plugins. This violates the open-closed principle,
 * which states that a software entity should be open for extension but closed for modification.
 */

// READ MORE: https://css-tricks.com/designing-a-javascript-plugin-system/
