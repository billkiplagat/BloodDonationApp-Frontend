import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';
import UserService from '../Services/Users';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login=()=>{

    const [username, setUsername] = useState(" ")
    const [password, setPassword] = useState(" ")
    const navigate = useNavigate()

    const paperStyle={padding :30,height:'80vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const textFieldStyle = {margin : "20px auto"}

    const handleLogin = async(e) =>{
        e.preventDefault();
        try{
            await UserService.login(username, password)
            .then(() =>{
                navigate("/")
                window.location.reload()
            },
            (error) =>{
                console.log(error)
            } 
            )
        }catch(err){
            console.log(err)
        }
    }

 
    return(
        <form onSubmit={handleLogin}>
            <Paper elevation={15} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockIcon/></Avatar>
                    <h2>Login</h2>
                </Grid>
                <TextField style={textFieldStyle} 
                autoFocus label='Username' 
                value={username}
                onChange = {(e) => setUsername(e.target.value)}
                placeholder='Enter username' 
                fullWidth required/>

                <TextField label='Password' 
                value={password}
                onChange= {(e) => setPassword(e.target.value)}
                placeholder='Enter password' 
                type='password' 
                fullWidth required/>

                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>

                <Typography > Don't have an account ?
                     <Link to="/signup" > Register  </Link>
                </Typography>
            </Paper>
        </form>
    )
}

export default Login