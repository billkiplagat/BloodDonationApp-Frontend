import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

export const AdminSideBar = () => {
  return (
    <Box>
      <Box>
        <List>
        <ListItem disablePadding>
            <ListItemButton component= "a" href= "/admindash">
              <ListItemIcon sx={{color: 'black'}}><DashboardIcon/> /</ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component= "a" href= "/donorRequests">
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
        </List>
      </Box>
    </Box>
  );
};
