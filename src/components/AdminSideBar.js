import {List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';



export const AdminSideBar = () => {
  return (
    <Box flex={2} p={1} maxWidth={200}>
      <Box position='fixed'>
        <List>
        <ListItem disablePadding>
            <ListItemButton component= "a" href= "/adminhome">
              <ListItemIcon sx={{color: 'black'}}><DashboardIcon/> /</ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component= "a" href= "/donors">
              <ListItemIcon sx={{color: 'red'}}><BloodtypeIcon/> /</ListItemIcon>
              <ListItemText primary="Donor Requests" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component= "a" href= "/manageHospital">
              <ListItemIcon sx={{color:'blue'}}><LocalHospitalIcon/> /</ListItemIcon>
              <ListItemText primary="Manage Hospital" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component= "a" href= "/users">
              <ListItemIcon sx={{color:'yellow'}}><GroupIcon/> /</ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component= "a" href= "/logout">
              <ListItemIcon sx={{color:'black'}}><LogoutIcon/> /</ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
