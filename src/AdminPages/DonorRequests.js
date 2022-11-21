import { Box, Button, ButtonGroup, Divider, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { AdminNavBar } from '../components/AdminNavBar'
import { AdminSideBar } from '../components/AdminSideBar'
import { useState, useEffect } from 'react'
import Paper from "@mui/material/Paper";
import axios from 'axios'
import { useParams } from "react-router-dom"

function DonorRequests() {
  const [donor, setDonor] = useState([]);
  // const {id} =useParams()




  useEffect(() => {
    fetch("api/admin/allDonors",
    {
      headers:{
        "Content-Type": "application/json",
         Authorization: `Bearer ${localStorage.getItem("token")}` 
      },
      method: "GET",
    }
    )
      .then((res) => res.json())
      .then((result) => setDonor(result))
   
      .catch(error => console.log(error))
  }, [])


  const deleteDonor = async (id) => {
    await axios.delete(`admin/delete/${id}`)


  }
  return (
    <Box flex={2} p={1}>
      <AdminNavBar />
      <Stack sx={{ marginTop: "10px" }} direction="row" spacing={1}
        divider={<Divider orientation="vertical" flexItem />}>
        <AdminSideBar />
        <Box >

          <Typography variant="h4" sx={{ marginTop: "30px" }}>  Donor Donation Requests
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
                      Donor Full Name
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={{ textDecoration: "underline" }} variant="h6">
                      PhoneNumber
                    </Typography>
                  </TableCell>

                  <TableCell align="center">
                    <Typography sx={{ textDecoration: "underline" }} variant="h6">
                      BloodType
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={{ textDecoration: "underline" }} variant="h6">
                      Location
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
                {donor.map((row) => (
                  <TableRow key={row.donor_id}>
                    <TableCell align="left">{row.fullName}</TableCell>
                    <TableCell align="center">{row.phoneNumber}</TableCell>
                    <TableCell align="center">{row.bloodType}</TableCell>
                    <TableCell align="center">{row.location}</TableCell>

                    <ButtonGroup
                      sx={{
                        display: 'flex',
                        gap: 2,
                        m: 1,
                      }}
                    >
                      {/* <Link to={'/message'}> */}
                      <Button color="success" variant="contained">
                        Accept
                      </Button>
                      {/* </Link> */}
                      <Button onClick={() => { deleteDonor(row.donor_id) }} color="error" variant="contained">
                        Delete
                      </Button>





                    </ButtonGroup>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>


        </Box>

      </Stack>


    </Box>
  )
}

export default DonorRequests