import React from 'react'
import logout from "../../assests/logout.png"
import notification from "../../assests/notification.png"
import {BiSearch} from "react-icons/bi"
const header = () => {
  return (
    <div id="top_header">
    <div class="d-flex justify-content-end" id="header-icons">
      <div>
    <input class="form-control me-2" type="search" placeholder="Search by Roll no." aria-label="Search" 
    id="search-bar"/>
    </div>
       <img src={notification} id="notification-icon" />    
       <img src={logout} id="logout-icon"/>
      </div>
      </div>
  )
}

export default header
