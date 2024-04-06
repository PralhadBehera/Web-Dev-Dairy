# Module

"Imagine you have a piece of code that you use a lot in different files. Instead of typing it out every time, you can save it in its own file. Then, whenever you need that code, you can just bring it into your current file. It's like having a library of useful code that you can use whenever you want.

------
------

 ## Types of Module 
 
   - Core Module
   - Local Module 
   - Third-party

------
------

- **Core Module:**

These are built-in modules provided by Node.js and are available out-of-the-box without needing to install anything extra

*example*

```javascript
// Using the fs (file system) core module
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File contents:', data);
});
```

----

- **Local Modules:** 

These are modules created by developers and stored locally within the project directory. Local modules are typically defined in separate JavaScript files and imported using relative paths. Developers can use the module.exports object to expose functionality from these modules and require() to import them into other modules.

----

- **Third-party Modules:**

These are modules created by third-party developers and hosted on the npm registry or other package registries.

*Example*

Installing and using the express framework:

```javacsript
npm install express
```

Using express in a Node.js application:

```javascript
// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

```
-----