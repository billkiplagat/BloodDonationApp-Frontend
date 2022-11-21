import {
  Stack,
  Typography,
  FormControlLabel,
  Grid,
  RadioGroup,
  FormLabel,
  FormControl,
  Paper,
  Button,
  Radio,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { AdminNavBar } from "../components/AdminNavBar";
import { AdminSideBar } from "../components/AdminSideBar";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const hospitalScheme = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  phoneNumber: yup.string().required(),
  email: yup.string().email().required(),
  bloodType: yup.string().required(),

});

export const ManageHospital = () => {
  const textFieldStyle = { margin: "10px auto" };
  const paperStyle = {
    padding: "30px 20px",
    width: 500,
    margin: "50px 20px",
    backgroundColor: "#edf0f2",
  };

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(hospitalScheme),
  });

  const posthospital = (data) => {
    fetch("api/admin/registerHospital", {
      method: "POST",
      headers: { "Content-Type": "application/json",
      Authorization: 'Bearer ' + localStorage.getItem("token")
    },
      body: JSON.stringify(data),
    }).then(reset())
 
  };
  return (
    <Box flex={2} p={1}>
      <AdminNavBar />
      <Stack sx={{ marginTop: "20px" }} direction="row" spacing={1}>
        <AdminSideBar />
        <Box>
          <Typography>Hospital Requests Management</Typography>

          <Paper style={paperStyle}>
            <Grid>
              <h2>Please fill the form to Register New Hospital Request</h2>

              <form onSubmit={handleSubmit(posthospital)}>
                <TextField
                  style={textFieldStyle}
                  autoFocus
                  fullWidth
                  label="Hospital Name"
                  placeholder="Enter Hospital Name"
                  {...register("name")}
                />
                <TextField
                  style={textFieldStyle}
                  fullWidth
                  label="Hospital Address"
                  placeholders="Enter The Hospital Address"
                  {...register("address")}
                />
                <TextField
                  style={textFieldStyle}
                  fullWidth
                  label="Hospital Contact"
                  placeholders="Hospital Contact"
                  {...register("phoneNumber")}
                />

                <TextField
                  style={textFieldStyle}
                  fullWidth
                  label="Hospital Email"
                  placeholders="Enter The Hospital email"
                  {...register("email")}
                />

                <FormControl>
                  <FormLabel>Blood Types Donation</FormLabel>

                  <RadioGroup>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        p: 1,
                        m: 1,
                        bgcolor: "background.paper",
                        borderRadius: 1,
                      }}
                    >
                      <FormControlLabel
                        value="A+"
                        control={<Radio />}
                        label="A+"
                        {...register("bloodType")}
                      />
                      <FormControlLabel
                        value="B+"
                        control={<Radio />}
                        label="B+"
                        {...register("bloodType")}
                      />
                      <FormControlLabel
                        value="AB+"
                        control={<Radio />}
                        label="AB+"
                        {...register("bloodType")}
                      />
                      <FormControlLabel
                        value="A-"
                        control={<Radio />}
                        label="A-"
                        {...register("bloodType")}
                      />
                      <FormControlLabel
                        value="B-"
                        control={<Radio />}
                        label="B-"
                        {...register("bloodType")}
                      />
                      <FormControlLabel
                        value="AB-"
                        control={<Radio />}
                        label="AB-"
                        {...register("bloodType")}
                      />
                      <FormControlLabel
                        value="O+"
                        control={<Radio />}
                        label="O+"
                        {...register("bloodType")}
                      />
                      <FormControlLabel
                        value="O-"
                        control={<Radio />}
                        label="O-"
                        {...register("bloodType")}
                      />
                    </Box>
                  </RadioGroup>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">
                  Register
                </Button>
              </form>
            </Grid>
          </Paper>
        </Box>
      </Stack>
    </Box>
  );
};
