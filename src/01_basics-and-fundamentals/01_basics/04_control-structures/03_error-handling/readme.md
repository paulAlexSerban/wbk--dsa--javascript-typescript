Error Handling
try...catch statement: Executes a block of code and catches any errors that occur within it.

```js
try {
    // code that may throw an error
} catch (error) {
    // code to be executed if an error occurs
}
```

throw statement: Creates custom errors.

```js
throw 'My custom error';
```

finally statement: Executes code after the try and/or catch block, regardless of whether an error occurred.

```js
try {
    // code that may throw an error
} catch (error) {
    // code to be executed if an error occurs
} finally {
    // code to be executed regardless of an error
}
```
