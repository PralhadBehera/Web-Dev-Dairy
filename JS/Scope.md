
# JavaScript has types of scope:

1. **Global Scope:** Variables and functions declared outside of any function or block have global scope. They can be accessed from anywhere within the script, including inside functions and blocks.

```javascript
var globalVariable = 10;

function myFunction() {
    console.log(globalVariable); // Output: 10
}
```

2. **Local Scope:** Variables and functions declared inside a function or block have local scope. They are only accessible within that function or block.

```javascript
function myFunction() {
    var localVariable = 20;
    console.log(localVariable); // Output: 20
}

console.log(localVariable); // This will throw an error since localVariable is not defined in the global scope.
```

3. **Block scope:** refers to the visibility and accessibility of variables declared within a block of code delimited by curly braces `{}`. Prior to the introduction of ES6 (ECMAScript 2015), JavaScript only had function scope and global scope. However, with the introduction of `let` and `const` in ES6, JavaScript gained block scope.

Variables declared with `let` and `const` have block scope, meaning they are only accessible within the block in which they are defined. This is different from variables declared with `var`, which have function scope or global scope, depending on where they are declared.

Here's an example demonstrating block scope with `let`:

```javascript
function myFunction() {
    if (true) {
        let x = 10;
        console.log(x); // Output: 10
    }
    console.log(x); // Error: x is not defined (because it's scoped to the block above)
}

myFunction();
```

In this example, `x` is declared within the `if` block using `let`, so it is only accessible within that block. Trying to access `x` outside of the block results in an error.

Similarly, variables declared with `const` also have block scope:

```javascript
function myFunction() {
    if (true) {
        const y = 20;
        console.log(y); // Output: 20
    }
    console.log(y); // Error: y is not defined (because it's scoped to the block above)
}

myFunction();
```

Here, `y` is declared with `const` inside the `if` block and is only accessible within that block.

Block scope is useful for managing variables more precisely and avoiding unintended variable leakage or conflicts in larger codebases.