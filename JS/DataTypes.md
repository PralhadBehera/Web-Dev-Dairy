In JavaScript, data types can broadly be categorized into two main groups: primitive values and reference values.

1. **Primitive Values:**
   Primitive values are immutable data types that are stored directly in memory. They are accessed by value, meaning that when you manipulate a primitive value, you are working directly with its value. There are six primitive data types in JavaScript:

   - **Number**: Represents numeric values, e.g., `42` or `3.14`.
   - **String**: Represents sequences of characters, e.g., `'Hello'` or `"World"`.
   - **Boolean**: Represents true or false values, e.g., `true` or `false`.
   - **Undefined**: Represents an uninitialized value or a variable that has not been assigned a value, e.g., `undefined`.
   - **Null**: Represents the intentional absence of any object value, e.g., `null`.
   - **Symbol**: Introduced in ES6, represents unique identifiers, e.g., `Symbol('foo')`.

2. **Reference Values:**
   Reference values are objects that are stored as a reference in memory. Unlike primitive values, they are accessed by reference, meaning that when you manipulate a reference value, you are working with a reference to its memory location. Reference values include:

   - **Object**: Represents a collection of key-value pairs (properties), e.g., `{ name: 'John', age: 30 }`.
   - **Array**: Represents a collection of elements, e.g., `[1, 2, 3]`.
   - **Function**: Represents reusable blocks of code, e.g., `function myFunction() { ... }`.
   - **Date**: Represents a date and time, e.g., `new Date()`.
   - **RegExp**: Represents a regular expression pattern, e.g., `/pattern/`.
   - **Any other object created with `new` keyword or built-in constructors**.

Primitive values are passed by value, whereas reference values are passed by reference. Understanding the distinction between these two types of values is essential for working effectively with JavaScript data.