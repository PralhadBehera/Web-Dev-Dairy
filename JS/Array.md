Certainly! Here are some commonly used array methods in JavaScript:

1. **`push()`**: Adds one or more elements to the end of an array and returns the new length of the array.

    ```javascript
    var fruits = ["apple", "banana"];
    fruits.push("orange");
    console.log(fruits); // Output: ["apple", "banana", "orange"]
    ```

2. **`pop()`**: Removes the last element from an array and returns that element.

    ```javascript
    var fruits = ["apple", "banana", "orange"];
    var lastFruit = fruits.pop();
    console.log(lastFruit); // Output: "orange"
    ```

3. **`shift()`**: Removes the first element from an array and returns that element.

    ```javascript
    var fruits = ["apple", "banana", "orange"];
    var firstFruit = fruits.shift();
    console.log(firstFruit); // Output: "apple"
    ```

4. **`unshift()`**: Adds one or more elements to the beginning of an array and returns the new length of the array.

    ```javascript
    var fruits = ["banana", "orange"];
    fruits.unshift("apple");
    console.log(fruits); // Output: ["apple", "banana", "orange"]
    ```

5. **`concat()`**: Returns a new array by combining two or more arrays.

    ```javascript
    var fruits1 = ["apple", "banana"];
    var fruits2 = ["orange", "grape"];
    var allFruits = fruits1.concat(fruits2);
    console.log(allFruits); // Output: ["apple", "banana", "orange", "grape"]
    ```

6. **`slice()`**: Returns a shallow copy of a portion of an array into a new array.

    ```javascript
    var fruits = ["apple", "banana", "orange", "grape"];
    var selectedFruits = fruits.slice(1, 3);
    console.log(selectedFruits); // Output: ["banana", "orange"]
    ```

7. **`splice()`**: Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

    ```javascript
    var fruits = ["apple", "banana", "orange"];
    fruits.splice(1, 1, "grape", "kiwi");
    console.log(fruits); // Output: ["apple", "grape", "kiwi", "orange"]
    ```

8. **`forEach()`**: Executes a provided function once for each array element.

    ```javascript
    var numbers = [1, 2, 3];
    numbers.forEach(function(number) {
        console.log(number);
    });
    // Output:
    // 1
    // 2
    // 3
    ```

9. **`map()`**: Creates a new array populated with the results of calling a provided function on every element in the calling array.

    ```javascript
    var numbers = [1, 2, 3];
    var doubled = numbers.map(function(number) {
        return number * 2;
    });
    console.log(doubled); // Output: [2, 4, 6]
    ```

10. **`filter()`**: Creates a new array with all elements that pass the test implemented by the provided function.

    ```javascript
    var numbers = [1, 2, 3, 4, 5];
    var evens = numbers.filter(function(number) {
        return number % 2 === 0;
    });
    console.log(evens); // Output: [2, 4]
    ```

