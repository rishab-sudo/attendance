import React from 'react'
import Sidebar from "../../../src/SideBar/SideBar"
import Header from "../DashBoard/Header"
import ListGroup from 'react-bootstrap/ListGroup';
import LoginImg from "../../assests/LoginImg.png"
import data from "./Documentdata"
import ReactReadMoreReadLess from "react-read-more-read-less";
import "../../App.css"
const Documents = () => {
  return (
    <>
       <Sidebar/>
    <Header/>
    <header id="Daily_Header">
      <div id="sub_header_container">
         <div className="subheader_text">
     <p id="headingg">Documents</p>
     <p id="sub_heading">Dashboard / Documents</p>
     </div>
     <div id="btn_container">
     <button id="btn">Upload Documents</button>
     </div>
</div>
</header>

<div id="Documents_table_container">
<div id="Doc_table_header_content">
  <p style={{fontWeight:"",marginLeft:"2rem",fontSize:'1.5rem'}}>Documents</p>
  
  <select class="form-select form-select-lg mb-0" 
     aria-label=".form-select-lg example"
     style={{width:"12rem",height:"2.5rem",borderRadius:"15px",fontSize:"1rem",marginRight:"15px",marginLeft:"auto",}}>
  <option selected >Select Semester</option>
  <option value="1">One</option>
</select>
<select class="form-select form-select-lg mb-0" 
aria-label=".form-select-lg example"
style={{width:"12rem",height:"2.5rem",borderRadius:"15px" ,fontSize:"1rem" ,marginRight:"15px"}}>
  <option selected>Select Course</option>
  <option value="1">One</option>
</select>
<select class="form-select form-select-lg mb-0" 
aria-label=".form-select-lg example"
style={{width:"12rem",height:"2.5rem",borderRadius:"15px" ,fontSize:"1rem" ,marginRight:"15px"}}>
  <option selected>Select Class</option>
  <option value="1">One</option>
</select>
</div>
<ListGroup >
    <ListGroup.Item>
 <div class="container">
     <div class="row align-items-start">
  
      <div class="col-1" style={{textAlign:"center",fontSize:"",fontWeight:"bold",color:"blue",maxWidth:""}}>
       S.No
       </div>
       <div class="col-2" style={{textAlign:"center" ,fontWeight:"bold",color:"blue",maxWidth:''}}>
       Images
       </div>
        
       <div class="col-4" style={{textAlign:"center",fontWeight:"bold",color:"blue",maxWidth:""}}>
      Title
       </div>
       
      <div class="col-5" style={{textAlign:"center",fontWeight:"bold",color:"blue"}}>
      Description
       </div>
  
   </div>
</div>
       </ListGroup.Item>
 {data.map(data => (  
  <ListGroup.Item>
 <div class="container">
     <div class="row align-items-start">
      <div class="col-1" style={{textAlign:"center",color:'blue',maxWidth:"",marginTop:"auto",marginBottom:"auto"}}>
      {data.SNo}
       </div>
       <div class="col-2" style={{textAlign:"center",display:"",maxWidth:'',marginTop:"auto",marginBottom:"auto"}}>

       <img src={LoginImg} id="Doc_img"/>
       </div>
       <div class="col-4" style={{textAlign:"justify",maxWidth:"",marginTop:"auto",marginBottom:"auto"}}>
        <p  id="Title_text">
       {data.Title}
       </p>
       </div>
       <div class="col-5" style={{textAlign:"justify",maxWidth:"",marginTop:"auto",marginBottom:"auto"}}>
       <p id="description_text" style={{marginTop:"auto",marginBottom:"auto"}}>
       <ReactReadMoreReadLess
                charLimit={200}
                readMoreText={"Read more"}
                readLessText={"Read less"}
           
            >
                 {data.Description}
            </ReactReadMoreReadLess>
       </p>
       </div>
              
   </div>
</div>
   </ListGroup.Item>
  ))}  
       <ListGroup.Item></ListGroup.Item>
  </ListGroup>  
  {/* <div style={{:"4rem"}}></div> */}
  
  </div>

    </>
  )
}

export default Documents
