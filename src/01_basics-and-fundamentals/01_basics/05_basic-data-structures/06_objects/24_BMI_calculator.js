/**
 * Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
 * BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
 *
 * PART 1 TASKS
 * (1) Store Mark's and John's mass and height in variables
 * (2) Calculate both their BMIs using the formula (you can even implement both versions)
 * (3) Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
 *
 * TEST DATA
 * (Data 1): Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
 * (Data 2): Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
 */

const massMark = 78;
const heightMark = 1.68;
const massJohn = 92;
const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHeigherBMI = BMIMark > BMIJohn;

/**
 *
 * @param { Number } mass
 * @param { Number } height
 * @returns
 */
function getBMI(mass, height) {
    return mass / height ** 2;
}

const BMIMark = getBMI(massMark, heightMark);
const BMIJohn = getBMI(massJohn, heightJohn);
// const markHeigherBMI = BMIMark > BMIJohn;

/**
 * Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
 * TASKS:
 * (1) Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
 * (2) Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
 */

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

/**
 * PART 2 TASKS:tasks:
 * (1) For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
 * (2) Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method
 * (3) Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
 */

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.96,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is heigher than ${john.fullName}'s BMI (${john.bmi})`);
} else if (mark.bmi < john.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is heigher than ${mark.fullName}'s BMI (${mark.bmi})`);
}
