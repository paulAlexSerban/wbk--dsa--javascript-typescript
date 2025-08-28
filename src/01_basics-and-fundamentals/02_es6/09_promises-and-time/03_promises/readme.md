# JavaScript Promises (ES6 JavaScript)

-   it is an alternative way to callback functions
-   A JavaScript Promise object contains both the producing code and calls to the consuming code

A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise.

```javascript
const myPromise = new Promise((resolve, reject) => {
    console.log(resolve);
});
```

### Handle a Fulfilled Promise with thenPassed

Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve. Here’s an example:

```javascript
myPromise.then((result) => {
    console.log(result);
});
```

### Handle a Rejected Promise with catchPassed

-   `catch` is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. Here’s the syntax:

```javascript
myPromise.catch((error) => {
    console.log(error);
});
```
