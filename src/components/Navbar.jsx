import React from 'react';
import {
  AppBar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Badge,
  Toolbar
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const logout = ()=>{
  localStorage.removeItem("token")
}

function Navbar() {
  return (
    <AppBar color="default" position='fixed'>
      <Toolbar sx={{display:'flex',
    justifyContent: 'space-between'}}>
      <Badge badgeContent= {4} color="error">
        <EmailIcon/>
      </Badge>

      <List sx={{  display: 'flex'}}>
        <ListItem>
          <ListItemButton component="a" href="/home">
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton component="a" href="/requests">
            <ListItemText primary="Requests" />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton component="a" href="/about">
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>

    

        <ListItem>
          <ListItemButton onClick={logout} href="/login">
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
