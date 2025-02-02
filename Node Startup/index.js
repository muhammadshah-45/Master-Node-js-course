const http = require('http');

const server = http.createServer((req,res)=>{
  
    if(req.url === "me"){
        res.end("Hello i am who")
    }else if(req.url ==='car'){
        res.end("this is a car")
    }

})

server.listen(4000);
