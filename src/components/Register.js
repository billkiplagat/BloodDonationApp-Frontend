import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(10).required(),
  //    .min(8)
  // age: yup.number().min(18).max(35).required(),
  // email: yup.string().email().required(),
  // role: yup.string().required()
  // passwordConfirm: yup.string().oneOf([yup.ref("password")])
});

const Signup = () => {
  const paperStyle = {
    padding: "30px 20px",
    height: "80vh",
    width: 300,
    margin: "20px auto",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const textFieldStyle = { margin: "20px auto" };

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const sendDataToDb = (data) => {
    fetch("api/registerDonor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(navigate("/login"));
    // .catch(navigate('/*'))
    console.log(data);
  };

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Register</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit(sendDataToDb)}>
          <TextField
            style={textFieldStyle}
            autoFocus
            fullWidth
            label="Email"
            {...register("email")}
            placeholder="Enter your Email"
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            {...register("password")}
            placeholder="Enter your password"
          />

          <Button
            style={textFieldStyle}
            type="submit"
            variant="contained"
            color="primary"
          >
            Sign up
          </Button>

          <Typography>
            {" "}
            Do you have an account ?<Link to="/login">Login </Link>
          </Typography>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
