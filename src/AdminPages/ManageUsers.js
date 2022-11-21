import { Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { AdminNavBar } from '../components/AdminNavBar'
import { AdminSideBar } from '../components/AdminSideBar'

function ManageUsers() {
  return (
    <Box flex={2} p={1}>
            <AdminNavBar/>
           <Stack sx={{ marginTop: "20px" }} direction="row" spacing={1}
           divider={<Divider orientation="vertical" flexItem />}>
           
           
           <AdminSideBar />
            <Typography>Users Management</Typography>

           </Stack>
        </Box>
  )
}

export default ManageUsers