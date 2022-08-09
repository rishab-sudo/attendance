import React, {useState} from 'react'
import Cards from "./Card"
import SideBar from '../../SideBar/SideBar'
import "../../App.css"
import { Container } from 'react-bootstrap'
import Header from "./Header"



const DashBoard = () => {
 

  return (
    <>
<div style={{backgroundColor:"#EAF4FF"}}>
   <SideBar/>
   <Header/>
<div style={{height:".5rem", backgroundColor:"white"}}></div>
  <div style={{marginLeft:"230px"}}>
    <Cards/>
   </div>
</div>
</>

 )
}

export default DashBoard
   

   


 

  
     
    
    
    
          
             
