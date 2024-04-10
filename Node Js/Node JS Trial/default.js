const express= require('express');
const extra =express.Router();
const defaultRouter = express.Router();
extra.get('/',(req,res)=>{
    res.status(200).send("Namaskaram Node JS");
});

defaultRouter.get('/default',(req,res)=>{
    res.status(200).send("Namaskaram Node JS");
})
module.exports={extra,defaultRouter};