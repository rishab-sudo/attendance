import React from 'react'
import logout from "../../assests/logout.png"
import notification from "../../assests/notification.png"

const header = () => {
  return (
    <div id="top_header">
    <div class="d-flex justify-content-end" id="header-icons">
         <input
        id= "search-bar"
       type="search"
       placeholder= "   Search by roll no."
       onChange={""}
       value={""} 
       />
       <img src={notification} id="notification-icon" />    
       <img src={logout} id="logout-icon"/>
      </div>
      </div>
  )
}

export default header
