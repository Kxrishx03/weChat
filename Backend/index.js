const express = require('express');
const PORT = 5000;

//app
const app = express();


app.listen(PORT,()=>{
    console.log("RUNNING ON " + PORT);
});