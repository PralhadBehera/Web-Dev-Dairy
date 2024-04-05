# Defined Function 


| Aspect                | Arrow Functions                         | Normal Functions                        | Anonymous Functions                   |
|-----------------------|-----------------------------------------|-----------------------------------------|---------------------------------------|
| Syntax                | Short and concise                       | Traditional with `function` keyword     | No name                               |
| `this` value          | Inherits from surrounding code           | Determined when called                  | Inherits from surrounding code (arrow), determined when called (normal) |
| `arguments` object    | No                                   | Yes                                   | Yes                                   |
| Hoisted               | No                                      | Yes                                     | No                                    |
| Constructor Function  | No                                      | Yes                                     | No                                    |
| Best for              | Short, simple functions                 | Longer, complex functions               | Short, one-off functions              |


- **Arrow Functions:**

```javascript

// Short and concise
const add = (a, b) => a + b;


const obj = {
  value: 10,
  getValue: () => this.value // `this` refers to the global object, not `obj`
};

```

--------