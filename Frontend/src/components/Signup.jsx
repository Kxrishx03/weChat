import logo from "./icons/logo.png";
import {TextField} from "@mui/material";
import { Button } from "@mui/material"
import { useState } from "react";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';

export function Signup(){
    
  
  const [logInStatus, setLogInStatus] = useState("");
  const [signInStatus, setSignInStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [data,setData] = useState({name:"",email:"",password:""});

  const navigate = useNavigate();


 const signupHandler = async (e) => {
    try {
      
      const response = await axios.post("http://localhost:3000/user/signup/",data);
      console.log(response.data);
      toast.success('signed up successfully')
      navigate("/app/welcome");
      localStorage.setItem("userData", response.data.token);
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
              <TextField className="username"  label="Enter username" variant="standard" />
              <TextField className="username"  label="Enter email" variant="standard" />
              <TextField
              type="password"
              label="Password" variant="standard" 
              autoComplete="current-password"
              className="password"
              />
              <Button variant="outlined" className="login-btn">Signup</Button>
              <p className="login-text">Already have an account? <Link to={'/login'}>
              Login
              </Link> </p>
            </div>
        </div>
    )
}