/**
 * Hazards of Using Imperative Code
 *
 * Functional programming is a good habit. It keeps your code easy to manage, and saves you from sneaky bugs.
 * But before we get there, let's look at an imperative approach to programming to highlight where you may have issues.
 *
 * In English (and many other languages), the imperative tense is used to give commands.
 * Similarly, an imperative style in programming is one that gives the computer a set of statements to perform a task.
 *
 * Often the statements change the state of the program, like updating global variables.
 * A classic example is writing a for loop that gives exact directions to iterate over the indices of an array.
 *
 * In contrast, functional programming is a form of declarative programming.
 * You tell the computer what you want done by calling a method or function.
 *
 * JavaScript offers many predefined methods that handle common tasks so you don't need to write out how the computer should perform them.
 * For example, instead of using the for loop mentioned above, you could call the map method which handles the details of iterating over an array.
 * This helps to avoid semantic errors, like the "Off By One Errors" that were covered in the Debugging section.
 *
 * Consider the scenario: you are browsing the web in your browser, and want to track the tabs you have opened.
 * Let's try to model this using some simple object-oriented code.
 *
 * A Window object is made up of tabs, and you usually have more than one Window open.
 * The titles of each open site in each Window object is held in an array.
 * After working in the browser (opening new tabs, merging windows, and closing tabs), you want to print the tabs that are still open.
 * Closed tabs are removed from the array and new tabs (for simplicity) get added to the end of it.
 *
 * The code editor shows an implementation of this functionality with functions for `tabOpen()`, `tabClose()`, and `join()`.
 * The array tabs is part of the Window object that stores the name of the open pages.
 */

// tabs is an array of titles of each site open within the window
const Window = function (tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {
    const tabsBeforeIndex = this.tabs.slice(0, index); // get the tabs before the tab
    const tabsAfterIndex = this.tabs.slice(index + 1); // get the tabs after the tab
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
    return this;
};

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

/**
 * Word of caution
 * `splice()` should be always used carefully as it modifies the contents it is working on.
 * For documentation and differences between splice and slice please take a look at:
 */

/**
 * Avoid Mutations and Side Effects Using Functional Programming
 * If you haven't already figured it out, the issue in the previous challenge was with the splice call in the `tabClose()` function.
 * Unfortunately, splice changes the original array it is called on, so the second call to it used a modified array, and gave unexpected results.
 *
 * This is a small example of a much larger pattern - you call a function on a variable, array, or an object,
 * and the function changes the variable or something in the object.
 *
 * One of the core principles of functional programming is to not change things.
 * Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.
 *
 * The previous example didn't have any complicated operations but the splice method changed the original array, and resulted in a bug.
 * Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a side effect.
 * A function, ideally, should be a pure function, meaning that it does not cause any side effects.
 */

// the global variable
var fixedValue = 4;

function incrementer() {
    return fixedValue + 1;
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4
