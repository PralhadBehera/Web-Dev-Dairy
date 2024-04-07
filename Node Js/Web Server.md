# Creating Web Server

 1. Install Node.js: First, you need to have Node.js installed on your machine. You can download and install it from the official Node.js website: https://nodejs.org

2. Initialize Your Project: Create a new directory for your project and navigate into it in your terminal. Then run ```npm init``` to create a package.json file which will manage your project dependencies.

3. Install Express.js:

```bash
npm install express
```

4. Create Your Server Script

*server.js*
```javascript
const express = require('express');
const router = require('./routers');
const app = express();
const port = '1337';
app.use('/',router);
app.listen(port,()=>{
    console.log(`Project runnig on port ${port}`);
}) 
```

*router.js*

```javascript 
const express = require('express');
const router = express.Router();
router.get('/hello',(req,res)=>{
    res.status(200).send("hello world");
});

module.exports=router;

```