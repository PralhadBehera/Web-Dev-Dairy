# Function Declaration

## Function Defining

Defining functions in JavaScript allows you to encapsulate a block of code that can be executed at a later time or repeatedly. Functions can accept parameters, perform actions, and return values. Here are the different ways to define functions in JavaScript:

1. **Function Declaration:**
   This is the most common and traditional way to define a function. It uses the `function` keyword followed by the function name and parameters (if any), enclosed in parentheses. The function body is enclosed in curly braces `{}`.

   ```javascript
   function greet(name) {
       console.log("Hello, " + name + "!");
   }

   greet("John"); // Output: Hello, John!
   ```

2. **Function Expression:**
   In this method, a function is assigned to a variable. Function expressions can be named or anonymous.

   - **Named Function Expression:**
     ```javascript
     var greet = function sayHello(name) {
         console.log("Hello, " + name + "!");
     };

     greet("John"); // Output: Hello, John!
     ```

   - **Anonymous Function Expression:**
     ```javascript
     var greet = function(name) {
         console.log("Hello, " + name + "!");
     };

     greet("John"); // Output: Hello, John!
     ```

3. **Arrow Function:**
   Introduced in ES6, arrow functions provide a more concise syntax compared to traditional function expressions. They are especially useful for short, one-liner functions.

   ```javascript
   var greet = (name) => {
       console.log("Hello, " + name + "!");
   };

   greet("John"); // Output: Hello, John!
   ```

4. **Function Constructor:**
   Although less common and not recommended due to potential security issues and performance drawbacks, functions can also be created using the `Function` constructor.

   ```javascript
   var greet = new Function("name", "console.log('Hello, ' + name + '!');");

   greet("John"); // Output: Hello, John!
   ```

----

## Functions as values

In JavaScript, functions are first-class citizens, which means they can be treated like any other value. This includes passing functions as arguments to other functions, returning functions from other functions, and assigning functions to variables. Here's how you can use functions as values:

1. **Passing Functions as Arguments:**
   You can pass functions as arguments to other functions, allowing you to create higher-order functions that can operate on functions themselves.

   ```javascript
   function greet(name) {
       console.log("Hello, " + name + "!");
   }

   function greetUser(callback) {
       callback("John");
   }

   greetUser(greet); // Output: Hello, John!
   ```

2. **Returning Functions from Functions:**
   Functions can also return other functions, allowing you to create closures and maintain state within functions.

   ```javascript
   function createMultiplier(factor) {
       return function(num) {
           return num * factor;
       };
   }

   var double = createMultiplier(2);
   console.log(double(5)); // Output: 10
   ```

3. **Assigning Functions to Variables:**
   Functions can be assigned to variables just like any other value, allowing you to reference and call them later using the variable name.

   ```javascript
   var greet = function(name) {
       console.log("Hello, " + name + "!");
   };

   greet("John"); // Output: Hello, John!
   ```

4. **Passing Functions to Event Handlers:**
   Event handlers in JavaScript can accept functions as event callbacks, allowing you to define behavior dynamically.

   ```javascript
   document.getElementById("myButton").addEventListener("click", function() {
       console.log("Button clicked!");
   });
   ```
   ----

## Parameter and Argument

Parameters: These are variables defined in a function's declaration. They act as placeholders for values that the function expects to receive when it's called.
```javascript 
function greet(name) {
    console.log("Hello, " + name + "!");
}
```

Arguments: These are the actual values passed to a function when it's called. They match the parameters defined in the function's declaration, providing the data for the function to work with.

```javascript 
function greet(name) {
    console.log("Hello, " + name + "!");
}
```