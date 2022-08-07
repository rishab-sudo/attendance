import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "../src/SideBar/SideBar"
import DashBoard from "./components/DashBoard/DashBoard";
import DailyAttendance from "./components/DailyAttendance/DailyAttendance";
import Login from "./components/Login/Login";
import ForgotPassword from "./components/Login/ForgotPassword"
import OTP from "./components/Login/OTP"
import NewPassword from "./components/Login/NewPassword"
import PrivateRoutes from  "./utils/PrivateRoutes"


function App() {
  return (
    <div className="App">
      {/* <h1 className='text-center'>Radhe Radhe</h1> */}
      <Router>
      
   
        <Routes>
        <Route path="/" element={<Login/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
          <Route path="/OTP" element={<OTP/>}/>
          <Route path="/NewPassword" element={<NewPassword/>}/>
          
          <Route element={<PrivateRoutes />}>
          <Route path="/Dashboard" element={<DashBoard />} />
          <Route path="/DailyAttendance" element={<DailyAttendance />} />
          </Route>
        </Routes>
 
    </Router>
    </div>
  );
}

export default App;
