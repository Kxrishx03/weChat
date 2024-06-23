import logo from "./icons/logo.png";
import {TextField} from "@mui/material";
import { Button } from "@mui/material"
import { useState } from "react";
import { Link } from "react-router-dom";


export function Signup(){
    
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const [logInStatus, setLogInStatus] = React.useState("");
  const [signInStatus, setSignInStatus] = React.useState("");
  const [data,setData] = useState({name:"",email:"",password:""});

  const navigate = useNavigate();


 const signupHandler = async (e) => {
    setLoading(true);
    console.log(data);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.post(
        "http://localhost:8080/user/register/",
        data,
        config
      );

      console.log(response);
      setSignInStatus({ msg: "Success", key: Math.random() });
      navigate("/app/welcome");
      localStorage.setItem("userData", JSON.stringify(response));
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