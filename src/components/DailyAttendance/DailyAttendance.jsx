import React,{useRef,useState}from "react";
import DatePicker from 'react-date-picker';
import LoginImg from "../../assests/LoginImg.png"
import "../../App.css"
import {BiSearch} from "react-icons/bi";
import Sidebar from "../../../src/SideBar/SideBar"
import Header from "../DashBoard/Header"
import forwordicon from "../../assests/forwordicon.png"
import backicon from "../../assests/backicon.png"
import ListGroup from 'react-bootstrap/ListGroup';
import data from "./Dailydata"

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
<div className="div" style={{marginLeft:"270px"}}>
<h4>B.tech</h4>
<h6>computer science-1</h6>
</div>

<div id="Daily_table_container">
<ListGroup >
    <ListGroup.Item>
 <div class="container">
     <div class="row align-items-start">
  
      <div class="col" style={{textAlign:"center",fontSize:"bold"}}>
       S.No
       </div>
       <div class="col" style={{textAlign:"center"}}>
       Student Name
       </div>
        
       <div class="col" style={{textAlign:"center"}}>
       Student ID
       </div>
       
       <div className=""style={{width:"45%"}}></div>
     
       <div class="col" style={{textAlign:"center"}}>
       Attendance
       </div>
       <div class="col" style={{textAlign:"center"}}>
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
       <img src={LoginImg} id="circle" alt=""></img>
       {data.StudentName}
       </div>
       <div class="col" style={{textAlign:"center"}}>
       {data.StudentID}
       </div>
       <div className=""style={{width:"45%"}}></div>
       <div class="col" style={{textAlign:"center"}}>
       {data.Attendance}
       </div>
       <div class="col" style={{textAlign:"center"}}>
        <i type="button"
        onClick={""}
        >...</i>


     
       </div>
   </div>
</div>
   </ListGroup.Item>
  ))}  
  </ListGroup>  
  
  </div>
   </>
  );
}

export default BasicExample;
   
     
     
      
      
      
       
     

   

         

  