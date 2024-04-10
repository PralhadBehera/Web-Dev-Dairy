const fs =  require('fs');
const express = require('express');
const readFile=express.Router();
readFile.get('/readFile',(req,res)=>{
    fs.readFile('example.txt','utf-8',(err,data)=>{
        if(err){
            console.log(`Error has been occurred`);
            res.send('Internal Server Error Occured');
        }
        else{
            console.log(`${data}`);
            res.type('text/plain').send(data)
        }
    })
})

module.exports=readFile;
