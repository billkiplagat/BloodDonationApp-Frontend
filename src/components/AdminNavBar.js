import React from "react";
import { AppBar, Toolbar,Typography } from "@mui/material";

export const AdminNavBar = ()=>{

    return(

        <AppBar>
        <Toolbar>
  
          <Typography variant="h5">Admin Dashboard</Typography>
        </Toolbar>
      </AppBar>
    )
}