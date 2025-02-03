const express = require("express")
const fs =require('fs')
const app = express()
app.get('/',(req,res)=>{
   fs.writeFileSync("./data.txt",'\nwow mshah')
    res.send("file sync up")
})
app.get('/api',(req,res)=>{
//    fs.appendFile('./me.txt',"\nMuhammad  Shah",(err)=>{
//     if(err) res.send("Error writing to file")
//         res.send("Data writen success")
//    })
//    fs.unlink('./me.txt',(err)=>{
//     if(err) res.send("there was an error to delete file!")
//         res.send("file deleted done")
//    }) 
    //  if(fs.existsSync("datas.txt")){
    //     res.send("file exist")
    //  }else{
    //     res.send("file doesn't exist")
    //  }
    // fs.mkdirSync('foo')
    // res.send("created directory")
    // fs.mkdir('foo',(err)=>{
    //     if(err) res.send("error creating dir")
    //         res.send("directory created")
    // })
    try {
        fs.mkdirSync('mshah');
        res.send("created folder by mshah")
    } catch (error) {
        res.send(error)
    }
})

app.listen(4000,()=> console.log("Server connecteddd"))