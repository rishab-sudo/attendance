import React,{useRef,useState}from "react";
import DatePicker from 'react-date-picker';
import LoginImg from "../../assests/LoginImg.png"
import "../../App.css"
import {BiSearch} from "react-icons/bi";
import Sidebar from "../../../src/SideBar/SideBar"
import Header from "../DashBoard/Header"
import ListGroup from 'react-bootstrap/ListGroup';
import data from "./Dailydata"
import { FaCheckCircle } from "react-icons/fa";
import Dropdown from './Dropdown';


function BasicExample() {

  const [value, onChange] = useState(new Date());

    return (
    <>

    <Sidebar/>
    <Header/>
    <header id="Daily_Header">
      <div id="subHeader_container">
     <p id="headingg">Daily Attendance</p>
     <p id="sub_heading">Dashboard / Daily Attendance</p>
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
<BiSearch id="srch_icon"/>
</div>
    <div id="Daily_datepicker">
      <DatePicker onChange={onChange} value={value} style={{}}/>
    </div>
  </div>
</div>
</header>

<div id="DailyAttendance_mainContainer" >
<div className="div" style={{marginLeft:"270px",padding:"1rem"}}>
<h4>B.tech</h4>
<h6>computer science-1</h6>
</div>

<div id="Daily_table_container">
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
       
       <div className=""style={{maxWidth:"34%"}}></div>
     
       <div class="col" style={{textAlign:"center",fontWeight:"bold"}}>
       Attendance
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
       <div class="col" style={{textAlign:"center",display:"flex",alignContent:"center",paddingLeft:"20px"}}>
       <img src={LoginImg} id="circle" alt=""></img>
       {data.StudentName}
       </div>
       <div class="col" style={{textAlign:"center"}}>
       {data.StudentID}
       </div>
       <div className=""style={{maxWidth:"34%"}}></div>
       <div class="col" style={{textAlign:"center"}}>
       <FaCheckCircle style={{color:"lightgreen"}}/>
       </div>
       <div class="col" style={{textAlign:"center",marginTop:"-15px",marginBottom:""}}>
    <Dropdown/>
     </div>
   </div>
</div>
   </ListGroup.Item>
  ))}  
  </ListGroup>  
  
  </div>
  </div>
  
   </>
  );
}

export default BasicExample;
    



   
     
     
      
      
      
       
     

   

         

  