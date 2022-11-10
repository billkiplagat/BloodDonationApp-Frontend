import Login from "./components/Login";
import "./App.css";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { NewDonor } from "./components/NewDonor";
import { HospitalRequests } from "./components/HospitalRequests";
// import { AdminDashboard } from "./components/AdminDashboard";
import { Box } from "@mui/system";
// import { AdminNavBar } from "./components/AdminNavBar";
// import { Stack } from "@mui/material";
// import { AdminSideBar } from "./components/AdminSideBar";
// import { ManageHospital } from "./AdminPages/ManageHospital";


function App() {




  return (
    <div>
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new donor" element={<NewDonor />} />
          <Route path="/requests" element={<HospitalRequests />} />
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
