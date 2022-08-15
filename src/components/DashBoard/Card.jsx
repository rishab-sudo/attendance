import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import homeicon from "../../assests/homeicon.png"
import forwordicon from "../../assests/forwordicon.png"
import backicon from "../../assests/backicon.png"
import QRicon from "../../assests/QRicon.png"
import shareicon from "../../assests/shareicon.png"
import { BiQrScan } from "react-icons/bi";
import{FaShareAlt} from "react-icons/fa";
import{FaEnvelope} from "react-icons/fa";
import {FaPhoneAlt} from "react-icons/fa";
import {FaClock} from "react-icons/fa";
import items from "./Data"

const Cards = () => {

  const [value, onChange] = useState(new Date());

  return (
    <>
  <div class="container">
  <div class="row">
    
    <div class="col"  id="card_col">
         <div className="card text-white mb-2" style={{width: "300px", height: "200px"  }} id="cards">
          <div className="card-body">
            <h3 className="card-title" style={{fontSize:"4rem"}}>300</h3>
           <p className="card-text">
              Registered Students <br></br>
              Description text
            </p>
          </div>
        </div>
    </div>


    <div class="col">
    <div className="card text-white  mb-2" style={{ width: "300px", height: "200px" }} id="cards">
         
         <div className="card-body">
           <h5 className="card-title"style={{fontSize:"4rem"}}>250</h5>
           <p className="card-text">
             Active Students<br></br>
             Description text
           </p>
         </div>
       </div>
    </div>

    <div class="col">
    <div className="card text-white mb-2" style={{ width: "300px", height: "200px"  }} id="cards">
         
         <div className="card-body">
           <h5 className="card-title" style={{fontSize:"4rem"}}>180</h5>
           <p className="card-text">
             Present Today<br></br>
             Description text
           </p>
         </div>
       </div>
    </div>
  </div>
</div>

   
   
    
    
 
   
 
<div class="container"  id="QRmain_container">
  <div class="row" >
       <div >
            <div id="QR_heading_container">

            <img src={QRicon}id="QRicon"/> 
           <p id="QR_text">Generate QR</p>
         
            <img src={shareicon} id="shareicon"/>
            </div>
            <div className="underline"> </div>
        </div>
      

    <div class="col" id='form'>
           <label for="Semester" id="lables">Enter Semester</label>
              <input type="text" className="form-control" placeholder="Semester 1" aria-label="First name" id="QR_form_inputs" />
              <label for="Course" id="lables">Enter Course</label>
              <input type="text" className="form-control" placeholder="B.Tech" aria-label="First name" id="QR_form_inputs" />
              <label for="Class" id="lables">Enter Class</label>
              <input type="text" className="form-control" placeholder="CSE-II" aria-label="First name" id="QR_form_inputs" />
    </div>
         
    <div class="col" id='form'>
          <label for="Lecture" id="lables">Enter Lecture</label>
              <input type="text" className="form-control" placeholder="Physics-1" aria-label="Last name" id="QR_form_inputs" />
              <label for="Faculty" id="lables">Enter Faculty Name</label>
              <input type="text" className="form-control" placeholder="Sangeet Das" aria-label="Last name" id="QR_form_inputs" />
              <label for="Time" id="lables">Enter Time Slot</label>
              <input type="text" className="form-control" placeholder="9:00AM-11:00Am" aria-label="Last name" id="QR_form_inputs" />
         </div>
   
    <div class="row">
    <div class="col">
    <button id='QRbtn'>Generate QR</button>
    </div>
          
 </div>
  
  </div>
    </div>
{/* QR-container-ends */}

<div class="container"  id="table_container">
  <div class="row" >

          <div >
            <div id="table_heading_container">
            <img src={homeicon} id="homeicon"/> 
           <p id="table_header_text">Class Schedule</p>
           <div id="datepicker">
           <DatePicker onChange={onChange} value={value} />
           </div>
            </div>
            <div className="underline"> </div>
        </div>

  <div className="container" id="table_row1">
    <div className="row justify-content-center">
      <div id="table_row1_text">
    <div className="col" >
      Classes
    </div>
    <div className="col">
      Subjects
    </div>
    <div className="col">
      Time Slot
    </div>
    </div>
    </div>
    </div>

    {items.map(item => (  
         <div className="container" id="table_row2">
         <div className="row">
         <div id="table_text">
         <div className="col">
          {item.Classes}
         </div>
         <div className="col">
          {item.Subjects}
         </div>
         <div className="col">
         {item.TimeSlot}
         </div>
         </div>
         </div>
         
         </div>
        ))}  

   
    

</div>
</div>
        
 {/* contact-icon-jsx-begins */}
  <div class="container" id="contact_container">
  <div class="row">
  <div>
   <div id="contact_heading_container">
   <FaPhoneAlt id="phoniconn"/>
   <p id="heading"> Contact Us! </p>
  </div>
    <div className="underline"></div>
  </div>
  
{/* contact-form-begins */}
      <div className="col" id="contact_form">

             <label for="Name" id="lables">Name</label>
              <input type="text" className="form-control" placeholder="Name" aria-label="First name" id="Cont_form_inputs" />
              <label for="email" id="lables">Email ID</label>
              <input type="email" className="form-control" placeholder="Email ID" aria-label="First name" id="Cont_form_inputs" />
              <label for="message" id="lables">Message</label>
               <input type="text" className="form-control" placeholder="Message" aria-label="First name" id="cont_mssg_inputs" />
       <button id="submit_btn">Submit</button>
       </div>
   
    {/* contact-rightside-card-begins */}
  <div className="col" >
    <div class="card" id="contact_card" style={{width: "350px", height:"320px"}}>
    <div className="card-body">
    <h5 className="card-title" id="contact_card_title">Contact Info</h5>
    <div id="underline"></div>
    <div id="contact_card_text">
    <a href = "mailto:" style={{color:"white"}}>
    <p id="card-text"> <FaEnvelope id="mailicon"/>admin@gmail.com</p>
    </a>
    <a href="tel:+6494461709" style={{color:"white"}}>
    <p id="card-text"><FaPhoneAlt id="phonicon" style={{color:"white"}}/>9876543210</p>
    </a>
     <p id="card-text"><FaClock id="clockicon"/>09:00am-15:00pm</p>
     </div>
  </div>
  </div>
  </div>
  
  
  </div>
</div>
    </>
  )
}

export default Cards
  
            
               
              
       
  
  
