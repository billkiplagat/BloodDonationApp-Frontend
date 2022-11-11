import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
// import UserService from "../Services/Users";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext, useRef } from "react";
import AuthContext from "../context/AuthProvider";

import Axios from "../Api/Axios";
const LOGIN_URL = "/";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const errRef = useRef();
  const navigate = useNavigate();

  const paperStyle = {
    padding: 30,
    height: "80vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const textFieldStyle = { margin: "20px auto" };

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(
        LOGIN_URL,
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
           withCredentials: true,
          
        }
      );
      console.log(JSON.stringify(response?.data));
      const access_token = response?.data?.access_token;
      const roles = response?.data?.roles;
      setAuth({ username, password, roles, access_token });
      setUsername("");
      setPassword("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  // const handleLogin = async(e) =>{
  //     e.preventDefault();
  //     try{
  //         await UserService.login(username, password)
  //         .then(() =>{
  //             navigate("/")
  //             window.location.reload()
  //         },
  //         (error) =>{
  //             console.log(error)
  //         }
  //         )
  //     }catch(err){
  //         console.log(err)
  //     }
  // }

  return (
    <>
      {success ? ( navigate("/")
      ) : (

        <form onSubmit={handleLogin}>
          <Paper elevation={15} style={paperStyle}>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LockIcon />
              </Avatar>
              <h2>Login</h2>
            </Grid>
            <TextField
              style={textFieldStyle}
              autoFocus
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              fullWidth
              required
            />

            <TextField
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              type="password"
              fullWidth
              required
            />

            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
            >
              Sign in
            </Button>

            <Typography>
              {" "}
              Don't have an account ?<Link to="/signup"> Register </Link>
            </Typography>
          </Paper>
        </form>
      )}
    </>
  );
};

export default Login;
