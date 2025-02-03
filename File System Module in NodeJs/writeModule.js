const express = require('express');  

const app = express();  

app.get('/', (req, res) => {  
    res.send("This is new data");  
});  

app.listen(5000, () => console.log("server connected"));