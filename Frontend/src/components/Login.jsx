import logo from "./icons/logo.png";
import {TextField} from "@mui/material";
import {Button} from "@mui/material"
import {Link} from 'react-router-dom';

export function Login(){

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