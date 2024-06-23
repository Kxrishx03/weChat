import logo from "./icons/logo.png";
import {TextField} from "@mui/material";
import {Button} from "@mui/material"
import {Link} from 'react-router-dom';

import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toaster from "./Toaster";

export function Login(){

  const [showLogin, setShowLogin] = useState(false);
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const [logInStatus, setLogInStatus] = React.useState("");
  const [signInStatus, setSignInStatus] = React.useState("");

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const loginHandler = async (e) => {
    setLoading(true);
    console.log(data);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.post(
        "http://localhost:8080/user/login/",
        data,
        config
      );

      console.log("Login:", response);
      setLogInStatus({ msg: "Success", key: Math.random() });
      setLoading(false);
      localStorage.setItem("userData", JSON.stringify(response));
      navigate("/app/welcome");
    } catch (error) {
      console.error(error);
      setLoading(false);
    }

  };

    return(
        <div className="login-cont">
            <div className="img-cont">
                <img className="welcome-logo" src={logo} alt="logo" />
            </div>
            <div className="login-box">
              <p className="login-text">Login to your account </p>
              <TextField className="username"  label="Enter username" variant="standard" />
              <TextField  
              type="password"
              label="Password" variant="standard" 
              autoComplete="current-password"
              className="password"
              />
              <Button variant="outlined" className="login-btn">Login</Button>
              <p className="login-text">Don't have an account? <Link to={'/'}>
              Sign Up
              </Link> </p>
            </div>
        </div>
    )
}