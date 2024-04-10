

const express = require('express');
const event = express.Router();
const EventEmitter= require('events');
const eventEmitter= new EventEmitter();
let string="The Event RestFull API";

event.get('/event',(req,res)=>{
   res.status(200).send(string);
   eventEmitter.on('start',()=>{
    console.log(string);
  });
});
eventEmitter.emit('start');
module.exports=event;