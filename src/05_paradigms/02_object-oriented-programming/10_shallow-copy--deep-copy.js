/**
 * JavaScript is a high level, dynamically typed client side scripting language.
 * JavaScript adds functionality to static HTML pages.
 * Like most other programming languages JavaScript allows supports the concept
 * of deep copy and shallow copy.
 */

/**
 * In general, cloning means copying one value to another. In JavaScript,
 * we do cloning i.e. copying one value to another using JavaScript. To be more
 * precise they are two types of cloning in JavaScript. As a programmer,
 * it might be a beginner or veteran he/she should be able to know the differences
 * between Deep clone and shallow clone. As this article is about Deep clones
 * we will study detail about Deep clones. Cloning is a concept that can
 * happen in any data type i.e., it might be a primitive data type
 * (like string, number) or composite data types like arrays and JavaScript.
 * So in order to master it, we need to be clear with the foundation.
 *
 * Deep Clone: Deep clone is a technique that is used to duplicate
 * everything whenever we are cloning arrays, JavaScript in order to avoid data loss.
 */

/* -------------------------------------------------- *\
 SHALLOW COPY
\* -------------------------------------------------- */

/**
 * Example 1:
 * As in this example, the data is becoming corrupted if we change one
 * object value then it is reflecting in other objects also that is the reason
 * in order to avoid this problem we use Deep Clone.
 */
console.log(' ========= Shallow Copy Examples ======== ');

const studentEx1 = {
    name: 'Manish',
    company: 'Gfg',
};
const studentEx2 = studentEx1;
console.log('Student (before change) => ', studentEx1);
studentEx1.name = 'Rakesh';
console.log('Student (after change) => ', studentEx1);
console.log('Student (shallow opy) => ', studentEx2);

/**
 * When a reference variable is copied into a new reference variable using the
 * assignment operator, a shallow copy of the referenced object is created.
 * In simple words, a reference variable mainly stores the address of the object
 * it refers to. When a new reference variable is assigned the value of the old
 * reference variable, the address stored in the old reference variable is copied
 * into the new one. This means both the old and new reference variable point
 * to the same object in memory. As a result if the state of the object changes
 * through any of the reference variables it is reflected for both. Let us
 * take an example to understand it better.
 */

const shallowEmployee = {
    eid: 'E102',
    ename: 'Jack',
    eaddress: 'New York',
    salary: 50000,
};

console.log('Employee => ', shallowEmployee);
const shallowNewEmployee = shallowEmployee; // Shallow copy
console.log('NewEmployee (shallow) => ', shallowNewEmployee);

console.log('---------After modification----------');
shallowNewEmployee.ename = 'Beck';
console.log('Employee=> ', shallowEmployee);
console.log('New Employee=> ', shallowNewEmployee);
// Name of the employee as well as
// shallowNewEmployee is changed.

/**
 * Explanation:
 * From the above example, it is seen that when the name of newEmployee is modified,
 * it is also reflected for the old employee object. This can cause data inconsistency.
 * This is known as shallow copy. The newly created object has the same memory
 * address as the old one. Hence, any change made to either of them changes the
 * attributes for both. To overcome this problem, deep copy is used. If one of
 * them is removed from memory, the other one ceases to exist. In a way the
 * two objects are interdependent.
 */

/* -------------------------------------------------- *\
 DEEP COPY - cloning an object
\* -------------------------------------------------- */

/**
 * Example 2: Using Spread Operator - Deep Copy
 */

console.log(' ========= Deep Copy Example ======== ');

const studentSpread1 = {
    name: 'Manish',
    company: 'Gfg',
};
const studentSpread2 = { ...studentSpread1 };
console.log('Student (before change )=> ', studentSpread1);
studentSpread1.name = 'Rakesh';
console.log('Student (after change )=> ', studentSpread1);
console.log('Student (spread - deep copy) => ', studentSpread2);

/**
 * Example 3: Using Object.assign() - Deep copy
 */

const studentObjectAssign1 = {
    name: 'Manish',
    company: 'Gfg',
};
const studentObjectAssign2 = Object.assign({}, studentObjectAssign1);
console.log('Student (before change) => ', studentObjectAssign1);
studentObjectAssign1.name = 'Rakesh';
console.log('Student (after change) => ', studentObjectAssign1);
console.log('Student (Object.assign() - deep copy)', studentObjectAssign2);

/**
 * Deep Copy:
 * Unlike the shallow copy, deep copy makes a copy of all the members of
 * the old object, allocates separate memory location for the new object
 * and then assigns the copied members to the new object. In this way,
 * both the objects are independent of each other and in case of any modification
 *  to either one the other is not affected. Also, if one of the objects is
 * deleted the other still remains in the memory. Now to create a deep copy
 * of an object in JavaScript we use JSON.parse() and JSON.stringify() methods.
 * Let us take an example to understand it better.
 */

const deepEmployee = {
    eid: 'E102',
    ename: 'Jack',
    eaddress: 'New York',
    salary: 50000,
};

const deepNewEmployee = JSON.parse(JSON.stringify(deepEmployee));
console.log(' Employee => ', deepEmployee);
console.log(' New Deep Employee => ', deepNewEmployee);
console.log(' --------- After modification --------- ');
deepNewEmployee.ename = 'Beck';
deepNewEmployee.salary = 70000;
console.log(' Employee => ', deepEmployee);
console.log(' New Deep Employee=> ', deepNewEmployee);

/**
 * Explanation:
 * Here the new object is created using the JSON.parse() and JSON.stringify()
 * methods of JavaScript. JSON.stringify() takes a JavaScript object as
 * argument and then transforms it into a JSON string. This JSON string
 * is passed to the JSON.parse() method which then transforms it into a
 * JavaScript object. This method is useful when the object is small and
 * has serializable properties. But if the object is very large and contains
 * certain non-serializable properties then there is a risk of data loss.
 * Specially if an object contains methods then JSON.stringify() will fail
 * as methods are non-serializable. There are better ways to deep clone
 * of which one is Lodash which allows cloning methods as well.
 */

/* -------------------------------------------------- *\
  LODASH DEEP COPY
\* -------------------------------------------------- */

/**
 * Lodash To Deep Copy:
 * Lodash is a JavaScript library that provides multiple utility functions
 * and one of the most commonly used function of the Lodash library is the
 * cloneDeep() method. This method helps in deep cloning of an object and
 * also clones the non serializable properties which were a limitation
 * in the JSON.stringify() approach.
 */

const lodash = require('lodash');

console.log(' ========= Lodash Deep Copy ======== ');
var lodashEmployee = {
    eid: 'E102',
    ename: 'Jack',
    eaddress: 'New York',
    salary: 50000,
    details: function () {
        return 'Employee Name: ' + this.ename + '-->Salary: ' + this.salary;
    },
};

var deepCopy = lodash.cloneDeep(lodashEmployee);
console.log('Original Employee Object');
console.log(lodashEmployee);
console.log('Deep Copied Employee Object');
console.log(deepCopy);
deepCopy.eid = 'E103';
deepCopy.ename = 'Beck';
deepCopy.details = function () {
    return 'Employee ID: ' + this.eid + '-->Salary: ' + this.salary;
};
console.log('----------After Modification----------');
console.log('Original Employee Object');
console.log(lodashEmployee);
console.log('Deep Copied Employee Object');
console.log(deepCopy);
console.log(lodashEmployee.details());
console.log(deepCopy.details());

/**
 * Explanation:
 * Both the objects have different properties after the modification.
 * Also methods of each object is differently defined and produce different output.
 */

/**
 * The simplest way - with spread operator
 */

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    },
};

const anotherCircle = { ...circle };
console.log(anotherCircle);

/**
 * with reference types, whatever we change in a copy will also be visible in the original
 */

const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedmann',
    passport: 123121333,
};

const checkIn = (flightNum, passenger) => {
    flightNum = 'LH999'; // this is not going to change the value of flight
    passenger.name = 'Mr ' + passenger.name; // as passenger is a reference to the object
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
