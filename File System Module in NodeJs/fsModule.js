const express = require("express");
const fs = require('fs')
const app = express();
fs.writeFileSync('mshah.txt','this is me .Muhammad Shah');
app.get("/",(req,res)=>{
    fs.readFile('./daata.txt','utf-8',(err,data)=>{
         if(err) res.send("There was an error accessing the file!")
           res.end(data)
    })
})
app.get("/car",(req,res)=>{
    res.end("Car Details there ")
})
app.listen(8000,()=>{
    console.log("server connected ")
})