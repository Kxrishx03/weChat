import logo from "./icons/logo.png";
import {TextField} from "@mui/material";
import {Button} from "@mui/material"
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import toast from 'react-hot-toast';

export function Login(){

  
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
 

  const navigate = useNavigate();

  const handleData = (e) => {
    e.preventDefault();
    setData((prev)=>({
      ...prev, 
      [e.target.name]:e.target.value
    }))
  };

  const loginHandler = async () => {
    setLoading(true);
    console.log(data);
    try {
    
      const response = await axios.post(
        "http://localhost:8080/user/login/",
        data
      );

      console.log("Login:", response.data);
      
    
      localStorage.setItem("userData", response.data.token);
      navigate("/app/welcome");
      toast.success('Logged in');
    } catch (error) {
      console.error(error);
      
    } finally{
      setLoading(false)
    }

  };

    return(
        <div className="login-cont">
            <div className="img-cont">
                <img className="welcome-logo" src={logo} alt="logo" />
            </div>
            <div className="login-box">
              <p className="login-text">Login to your account </p>
              <TextField className="username"  label="Enter username" variant="standard" onChange={(e)=>handleData(e)} value={data.username} name="username" />
              <TextField  
              onChange={(e)=>handleData(e)} value={data.password} name="password"
              type="password"
              label="Password" variant="standard" 
              autoComplete="current-password"
              className="password"
              />
              <Button onClick={loginHandler}variant="outlined" className="login-btn">Login</Button>
              <p className="login-text">Don't have an account? <Link to={'/'}>
              Sign Up
              </Link> </p>
            </div>
        </div>
    )
}