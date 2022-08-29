import React from 'react'
import "../../App.css"

import {useNavigate} from "react-router-dom"

const Dropdown = () => {
  const navigate =useNavigate();
  const goToModal=()=>{
    navigate("/Modal")
  };
  return (
    <div>
<div class="btn-group dropstart">
  <button class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    ...
  </button>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" id="drop_content" style={{width:'20px',backgroundColor:'#EAF4FF'}}>
    <li style={{marginTop:"-7px",fontSize:"1rem",textAlign:"",paddingLeft:"15px"}}>
        Present
    </li>
   <li className='underline' style={{width:"100%",marginLeft:"0px",backgroundColor:'Lightgrey'}}></li>
     
      
    <li style={{marginTop:"0px",fontSize:"1rem",textAlign:"",paddingLeft:"15px"}}>
       Absent
       </li>
  </ul>

  </div>
</div>
   
  )
}

export default Dropdown
