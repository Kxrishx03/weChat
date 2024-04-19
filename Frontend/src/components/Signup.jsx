import logo from "./icons/logo.png";
import {TextField} from "@mui/material";
import {Button} from "@mui/material"
import { Link } from "react-router-dom";


export function Signup(){

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