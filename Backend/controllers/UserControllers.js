const { User } = require('../models/UserModels');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const validator = require('validator');


const createToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'7d'});
}

//LOGIN CONTROLLER
 const loginUser = async (req,res) =>{

    // const {username,password} = req.body;

    // try{
    //     const user = await User.login(username,password);
    //     const token = createToken(user._id);
    //     res.status(200).json({username,token});

    // }catch(Error){

    //       res.status(400).json({error: Error.message});
    // }
   
}


//SIGNUP CONTROLLER
 const signupUser = async  (req,res) =>{
    const { username,email, password } = req.body;

    //CHECK FOR FIELDS
    if(!username || !password || !email)
    {  
        res.send(400);
         throw Error("All fields must be filled");
    } 

   // Email CHECK
    if(!validator.isEmail(email)){
    throw Error("Invalid username");
    }
        
    // Password CHECK
    if(!validator.isStrongPassword(password)){
        throw Error("Weak Password");
    }
     
    //Pre-existing user
    const exists = await User.findOne({email});

    if(exists){
    res.status(400)
    throw Error("Email already in use");
    }
    
    //Username already taken
    const usernameExists = await User.findOne({username});

    if(usernameExists){
      res.status(400);  
    throw Error("Username already in use");
    }
    

    //ENTRY IN DB FOR USER
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);

    const user = await User.create({username,email,password:hash});
    
   
    const token = createToken(user._id);

    res.status(200).json({username,token}); 
   
}


module.exports = {
    loginUser,
    signupUser   
}