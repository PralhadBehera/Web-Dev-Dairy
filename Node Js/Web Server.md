# Web server 

-----

## Creating Web Server

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

-----

## Sending the HTTP request 

- For sending the Http request we will use the axios library

- ```Axios```  is a popular JavaScript library that is commonly used for making HTTP requests from both the browser and Node.js environments. It simplifies the process of sending asynchronous HTTP requests to REST endpoints and performing CRUD operations (Create, Read, Update, Delete) with ease.

- for this we will use ```jsonplaceholder``` 

- ```jsonplaceholder``` is a REST api service that will provide the fake data for frontend and backend for testing purpose.

*server.js*

```javascript 
const express = require('express');
const hello = require('./hello');
const bye = require('./bye');
const data = require('./axios'); 
const app = express();
const port = 1337;

app.set('port', port);
app.use('/', hello);
app.use('/', bye);
app.use('/',data);

app.listen(port, () => {
    console.log(`Project running on port ${port}`);
});
```

*axios.js*

```javascript 

const axios = require('axios');
const express = require('express');
const data= express.Router();

const fetchData = () => {
  const url = 'http://jsonplaceholder.typicode.com/posts';
  return axios.get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};

data.get('/data', async (req, res) => {
    try {
      const data = await fetchData(); 
      res.status(200).json(data); 
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error'); 
    }
  });
module.exports = data; 

```

------

## Handling HTTP requests

For Handling the request ```[click here]```(https://github.com/your-username/repository-name).x`