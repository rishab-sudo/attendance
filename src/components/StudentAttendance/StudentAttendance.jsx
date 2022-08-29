import React,{useRef,useState}from "react";
import DatePicker from 'react-date-picker';
import {BiSearch} from "react-icons/bi";
import Sidebar from "../../../src/SideBar/SideBar"
import Header from "../DashBoard/Header"
import ListGroup from 'react-bootstrap/ListGroup';
import data from "./StudentAttendanceData"
import StdDropdown from "./StdDropdown";
const StudentAttendance = () => {
  const [value, onChange] = useState(new Date());
  
  return (
    <div>
      <Sidebar/>
    <Header/>
    <header id="Daily_Header">
      <div id="subHeader_container">
     <p id="headingg">Student-Attendance</p>
     <p id="sub_heading">Dashboard / Student Attendance</p>
     <div id="content_container">
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
<BiSearch id="srch_icon" onClick={""} type="button" />
</div>
    <div id="Daily_datepicker">
      <DatePicker onChange={onChange} value={value} style={{}}/>
    </div>
  </div>
</div>
</header>

<div id="studentAttendance_mainContainer">

<div id="Student_Table_Container">
<div id="table_header_content">
  <p style={{fontWeight:"",marginLeft:"2rem",fontSize:'1.5rem'}}>Attendance</p>
  
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
<BiSearch id="srch_icon" onClick={""} type="button" />
</div>

</div>

<div id="Student_table">
<ListGroup >
    <ListGroup.Item>
 <div class="container">
     <div class="row align-items-start">
  
      <div class="col" style={{textAlign:"center",fontSize:"",fontWeight:"bold",verticalAlign:""}}>
       S.No
       </div>
       <div class="col" style={{textAlign:"center" ,fontWeight:"bold",verticalAlign:""}}>
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
       <div class="col" style={{textAlign:"center",display:""}}>
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
     
       <StdDropdown/>


     
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
 
 export default StudentAttendance
   
 


