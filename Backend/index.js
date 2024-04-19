const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose')

const PORT = process.env.PORT;

//app
const app = express();


app.get('/',(req,res)=>{
         res.send("Running..");
});

 

//connect to db
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'liveChatAppDB',
  })
.then(()=>{
    console.log("Connection succesfull");
    app.listen(PORT,()=>{
        console.log("Running on : " + PORT);
    })
})
.catch((e)=>{
    console.log("Error occurred: " + e);
})
