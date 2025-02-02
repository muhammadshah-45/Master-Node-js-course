const express = require("express");
const fs = require('fs')
const app = express();

app.get("/",(req,res)=>{
    fs.readFile('./data.txt','utf-8',(err,data)=>{
         if(err) res.send('There was an error accessing the file!')
            res.end(data)
    })

})
app.get("/car",(req,res)=>{
    res.end("Car Details there ")
})
app.listen(8000,()=>{
    console.log("server connected ")
})