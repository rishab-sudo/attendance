
import React from 'react'
import "../../App.css"
import Modal from "./Modal"

const Dropdown = () => {
  return (
    <div>
<div class="btn-group dropstart">
  <button class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    ...
  </button>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" id="drop_content" style={{maxWidth:''}}>
    <li style={{marginTop:"-8px",fontSize:".9rem",textAlign:""}}><a class="dropdown-item" to="/Modal">View Detail</a></li>
    <li style={{marginTop:"-4px",fontSize:".9rem",textAlign:""}}><a class="dropdown-item" href="#">Change</a></li>
  </ul>
  </div>
</div>
   
  )
}

export default Dropdown
