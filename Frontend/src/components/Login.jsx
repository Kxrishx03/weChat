import logo from "./icons/logo.png";
import {TextField} from "@mui/material";
import {Button} from "@mui/material"
import { createTheme } from '@mui/material/styles';

export function Login(){

    const theme = createTheme({
        palette: {
          ochre: {
            main: '#63d7b0',
            light: '#3fbaab',
            dark: '#2a9ca0',
            contrastText: '#2f4858',
          },
        },
      });
    return(
        <div className="login-cont">
            <div className="img-cont">
                <img className="welcome-logo" src={logo} alt="logo" />
            </div>
            <div className="login-box">
              <p className="login-text">Login to your account </p>
              <TextField className="username" id="standard-basic" label="Enter username" variant="standard" />
              <TextField id="standard-basic" 
              type="password"
              label="Password" variant="standard" 
              autoComplete="current-password"
              className="password"
              />
              <Button variant="outlined" className="login-btn">Login</Button>
             
            </div>
        </div>
    )
}