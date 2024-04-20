const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose')
const userRoutes = require('./routes/UserRoutes');


const PORT = process.env.PORT;
const app = express();
app.use(express.json());



app.use('/user',userRoutes);


//connect to db
mongoose.connect(process.env.MONGO_URI,{
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
