const express = require('express');
const bye= express.Router();
bye.get('/bye',(req,res)=>{
    const port = req.app.get('port');
    res.status(200).send(`${port} saying bye `);
})
module.exports=bye;