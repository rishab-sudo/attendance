import React, {useState} from 'react'
import Cards from "./Cards"
import SideBar from '../../SideBar/SideBar'
import "../../App.css"
import { Container } from 'react-bootstrap'



const DashBoard = () => {
 

  return (


<div style={{backgroundColor:"pink"}}>
<div class="d-flex bd-highlight">
  <div class="p-2 flex-shrink-1 bd-highlight"> <SideBar/></div>
  <div class="p-2 w-100 bd-highlight"> <Cards/></div>
</div>

   

   


 
 </div>
  
     
    
    
    
 
  )
}

export default DashBoard
          
             
