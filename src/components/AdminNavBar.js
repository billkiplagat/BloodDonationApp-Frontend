import React from "react";
import { AppBar, Toolbar,Typography } from "@mui/material";

export const AdminNavBar = ()=>{

    return(

        <AppBar position="sticky">
        <Toolbar>
  
          <Typography variant="h5">Admin Dashboard</Typography>
        </Toolbar>
      </AppBar>
    )
}