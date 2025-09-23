const betaCalc = {
    currentValue: 0,

    setValue(value) {
        this.currentValue = value;
        console.log(this.currentValue);
    },

    core: {
        plus: (currentVal, addend) => currentVal + addend,
        minus: (currentVal, subtrahend) => currentVal - subtrahend,
    },

    press(buttonName, newVal) {
        const func = this.core[buttonName] || this.plugins[buttonName];
        this.setValue(func(this.currentValue, newVal));
    },

    plugins: {},

    register(plugin) {
        const { name, exec } = plugin;
        this.plugins[name] = exec;
    },
};

// Our Plugin
const squaredPlugin = {
    name: 'squared',
    exec: function (currentValue) {
        return currentValue * currentValue;
    },
};

betaCalc.register(squaredPlugin);

// Using the calculator
betaCalc.setValue(3); // => 3
betaCalc.press('plus', 2); // => 5
betaCalc.press('squared'); // => 25
betaCalc.press('squared'); // => 625

/*****************************
 * Notes:
 * 1.
 * - separated the plugins from “core” calculator methods (like plus and minus), by putting them in their own plugins object
 * - storing our plugins in a plugin object makes our system safer -nNow plugins accessing this can’t see
 * the BetaCalc properties — they can only see properties of betaCalc.plugins.
 *
 * 2.
 * - `press` method, which looks up the button’s function by name and then calls it
 * - now when we call a plugin’s exec function, we pass it the current calculator value (currentValue),
 * and we expect it to return the new calculator value
 * - this new press method converts all of our calculator buttons into pure functions - they take a value,
 * perform an operation, and return the result.
 */

// READ MORE: https://css-tricks.com/designing-a-javascript-plugin-system/
