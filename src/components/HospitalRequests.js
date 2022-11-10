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
    fetch("http://localhost:8080/donor/requests")
      .then((res) => res.json())
      .then((result) => setHospital(result))
      .catch((e) => console.log(e));
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
                  Donation Type
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
              <TableRow key={row.id}>
                <TableCell align="left">{row.name}</TableCell>

                <TableCell align="center">{row.town}</TableCell>
                <TableCell align="center">{row.donation}</TableCell>

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
