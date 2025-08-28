class Calculator {
    constructor() {
        this.currentValue = 0;

        this.core = {
            plus: (currentVal, added) => currentVal + added,
            minus: (currentVal, subtrahend) => currentVal - subtrahend,
        };

        this.plugins = {};
    }

    setValue(value) {
        this.currentValue = value;
        console.log('Current value: ', this.currentValue);
    }

    press(buttonName, newVal) {
        const func = this.core[buttonName] || this.plugins[buttonName];
        this.setValue(func(this.currentValue, newVal));
    }

    register(plugin) {
        const { name, exec } = plugin;
        this.plugins[name] = exec;
    }
}

const calc = new Calculator();

const squaredPlugin = {
    name: 'squared',
    exec: function (currentValue) {
        return currentValue * currentValue;
    },
};

calc.register(squaredPlugin);

calc.setValue(3);
calc.press('plus', 2);
calc.press('squared');
calc.press('squared');
