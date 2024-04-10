

const express = require('express');
const hello = require('./hello');
const readFile = require('./readFile');
const bye = require('./bye');
const data = require('./axios');
const { extra, defaultRouter } = require('./default'); 
const event = require('./event');
const Check_Connection = require('./DB');
const app = express();
const port = 1337;

app.set('port', port);  
app.use('/', hello);
app.use('/', bye);
app.use('/',data);
app.use('/', readFile)
app.use('/',extra)
app.use('/',defaultRouter)
app.use('/',event);
app.use('/',Check_Connection)
app.listen(port, () => {
    console.log(`Project running on port ${port}`);
});
