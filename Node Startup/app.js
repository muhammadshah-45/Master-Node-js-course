const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.end("Server ")
})
app.get("/car",(req,res)=>{
    res.end("Car Details there ")
})
app.listen(8000,()=>{
    console.log("server connected ")
})