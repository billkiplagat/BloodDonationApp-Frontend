import {
  Table,
  TableContainer,
  Button,
  ButtonGroup,
  TableRow,
  TableCell,
  TableHead,
  Typography,
  TableBody,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Navbar from "./Navbar";
import { Box } from "@mui/system";

export const HospitalRequests = () => {
  const [hospital, setHospital] = useState([]);

  useEffect(() => {
 
    fetch("api/universal/getAllHospitals",{
      headers:{
        "Content-Type": "application/json",
         Authorization: `Bearer ${localStorage.getItem("token")}` 
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => setHospital(result))
    
      .catch((e) => console.log(e));
      console.log(localStorage.getItem("token"));
  }, []);

  return (
    <Box sx={{ margin: "30px" }}>
      <Navbar />
      <Typography variant="h4" sx={{ marginTop: "100px" }}>
        Hospital Donation Requests
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ maxHeight: "400px", marginTop: "10px" }}
      >
        <Table sx={{ minWidth: 450 }} size="medium" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <Typography sx={{ textDecoration: "underline" }} variant="h6">
                  Hospital Name
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography sx={{ textDecoration: "underline" }} variant="h6">
                  Hospital Address
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography sx={{ textDecoration: "underline" }} variant="h6">
                  Phone Number
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography sx={{ textDecoration: "underline" }} variant="h6">
                  Email
                </Typography>
              </TableCell>

              <TableCell align="center">
                <Typography sx={{ textDecoration: "underline" }} variant="h6">
                  Blood Types
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography sx={{ textDecoration: "underline" }} variant="h6">
                  Actions
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {hospital.map((row) => (
              <TableRow key={row.hospital_id}>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="center">{row.address}</TableCell>
                <TableCell align="center">{row.phoneNumber}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.bloodType}</TableCell>

                <ButtonGroup
                  sx={{
                    // display: 'flex',
                    // gap: 2,
                    m: 1,
                  }}
                >
                  {/* <Link to={'/message'}> */}
                  <Button color="success" variant="contained">
                    Accept
                  </Button>
                  {/* </Link> */}
                </ButtonGroup>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
