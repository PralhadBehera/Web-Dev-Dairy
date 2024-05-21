

1. **`charAt()`**: Returns the character at the specified index within a string.

   ```javascript
   var str = "Hello";
   console.log(str.charAt(0)); // Output: "H"
   ```

2. **`concat()`**: Combines two or more strings and returns a new string.

   ```javascript
   var str1 = "Hello";
   var str2 = "World";
   console.log(str1.concat(" ", str2)); // Output: "Hello World"
   ```

3. **`indexOf()`**: Returns the index of the first occurrence of a specified substring within a string. Returns -1 if the substring is not found.

   ```javascript
   var str = "Hello World";
   console.log(str.indexOf("World")); // Output: 6
   ```

4. **`slice()`**: Extracts a section of a string and returns a new string.

   ```javascript
   var str = "Hello World";
   console.log(str.slice(6)); // Output: "World"
   ```

5. **`toUpperCase()`**: Converts a string to uppercase letters.

   ```javascript
   var str = "hello";
   console.log(str.toUpperCase()); // Output: "HELLO"
   ```

6. **`toLowerCase()`**: Converts a string to lowercase letters.

   ```javascript
   var str = "HELLO";
   console.log(str.toLowerCase()); // Output: "hello"
   ```

7. **`split()`**: Splits a string into an array of substrings based on a specified separator.

   ```javascript
   var str = "apple,banana,orange";
   console.log(str.split(",")); // Output: ["apple", "banana", "orange"]
   ```

8. **`replace()`**: Searches for a specified substring within a string and replaces it with another substring.

   ```javascript
   var str = "Hello World";
   console.log(str.replace("World", "Universe")); // Output: "Hello Universe"
   ```

9. **`startsWith()`**: Checks if a string starts with the specified substring.

   ```javascript
   var str = "Hello World";
   console.log(str.startsWith("Hello")); // Output: true
   ```

10. **`endsWith()`**: Checks if a string ends with the specified substring.

    ```javascript
    var str = "Hello World";
    console.log(str.endsWith("World")); // Output: true
    ```

Certainly! Here are more string methods in JavaScript:

11. **`trim()`**: Removes whitespace from both ends of a string.

    ```javascript
    var str = "   Hello   ";
    console.log(str.trim()); // Output: "Hello"
    ```

12. **`charAt()`**: Returns the character at the specified index within a string.

    ```javascript
    var str = "Hello";
    console.log(str.charAt(0)); // Output: "H"
    ```

13. **`charCodeAt()`**: Returns the Unicode value of the character at the specified index within a string.

    ```javascript
    var str = "Hello";
    console.log(str.charCodeAt(0)); // Output: 72 (Unicode for 'H')
    ```

14. **`substring()`**: Extracts the characters between two specified indices of a string.

    ```javascript
    var str = "Hello World";
    console.log(str.substring(6, 11)); // Output: "World"
    ```

15. **`substr()`**: Extracts a specified number of characters from a string, starting at a specified index.

    ```javascript
    var str = "Hello World";
    console.log(str.substr(6, 5)); // Output: "World"
    ```

16. **`includes()`**: Checks if a string contains a specified substring.

    ```javascript
    var str = "Hello World";
    console.log(str.includes("World")); // Output: true
    ```

17. **`endsWith()`**: Checks if a string ends with the specified substring.

    ```javascript
    var str = "Hello World";
    console.log(str.endsWith("World")); // Output: true
    ```

18. **`repeat()`**: Returns a new string containing the specified number of copies of the original string.

    ```javascript
    var str = "Hello";
    console.log(str.repeat(3)); // Output: "HelloHelloHello"
    ```

19. **`padStart()`**: Pads the current string with another string until the resulting string reaches the specified length.

    ```javascript
    var str = "7";
    console.log(str.padStart(3, "0")); // Output: "007"
    ```

20. **`padEnd()`**: Pads the current string with another string until the resulting string reaches the specified length.

    ```javascript
    var str = "7";
    console.log(str.padEnd(3, "0")); // Output: "700"
    ```

These methods provide various functionalities for manipulating and working with strings in JavaScript, making string processing more efficient and flexible.