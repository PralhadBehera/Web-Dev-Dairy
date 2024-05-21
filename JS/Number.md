In JavaScript, the `Number` object provides several methods for working with numbers. These methods allow you to perform various operations such as converting numbers to different formats, checking for special numeric values, and more. Here are some commonly used `Number` methods:

1. **`Number.parseFloat()`**: Parses a string argument and returns a floating-point number.

   ```javascript
   var floatValue = Number.parseFloat('3.14');
   console.log(floatValue); // Output: 3.14
   ```

2. **`Number.parseInt()`**: Parses a string argument and returns an integer.

   ```javascript
   var intValue = Number.parseInt('10');
   console.log(intValue); // Output: 10
   ```

3. **`Number.isNaN()`**: Checks if a value is `NaN` (Not-a-Number).

   ```javascript
   console.log(Number.isNaN(NaN)); // Output: true
   ```

4. **`Number.isFinite()`**: Checks if a value is a finite number.

   ```javascript
   console.log(Number.isFinite(10)); // Output: true
   ```

5. **`Number.isInteger()`**: Checks if a value is an integer.

   ```javascript
   console.log(Number.isInteger(5)); // Output: true
   ```

6. **`Number.isSafeInteger()`**: Checks if a value is a safe integer.

   ```javascript
   console.log(Number.isSafeInteger(9007199254740991)); // Output: true
   ```

7. **`Number.prototype.toFixed()`**: Formats a number using fixed-point notation with a specified number of digits after the decimal point.

   ```javascript
   var num = 3.14159;
   console.log(num.toFixed(2)); // Output: "3.14"
   ```

8. **`Number.prototype.toString()`**: Returns a string representing the specified number object.

   ```javascript
   var num = 10;
   console.log(num.toString()); // Output: "10"
   ```
