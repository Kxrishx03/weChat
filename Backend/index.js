const express = require('express');
require('dotenv').config()

const PORT = process.env.PORT;

//app
const app = express();


app.get('/',(req,res)=>{
         res.send("Running..");
});

 

app.listen(PORT,()=>{
    console.log("RUNNING ON " + PORT);
});