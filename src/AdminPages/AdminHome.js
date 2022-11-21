import React from 'react'
import { Divider, Stack,  Typography } from "@mui/material";
import { Box } from "@mui/system";
import { AdminSideBar } from "../components/AdminSideBar";

import { AdminNavBar } from "../components/AdminNavBar";
function AdminHome() {
  return (
    <Box flex={2} p={1}>
    <AdminNavBar/>
    <Stack sx={{ marginTop: "20px" }} direction="row" spacing={1} 
     divider={<Divider orientation="vertical" flexItem />}
     
    >
        <AdminSideBar />
       
       <Box display= 'flex' flexDirection='column' justifyContent= 'flex-start'>
       <Typography>Welcome Back Administrator</Typography>
       
       </Box>
      
        
      </Stack>
    
    
  </Box>
  )
}

export default AdminHome