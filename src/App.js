import Login from "./components/Login";
import "./App.css";
import Register from "./components/Register";
import { Route,Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { NewDonor } from "./components/NewDonor";
import { HospitalRequests } from "./components/HospitalRequests";
// import { AdminDashboard } from "./components/AdminDashboard";
import { Box } from "@mui/system";
// import { AdminNavBar } from "./components/AdminNavBar";
// import { Stack } from "@mui/material";
// import { AdminSideBar } from "./components/AdminSideBar";
 import { ManageHospital } from "./AdminPages/ManageHospital";
import AdminHome from "./AdminPages/AdminHome";
import DonorRequests from "./AdminPages/DonorRequests";
import ManageUsers from "./AdminPages/ManageUsers";


function App() {




  return (
    <div>
      <Box>
        <Routes>
          {/* Donor */}
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new donor" element={<NewDonor />} />
          <Route path="/requests" element={<HospitalRequests />} />

          {/* Admin */}
          <Route path="/manageHospital" element={<ManageHospital/>} />
          <Route path="/adminhome" element={<AdminHome/>}/>
          <Route path="/donors" element= {<DonorRequests/>}/>
          <Route path="/users" element= {<ManageUsers/>}/>
        </Routes>
      </Box>
     
      {/* <Box>
        <AdminNavBar/>
        <Stack sx={{ marginTop: "60px" }} direction="row" spacing={1}>
          <AdminSideBar />
          <AdminDashboard />
        </Stack>
        <Routes>
        <Route path="/manageHospital" element={<ManageHospital />} />
        </Routes>
      </Box> */}
    </div>
  );
}

export default App;
