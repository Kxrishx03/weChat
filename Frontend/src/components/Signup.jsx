import logo from "./icons/logo.png";
import {TextField} from "@mui/material";
import { Button } from "@mui/material"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import axios from 'axios'


export function Signup(){
    
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const [logInStatus, setLogInStatus] = useState("");
  const [signInStatus, setSignInStatus] = useState("");
  const [data,setData] = useState({name:"",email:"",password:""});

  const navigate =useNavigate() ;

  function handleData(e){
    e.preventDefault()
     setData((prev)=>({
      ...prev, 
      [e.target.name]:e.target.value
     }))
  }


 const handleSignup = async (e) => {
    setLoading(true);
    console.log(data);
    try {

      const response = await axios.post("http://localhost:3000/user/signup/",data);
      console.log(response.data);
      // setSignInStatus({ msg: "Success", key: Math.random() });
      navigate("/app/welcome");
      // localStorage.setItem("userData", JSON.stringify(response));
      setLoading(false);
    } catch (error) {
      console.log(error);
      if (error.response.status === 405) {
        setLogInStatus({
          msg: "User with this email ID already Exists",
          key: Math.random(),
        });
      }
      if (error.response.status === 406) {
        setLogInStatus({
          msg: "User Name already Taken, Please take another",
          key: Math.random(),
        });
      }
      setLoading(false);
    }
  };

    
    return(
        <div className="login-cont">
            <div className="img-cont">
                <img className="welcome-logo" src={logo} alt="logo" />
            </div>
            <div className="login-box">
              <p className="login-text">Create your account </p>
              <TextField className="username" onChange={(e)=>handleData(e)} value={data.name} name="name"  label="Enter username" variant="standard" />
              <TextField className="username" onChange={(e)=>handleData(e)} value={data.email} name="email"  label="Enter email" variant="standard" />
              <TextField
              type="password" onChange={(e)=>handleData(e)} value={data.password} name='password'
              label="Password" variant="standard" 
              autoComplete="current-password"
              className="password"
              />
              <Button variant="outlined" onClick={handleSignup} className="login-btn">Signup</Button>
              <p className="login-text">Already have an account? <Link to={'/login'}>
              Login
              </Link> </p>
            </div>
        </div>
    )
}