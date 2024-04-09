import logo from "./icons/logo.png";
import {TextField} from "@mui/material";
import {Button} from "@mui/material"

export function Login(){
    return(
        <div className="login-cont">
            <div className="img-cont">
                <img className="welcome-logo" src={logo} alt="logo" />
            </div>
            <div className="login-box">
              <p className="login-text">Login to your account </p>
              <TextField id="standard-basic" label="Enter username" variant="standard" />
              <TextField id="standard-basic" 
              type="password"
              label="Password" variant="standard" 
              autoComplete="current-password"
              />
              <Button variant="outlined">Login</Button>
            </div>
        </div>
    )
}