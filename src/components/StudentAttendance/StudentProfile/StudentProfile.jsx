import React,{useState} from 'react'
import Sidebar from '../../../SideBar/SideBar'
import Header from '../../DashBoard/Header'
import {BiSearch} from "react-icons/bi";
import DatePicker from 'react-date-picker';
import ListGroup from 'react-bootstrap/ListGroup';
import data from "../StudentAttendanceData"
import StdPfDropdown from"./StdPfDropdown"
const Profile = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
       <Sidebar/>
    <Header/>

    <header id="Daily_Header">
      <div id="subHeader_container">
     <p id="Profile_headingg">Student-Profile</p>
     <p id="Profile_sub_heading">Dashboard / Student / Profile</p>
     {/* <div id="content_container">
     <select class="form-select form-select-lg mb-0" 
     aria-label=".form-select-lg example"
     style={{width:"12rem",height:"2.5rem",borderRadius:"15px",fontSize:"1rem",marginRight:"15px"}}>
  <option selected >Select Course</option>
  <option value="1">One</option>
</select>
<select class="form-select form-select-lg mb-0" 
aria-label=".form-select-lg example"
style={{width:"12rem",height:"2.5rem",borderRadius:"15px" ,fontSize:"1rem" ,marginRight:"15px"}}>
  <option selected>Select Class</option>
  <option value="1">One</option>
</select>
<div id="srch_icon_container">
<BiSearch id="srch_icon"/>
</div>
    <div id="Daily_datepicker">
      <DatePicker onChange={onChange} value={value} style={{}}/>
    </div>
  </div> */}
</div>
</header>

<div id="studentAttendance_mainContainer">

<div id="Student_Table_Container">
<div id="table_header_content">
  <p style={{fontWeight:"",marginLeft:"2rem",fontSize:"1.5rem"}}>Profile</p>
  
  <select class="form-select form-select-lg mb-0" 
     aria-label=".form-select-lg example"
     style={{width:"12rem",height:"2.5rem",borderRadius:"15px",fontSize:"1rem",marginRight:"15px",marginLeft:"auto",}}>
  <option selected >Select Course</option>
  <option value="1">One</option>
</select>
<select class="form-select form-select-lg mb-0" 
aria-label=".form-select-lg example"
style={{width:"12rem",height:"2.5rem",borderRadius:"15px" ,fontSize:"1rem" ,marginRight:"15px"}}>
  <option selected>Select Class</option>
  <option value="1">One</option>
</select>

<div id="srch_icon_container" style={{marginRight:"2rem"}}>
<BiSearch id="srch_icon" />
</div>

</div>

<div id="Student_table">
<ListGroup >
    <ListGroup.Item>
 <div class="container">
     <div class="row align-items-start">
  
      <div class="col" style={{textAlign:"center",fontSize:"",fontWeight:"bold"}}>
       S.No
       </div>
       <div class="col" style={{textAlign:"center" ,fontWeight:"bold"}}>
       Student Name
       </div>
        
       <div class="col" style={{textAlign:"center",fontWeight:"bold"}}>
       Student ID
       </div>
       
       <div class="col" style={{textAlign:"center",fontWeight:"bold"}}>
       Course
       </div>
       <div class="col" style={{textAlign:"center",fontWeight:"bold"}}>
     Class
       </div>
     
       <div class="col" style={{textAlign:"center",fontWeight:"bold"}}>
        Total Attendance
       </div>
       <div class="col" style={{textAlign:"center",fontWeight:"bold"}}>
       Actions
       </div>
   </div>
</div>
       </ListGroup.Item>
 {data.map(data => (  
  <ListGroup.Item>
 <div class="container">
     <div class="row align-items-start">
      <div class="col" style={{textAlign:"center"}}>
      {data.SNo}
       </div>
       <div class="col" style={{textAlign:"center",display:"flex"}}>
       {data.StudentName}
       </div>
       <div class="col" style={{textAlign:"center"}}>
       {data.StudentID}
       </div>
       <div class="col" style={{textAlign:"center"}}>
       {data.Course}
       </div>
       <div class="col" style={{textAlign:"center"}}>
       {data.Class}
       </div>
      
       <div class="col" style={{textAlign:"center"}}>
       {data.TotalAttendance}
       </div>
       <div class="col" style={{textAlign:"center",marginTop:"-15px"}}>
       
<StdPfDropdown/>

     
       </div>
   </div>
</div>
   </ListGroup.Item>
  ))}  
  </ListGroup>  
  </div>
    </div>
  </div>

    </div>
  )
}

export default Profile
