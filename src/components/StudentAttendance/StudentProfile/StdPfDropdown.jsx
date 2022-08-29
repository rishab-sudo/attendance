import React from 'react'
import "../../../App.css"
import StdPfModal from "./StdPfModal"
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

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" id="drop_content" style={{maxWidth:''}}>
    <li style={{marginTop:"-8px",fontSize:".9rem",textAlign:""}}>
      {/* <a class="dropdown-item" onClick={()=>goToModal()}>View Detail</a> */}
      <a class="dropdown-item" type="button" >
        
        <StdPfModal/>
    
        </a>
    </li>
    <li style={{marginTop:"-4px",fontSize:".9rem",textAlign:""}}><a class="dropdown-item" href="#">Cancel</a></li>
  </ul>
  </div>
</div>
   
  )
}

export default Dropdown
